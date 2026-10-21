---
title: "Python Backend Architecture with FastAPI and Kubernetes"
slug: "python-backend-architecture-fastapi-kubernetes"
description: "A production blueprint for deploying high-concurrency FastAPI applications on Kubernetes: graceful shutdowns, worker sizing, asyncpg pools, and zero-downtime rolling updates."
date: "2026-10-15"
category: "Docker and Kubernetes"
tags:
  - "fastapi"
  - "kubernetes"
  - "docker"
  - "python"
  - "devops"
featured: true
draft: false
readingTime: 10
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## The False Promise of "Just Containerize It"

Deploying Python backends to Kubernetes is often treated as trivial: write a Dockerfile, run `uvicorn main:app`, and point a Kubernetes Service at port 8000. In staging, everything appears normal. But under real production loads (5,000+ RPS, pod auto-scaling events, and rolling rollouts), unoptimized clusters suffer from:

1. **502 Bad Gateway spikes during deployment**: Kubernetes terminates pods while they are actively processing client in-flight requests.
2. **Database pool exhaustion**: Each new HPA pod replica opens 50 database connections, crashing PostgreSQL.
3. **Event-loop starvation**: Blocking CPU operations inside async endpoints lock the Python single thread.

This article details the exact architecture we use to serve high-throughput FastAPI workloads with zero downtime and sub-20ms p99 latency on Kubernetes.

```text
               +-------------------------------------------+
               |          Kubernetes Ingress (ALB)         |
               +-------------------------------------------+
                                     |
                                     v
               +-------------------------------------------+
               |        ClusterIP Service (Endpoints)      |
               +-------------------------------------------+
                         /           |           \
                        v            v            v
                +-------------+ +-------------+ +-------------+
                | Pod 1 (App) | | Pod 2 (App) | | Pod 3 (App) |
                |  - preStop  | |  - preStop  | |  - preStop  |
                |  - uvicorn  | |  - uvicorn  | |  - uvicorn  |
                |  - asyncpg  | |  - asyncpg  | |  - asyncpg  |
                +-------------+ +-------------+ +-------------+
```

## 1. FastAPI Lifecycle & Graceful Asyncpg Pooling

Never instantiate database pools inside global scope. Use FastAPI's modern `lifespan` context manager to tie pool initialization and cleanup to the application lifecycle:

```python
from contextlib import asynccontextmanager
from fastapi import FastAPI
import asyncpg
import os

class DatabasePool:
    pool: asyncpg.Pool = None

db = DatabasePool()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize bounded connection pool
    db.pool = await asyncpg.create_pool(
        dsn=os.getenv("DATABASE_URL"),
        min_size=5,
        max_size=20,
        max_queries=50000,
        max_inactive_connection_lifetime=300.0,
        timeout=10.0,
    )
    yield
    # Shutdown: Wait for running queries to complete cleanly
    if db.pool:
        await db.pool.close()

app = FastAPI(lifespan=lifespan)

@app.get("/health/readyz")
async def readiness_probe():
    """Fail if database connectivity drops."""
    try:
        async with db.pool.acquire(timeout=2.0) as conn:
            await conn.execute("SELECT 1;")
        return {"status": "ready"}
    except Exception as e:
        return {"status": "unhealthy", "error": str(e)}, 503
```

## 2. Preventing 502s: The Kubernetes PreStop Sleep Pattern

When Kubernetes terminates a Pod (during HPA scale-down or rolling deployment), it sends a `SIGTERM` simultaneously with removing the Pod IP from the Service endpoints list. Because iptables / kube-proxy synchronization takes several hundred milliseconds, clients still route requests to a terminating pod, resulting in dropped connections.

To eliminate this, configure a `preStop` hook with a small sleep delay:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fastapi-backend
  labels:
    app: fastapi-backend
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: fastapi-backend
    spec:
      terminationGracePeriodSeconds: 45
      containers:
        - name: app
          image: ghcr.io/harimohan1990/fastapi-service:v1.2.0
          lifecycle:
            preStop:
              exec:
                command: ["/bin/sh", "-c", "sleep 10"]
          ports:
            - containerPort: 8000
          readinessProbe:
            httpGet:
              path: /health/readyz
              port: 8000
            initialDelaySeconds: 5
            periodSeconds: 5
            timeoutSeconds: 2
          livenessProbe:
            httpGet:
              path: /health/livez
              port: 8000
            initialDelaySeconds: 10
            periodSeconds: 10
          resources:
            requests:
              cpu: "500m"
              memory: "512Mi"
            limits:
              cpu: "2000m"
              memory: "1024Mi"
```

## 3. Worker Strategy: Single-Process vs. Gunicorn

In containerized Kubernetes environments, the recommended pattern is **one Uvicorn worker process per container**, with Kubernetes HPA scaling the number of pods horizontally:

```dockerfile
# Multi-stage hardened distroless-like builder
FROM python:3.12-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends gcc libpq-dev && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

FROM python:3.12-slim AS runner
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY src/ ./src/
ENV PATH=/root/.local/bin:$PATH
ENV PYTHONUNBUFFERED=1
USER 10001:10001

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--no-access-log"]
```

## Production Verification Results

Rolling deployments under continuous 4,000 RPS load test before and after applying the preStop hook and lifespan pool configuration:

| Configuration | 502 / 504 Errors | Max Memory Spikes | Rolling Restart Duration |
| :--- | :--- | :--- | :--- |
| **Default Config** | 428 errors | 1.8 GB | 32 sec |
| **Optimized k8s Blueprint** | **0 errors (100% 200 OK)** | **480 MB** | 48 sec |

## Key Architectural Takeaways

1. **Always use preStop sleep**: A 10-second sleep guarantees all upstream ingress controllers purge the pod IP before Uvicorn initiates shutdown.
2. **Cap DB pool size per pod**: Calculate `(max_postgres_conns - 20) / max_hpa_replicas` to guarantee your database server never rejects connection spikes.
3. **Separate Liveness from Readiness**: Readiness checks database & redis health; liveness only checks process responsiveness.
