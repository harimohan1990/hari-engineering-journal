---
title: "Production LLM Inference: Latency, Throughput, and Cost Optimization at Scale"
slug: "production-llm-inference-latency-throughput-cost"
description: "Dissecting PagedAttention, continuous batching, KV-cache fragmentation, speculative decoding, and the real hardware economics of serving 70B models."
date: "2026-09-20"
category: "LLM Infrastructure and Inference"
tags:
  - "llm-inference"
  - "vllm"
  - "gpu-infrastructure"
  - "performance"
  - "cuda"
featured: true
draft: false
readingTime: 13
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---

## Why Serving LLMs Is Fundamentally Different

Backend engineers coming from traditional microservices (FastAPI, Go, Java) are accustomed to CPU-bound or network-bound workloads where scaling horizontally is linear. LLM inference, however, operates under completely different physics:

1. **Autoregressive Sequentiality**: Generating 500 output tokens requires 500 sequential forward passes through the model weights. You cannot parallelize the future tokens of a single sequence.
2. **Memory Bandwidth Bottleneck (The Memory Wall)**: During the generation phase, the GPU spends the vast majority of its time reading model weights from High Bandwidth Memory (HBM) into SRAM/Tensor Cores. It is severely **memory bandwidth-bound**, not compute-bound.
3. **KV-Cache Explosion**: Every previously generated token stores Key and Value tensors in GPU VRAM. For long contexts (32k+ tokens), the KV-cache quickly consumes more VRAM than the model weights themselves!

```text
Traditional API:  [ Req ] --------------> [ Compute (10ms) ] --------------> [ Response ]
LLM Inference:    [ Req ] -> [ Prefill (Compute-Bound) ] -> [ Decode 1 ] -> [ Decode 2 ] ... -> [ Decode N ]
                                                            \--------- Memory-Bandwidth-Bound --------/
```

## 1. PagedAttention & Continuous Batching

In naive LLM serving, engines allocated contiguous chunks of VRAM for the maximum possible sequence length. If a user only generated 50 tokens on an allocated 2,048-token buffer, **97% of the reserved VRAM was wasted to internal fragmentation**.

### How PagedAttention Works
Inspired by virtual memory paging in operating systems, **PagedAttention** (introduced by vLLM) partitions the KV cache into fixed-size physical memory blocks (typically 16 tokens per block). The GPU only allocates blocks as tokens are actively generated:

```text
Logical KV Cache:   [ Block 0: tok 0-15 ]  [ Block 1: tok 16-31 ]  [ Block 2: tok 32-47 ]
                             |                      |                      |
Physical GPU Pages:  [ Page 84 (VRAM) ]     [ Page 12 (VRAM) ]     [ Page 209 (VRAM) ]
```

### Continuous (Iteration-Level) Batching
Static batching waits for all requests in a batch to finish generating before returning, stranding fast requests behind long generation jobs. **Continuous batching** re-evaluates the batch at every single iteration step:

```text
Step 1: Batch [ Req A (token 4),  Req B (token 18), Req C (token 1) ]
Step 2: Req B finishes! Prompt D enters immediately without waiting:
        Batch [ Req A (token 5),  Req D (token 0),  Req C (token 2) ]
```

## 2. Key Latency Metrics: TTFT vs. ITL

When benchmarking LLM APIs, single "latency" metrics are useless. You must measure two decoupled distributions:

- **Time-to-First-Token (TTFT)**: Time elapsed from request receipt to the first streaming token. Driven by prompt prefill length and compute power.
- **Inter-Token Latency (ITL)**: Time between subsequent output tokens. Dictated by GPU memory bandwidth and batch concurrency.

```python
import time
import httpx
import statistics

async def benchmark_streaming_llm(endpoint: str, prompt: str):
    async with httpx.AsyncClient() as client:
        start_time = time.perf_counter()
        first_token_time = None
        token_timestamps = []

        async with client.stream(
            "POST",
            endpoint,
            json={"model": "meta-llama/Llama-3.1-70B-Instruct", "prompt": prompt, "max_tokens": 100}
        ) as response:
            async for chunk in response.aiter_bytes():
                now = time.perf_counter()
                if first_token_time is None:
                    first_token_time = now
                token_timestamps.append(now)

    ttft_ms = (first_token_time - start_time) * 1000
    intervals = [
        (t2 - t1) * 1000 for t1, t2 in zip(token_timestamps[:-1], token_timestamps[1:])
    ]
    p95_itl_ms = statistics.quantiles(intervals, n=20)[18] if len(intervals) >= 20 else 0

    return {
        "TTFT_ms": ttft_ms,
        "Mean_ITL_ms": statistics.mean(intervals) if intervals else 0,
        "P95_ITL_ms": p95_itl_ms,
        "Tokens_Per_Sec": len(token_timestamps) / (token_timestamps[-1] - first_token_time)
    }
```

## 3. Hardware Economics: Cost vs. Throughput

Comparison for serving **Llama-3.1-70B (FP8 quantized)** at 100 concurrent user streams:

| Hardware Configuration | VRAM Total | Memory Bandwidth | Throughput (Tokens/s) | Monthly Cost | Cost / 1M Output Tokens |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **4x NVIDIA A10G (24GB)** | 96 GB | 2.4 TB/s | 142 tokens/s | $3,800 | $0.84 |
| **2x NVIDIA A100 (80GB SXM)** | 160 GB | 4.0 TB/s | 620 tokens/s | $6,200 | $0.32 |
| **1x NVIDIA H100 (80GB SXM5)** | 80 GB | 3.35 TB/s (Transformer Engine FP8) | **1,280 tokens/s** | $4,900 | **$0.12** |

Despite higher hourly instance rates, the **H100 SXM5 delivers 4x lower cost per million tokens** due to FP8 tensor cores and continuous batch density.

## Strategic Production Rules

1. **Quantize to FP8 / AWQ**: 4-bit and 8-bit weight quantization cuts VRAM footprint in half, fitting larger models onto fewer GPUs with minimal perplexity degradation.
2. **Enable Prefix Caching**: For multi-turn agents or system prompts, enable `enable_prefix_caching=True` in vLLM to reuse precomputed prompt KV caches across sessions.
3. **Set Max Model Concurrency**: Cap queue depth to protect TTFT from spiking past user tolerance thresholds.
