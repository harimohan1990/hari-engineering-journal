# Writing and Publishing Workflow Guide

This engineering journal is designed so that you can **publish, edit, and organize technical articles entirely through Markdown files**—without ever touching or modifying React components.

---

## 1. Directory Structure

All articles reside in:
```text
src/content/posts/
├── _template.md                                              <- Starter template
├── harness-engineering-reliable-ai-agents.md
├── python-backend-architecture-fastapi-kubernetes.md
├── building-scalable-rest-apis-fastapi.md
├── postgresql-connection-pooling-performance-best-practices.md
├── redis-caching-strategies-high-traffic.md
├── designing-event-driven-microservices-message-queues.md
├── production-llm-inference-latency-throughput-cost.md
└── building-llm-evaluation-benchmarking-toolkit.md
```

Files starting with an underscore (such as `_template.md`) are treated as templates and are automatically excluded from the public site.

---

## 2. Article Frontmatter Specification

Every article starts with YAML frontmatter bounded by `---`:

```yaml
---
title: "Article Title Here: Concrete Problem & Architectural Solution"
slug: "article-slug-for-clean-url"
description: "A 1-2 sentence compelling technical summary displayed on cards and search engine previews."
date: "2026-10-21"
category: "Distributed Systems"
tags:
  - "python"
  - "kafka"
  - "scalability"
coverImage: "https://example.com/cover.jpg" # Optional
featured: false # Set true to showcase at the top of the homepage
draft: false # Set true while drafting; drafts are hidden from the production build
readingTime: 9 # Optional: auto-calculated if omitted
author:
  name: "Hari Mohan"
  role: "Senior Backend & AI Infrastructure Engineer"
---
```

### Supported Categories
- `Python Engineering`
- `FastAPI and API Design`
- `Database Engineering`
- `System Design`
- `Distributed Systems`
- `Microservices`
- `Docker and Kubernetes`
- `AWS and Cloud Infrastructure`
- `CI/CD and DevOps`
- `Observability and Performance`
- `Generative AI Engineering`
- `LLM Infrastructure and Inference`
- `RAG and AI Agents`
- `Engineering Best Practices`

---

## 3. Step-by-Step Publishing Workflow

### Step 1: Copy the Template
```bash
cp src/content/posts/_template.md src/content/posts/my-new-deep-dive.md
```

### Step 2: Write Your Article in Markdown
You can use:
- **Headings** (`## H2`, `### H3`): These are automatically indexed into the sticky Table of Contents with active scrollspy.
- **Fenced Code Blocks**: Specify language identifier (`python`, `bash`, `sql`, `yaml`, `dockerfile`, `typescript`, `go`, etc.) for syntax highlighting and one-click copy buttons.
- **Tables, Diagrams, & Callouts**: GitHub Flavored Markdown (GFM) tables, lists, and blockquotes are automatically styled with the custom engineering theme.

### Step 3: Preview Locally in Real-Time
Start the development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000`. Any edits saved in `src/content/posts/*.md` trigger instant hot module reloading (HMR) without refreshing.

### Step 4: Run Automated Tests
Ensure your new article meets all frontmatter schema rules:
```bash
npm run test
```

### Step 5: Publish via Git
When you are ready to publish:
1. Ensure `draft: false` in the frontmatter.
2. Commit and push to GitHub:
```bash
git add src/content/posts/my-new-deep-dive.md
git commit -m "docs(post): publish my-new-deep-dive"
git push origin main
```

The GitHub Actions workflow `.github/workflows/deploy.yml` will automatically:
1. Run automated unit tests (`vitest`).
2. Build the production React static bundle (`vite build`).
3. Generate updated `sitemap.xml`, `rss.xml`, and `robots.txt` (`node scripts/generate-meta.js`).
4. Deploy the latest build to GitHub Pages at:
   `https://harimohan1990.github.io/hari-engineering-journal/`
