import React, { useState } from 'react';
import {
  FolderGit2,
  Zap,
  Filter,
} from 'lucide-react';
import { GithubIcon } from '@/components/common/SocialIcons';
import { Project } from '@/types/project';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 'aetherstream',
      title: 'AetherStream Core',
      tagline: 'High-Throughput Distributed Event-Driven Orchestration Engine',
      category: 'Distributed Systems',
      status: 'Open Source',
      featured: true,
      description:
        'A resilient distributed streaming engine designed to coordinate heterogeneous microservices with strict ordering guarantees, consumer group rebalancing, and dead-letter replay buffers.',
      architectureSummary: [
        'Partitioned log architecture inspired by Apache Kafka with sub-millisecond local disk append.',
        'Zero-loss consumer offset commits backed by distributed Raft state machine.',
        'Dynamic backpressure flow control to avoid cascading downstream microservice crashes.',
      ],
      metrics: [
        { label: 'Throughput', value: '185,000 msgs/sec' },
        { label: 'P99 Latency', value: '< 2.4 ms' },
        { label: 'Rebalance Recovery', value: '420 ms' },
      ],
      tags: ['Python', 'Kafka', 'Redis Streams', 'AsyncIO', 'Docker'],
      githubUrl: 'https://github.com/harimohan1990/hari-engineering-journal',
    },
    {
      id: 'kubellm-autopilot',
      title: 'KubeLLM-Autopilot',
      tagline: 'Autonomous GPU Autoscaler & Inference Proxy for vLLM on Kubernetes',
      category: 'AI Infrastructure',
      status: 'Production',
      featured: true,
      description:
        'Custom Kubernetes CRD and intelligent proxy controller that dynamically provisions GPU nodes (A100/H100) based on KV-cache memory saturation and token queue depth rather than raw CPU/GPU utilization.',
      architectureSummary: [
        'Real-time token queue depth and KV-cache telemetry scraper connecting to vLLM Prometheus metrics.',
        'Predictive scale-up controller preventing tail-latency spikes during traffic surges.',
        'Smart request routing avoiding model cold starts by pinning sessions to warm GPU replicas.',
      ],
      metrics: [
        { label: 'VRAM Utilization', value: '94% optimal' },
        { label: 'Cold-Start Reduction', value: '78%' },
        { label: 'GPU Cost Savings', value: '42%' },
      ],
      tags: ['Kubernetes', 'vLLM', 'Go', 'Prometheus', 'AWS EKS', 'CUDA'],
      githubUrl: 'https://github.com/harimohan1990/hari-engineering-journal',
    },
    {
      id: 'fastpg-pooler',
      title: 'FastPG-Pooler',
      tagline: 'Adaptive Connection Pooler & Circuit Breaker for FastAPI & Asyncpg',
      category: 'Database & Storage',
      status: 'Open Source',
      description:
        'Lightweight connection pool supervisor for PostgreSQL that eliminates connection exhaustion during spike traffic while providing automated query circuit-breaking and tenant rate-limiting.',
      architectureSummary: [
        'Adaptive pool sizing based on Postgres transaction latency and active backend counts.',
        'Automatic circuit breaker trips when query execution times exceed SLA threshold.',
        'Integrated zero-overhead prepared statement caching and tenant isolation.',
      ],
      metrics: [
        { label: 'Max Concurrency', value: '12,000 conns' },
        { label: 'Pool Overhead', value: '< 0.08 ms' },
        { label: 'Crash Prevention', value: '100% test coverage' },
      ],
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Asyncpg', 'SQLAlchemy'],
      githubUrl: 'https://github.com/harimohan1990/hari-engineering-journal',
    },
    {
      id: 'modelbench-core',
      title: 'ModelBench-Core',
      tagline: 'High-Concurrency LLM Inference & TTFT Evaluation Harness',
      category: 'AI Infrastructure',
      status: 'Open Source',
      description:
        'Comprehensive benchmarking suite for measuring Time-to-First-Token (TTFT), Inter-Token-Latency (ITL), and throughput under realistic bursty concurrent request patterns across TensorRT-LLM, vLLM, and Ollama.',
      architectureSummary: [
        'Asynchronous distributed traffic generator simulating diverse prompt/generation length distributions.',
        'Precision nanosecond token-stream capture recording streaming response jitter.',
        'Automated markdown report generator with latency CDF distributions and GPU memory waterfalls.',
      ],
      metrics: [
        { label: 'Max Simulated Clients', value: '5,000 concurrent' },
        { label: 'Timer Precision', value: '< 10 microseconds' },
      ],
      tags: ['Python', 'vLLM', 'Triton', 'NumPy', 'Docker'],
      githubUrl: 'https://github.com/harimohan1990/hari-engineering-journal',
    },
    {
      id: 'vectorshield-rag',
      title: 'VectorShield RAG Cache',
      tagline: 'Sub-Millisecond Semantic Query Cache & Reranking Proxy',
      category: 'AI Infrastructure',
      status: 'Active Research',
      description:
        'A proxy caching layer sitting between LLM applications and vector databases that prevents redundant embedding computations and vector scans by matching semantically equivalent queries within an epsilon radius.',
      architectureSummary: [
        'Hierarchical two-tier cache: exact L1 hash match + approximate cosine L2 semantic cluster.',
        'Asynchronous background invalidation when underlying knowledge base updates.',
        'Cross-encoder reranking stage ensuring semantic fidelity before cache return.',
      ],
      metrics: [
        { label: 'Cache Hit Rate', value: '64% production' },
        { label: 'Hit Latency', value: '3.8 ms' },
        { label: 'Embedding API Reduction', value: '62%' },
      ],
      tags: ['Python', 'Qdrant', 'Redis', 'HuggingFace', 'FastAPI'],
      githubUrl: 'https://github.com/harimohan1990/hari-engineering-journal',
    },
    {
      id: 'raftkv-distributed',
      title: 'RaftKV-Distributed',
      tagline: 'Consensus-Backed Distributed Key-Value Store with WAL',
      category: 'Distributed Systems',
      status: 'Open Source',
      description:
        'Educational and production-tested distributed key-value store demonstrating Raft leader election, log replication, safety invariants, and compacted snapshot transfers across network partitions.',
      architectureSummary: [
        'Complete Raft protocol implementation with term voting, heartbeats, and leader leases.',
        'Write-Ahead Logging (WAL) with fsync batching for durability.',
        'Chaos-engineering test suite injecting artificial network splits and node kills.',
      ],
      metrics: [
        { label: 'Election Time', value: '< 150 ms' },
        { label: 'Linearizable Reads', value: 'Strict consensus' },
      ],
      tags: ['Python', 'Go', 'Raft Protocol', 'gRPC', 'Distributed Systems'],
      githubUrl: 'https://github.com/harimohan1990/hari-engineering-journal',
    },
  ];

  const categories = ['All', 'Distributed Systems', 'AI Infrastructure', 'Database & Storage'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-dark-border pb-6 light:border-slate-200">
        <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2">
          <FolderGit2 className="w-4 h-4" />
          <span>Systems & Infrastructure Projects</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Engineering Portfolio & Open Source
        </h1>
        <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
          Architectural prototypes, distributed systems experiments, high-performance tooling, and production AI inference engines built and benchmarked for scale.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-500 mr-1 flex-shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-brand-500 text-dark-bg font-semibold'
                : 'bg-dark-surface/60 text-slate-300 border border-dark-border hover:bg-dark-elevated light:bg-slate-100 light:text-slate-700 light:border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-dark-border bg-dark-surface/60 hover:bg-dark-surface/90 hover:border-slate-700 transition-all p-6 sm:p-8 flex flex-col justify-between light:bg-white light:border-slate-200 light:hover:border-slate-300 shadow-sm"
          >
            <div className="space-y-4">
              {/* Status and Category header */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-dark-elevated text-cyanBrand-500 border border-dark-border light:bg-slate-100 light:border-slate-200 light:text-cyan-700">
                  {project.category}
                </span>

                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-semibold border ${
                    project.status === 'Production'
                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/40 light:bg-emerald-50 light:text-emerald-700 light:border-emerald-200'
                      : project.status === 'Open Source'
                      ? 'bg-brand-950/80 text-brand-400 border-brand-800/40 light:bg-brand-50 light:text-brand-700 light:border-brand-200'
                      : 'bg-amber-950/80 text-amber-400 border-amber-800/40 light:bg-amber-50 light:text-amber-700 light:border-amber-200'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-brand-400 light:text-brand-600 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                {project.description}
              </p>

              {/* Architecture Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Key Architectural Decisions
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-400 light:text-slate-600 list-disc list-inside">
                  {project.architectureSummary.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-dark-bg/80 border border-dark-border/60 text-center light:bg-slate-50 light:border-slate-200"
                  >
                    <div className="text-xs font-bold text-white light:text-slate-900 font-mono">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer tags and links */}
            <div className="pt-6 mt-6 border-t border-dark-border/60 flex flex-wrap items-center justify-between gap-3 light:border-slate-200">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-elevated text-slate-400 border border-dark-border/40 light:bg-slate-100 light:text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-300 hover:text-white border border-dark-border text-xs font-semibold transition-colors light:bg-slate-100 light:text-slate-800 light:border-slate-300"
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
