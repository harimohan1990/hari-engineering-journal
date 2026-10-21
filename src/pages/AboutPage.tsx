import React from 'react';
import {
  Terminal,
  Cpu,
  Network,
  ExternalLink,
  Code2,
  Server,
  Cloud,
  MessageSquare,
} from 'lucide-react';
import { DEFAULT_AUTHOR } from '@/utils/posts';
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons';

export const AboutPage: React.FC = () => {
  const author = DEFAULT_AUTHOR;
  const linkedInUrl = 'https://www.linkedin.com/in/hari-m-47299b54';

  const competencies = [
    {
      title: 'Distributed Systems & Messaging',
      icon: Network,
      description: 'Designing fault-tolerant event streams, Raft consensus nodes, Kafka partitions, and dead-letter queue architectures.',
      skills: ['Apache Kafka', 'Redis Streams', 'RabbitMQ', 'Raft Consensus', 'Idempotent Consumers'],
    },
    {
      title: 'Python Backend Architecture',
      icon: Server,
      description: 'Building asynchronous, ultra-low latency REST and gRPC microservices with async event loops and optimized connection pools.',
      skills: ['FastAPI', 'AsyncIO / AnyIO', 'Asyncpg / SQLAlchemy 2.0', 'Pydantic V2', 'gRPC & Protobuf'],
    },
    {
      title: 'Cloud & Kubernetes Infrastructure',
      icon: Cloud,
      description: 'Production cluster management, GitOps deployments, dynamic autoscaling, and service mesh security.',
      skills: ['Kubernetes (EKS/GKE)', 'Docker & Multi-stage builds', 'Terraform', 'Helm & ArgoCD', 'AWS Architecture'],
    },
    {
      title: 'Production LLM & AI Infrastructure',
      icon: Cpu,
      description: 'High-throughput inference engines, continuous batching, KV-cache management, latency profiling, and hybrid search RAG.',
      skills: ['vLLM', 'Triton Inference Server', 'Qdrant / Milvus', 'LangChain / LlamaIndex', 'TensorRT-LLM'],
    },
  ];

  const engineeringPrinciples = [
    {
      title: 'Mechanical Sympathy',
      desc: 'Understand the underlying hardware, network boundaries, and OS syscalls rather than trusting theoretical abstractions.',
    },
    {
      title: 'Idempotency by Default',
      desc: 'Assume messages will be duplicated, networks will partition, and retry storms will occur. Engineer for eventual consistency and safe replays.',
    },
    {
      title: 'Zero-Guesswork Observability',
      desc: 'Instrument distributed tracing, structured JSON logging, and RED (Rate, Errors, Duration) metrics before shipping to production.',
    },
    {
      title: 'Performance as a Feature',
      desc: 'Sub-millisecond connection pooling, optimized database indexes, and efficient batching are essential for cost-effective scale.',
    },
  ];

  return (
    <div className="space-y-16 max-w-4xl mx-auto">
      {/* Profile Header */}
      <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8 border-b border-dark-border pb-12 light:border-slate-200">
        <div className="relative">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover ring-4 ring-brand-500/20 shadow-2xl"
          />
          <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-dark-surface border border-brand-500/50 text-[11px] font-mono font-semibold text-brand-400 flex items-center gap-1.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            ACTIVE
          </div>
        </div>

        <div className="space-y-4 text-center sm:text-left flex-1">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-400">
              About the Author
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mt-1">
              {author.name}
            </h1>
            <p className="text-base font-medium text-slate-300 light:text-slate-700 mt-1">
              {author.role}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed">
            I am a senior backend and AI infrastructure engineer focused on Python systems, cloud architecture, scalable distributed platforms, and production LLM serving.
            I write this journal to document battle-tested architectural patterns, real benchmarks, and the messy realities of building high-concurrency systems.
          </p>

          {/* Social / Contact Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
            <a
              href="https://github.com/harimohan1990"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 text-xs font-semibold border border-dark-border transition-colors light:bg-white light:border-slate-300 light:text-slate-800"
            >
              <GithubIcon size={16} />
              <span>GitHub (harimohan1990)</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 text-xs font-semibold border border-dark-border transition-colors light:bg-white light:border-slate-300 light:text-slate-800"
            >
              <LinkedinIcon size={16} className="text-brand-400" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Direct Contact Card */}
      <section className="p-6 sm:p-8 rounded-3xl border border-brand-500/30 bg-gradient-to-br from-dark-surface via-dark-surface to-dark-elevated light:from-white light:via-slate-50 light:to-slate-100 light:border-slate-300 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white light:text-slate-900">
              Get in Touch & Connect
            </h3>
            <p className="text-xs text-slate-400 light:text-slate-600">
              Reach out for architectural discussions, systems collaborations, or advisory roles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-dark-border bg-dark-bg/60 hover:border-brand-400 transition-all flex items-center space-x-3 group light:bg-white light:border-slate-200"
          >
            <div className="p-2 rounded-lg bg-dark-surface group-hover:bg-brand-950/40 text-brand-400">
              <LinkedinIcon size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200 group-hover:text-brand-400 light:text-slate-900">
                LinkedIn Message
              </div>
              <div className="text-[11px] text-slate-400 font-mono truncate max-w-[200px]">
                linkedin.com/in/hari-m-47299b54
              </div>
            </div>
          </a>

          <a
            href="https://github.com/harimohan1990"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-dark-border bg-dark-bg/60 hover:border-brand-400 transition-all flex items-center space-x-3 group light:bg-white light:border-slate-200"
          >
            <div className="p-2 rounded-lg bg-dark-surface group-hover:bg-brand-950/40 text-brand-400">
              <GithubIcon size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200 group-hover:text-brand-400 light:text-slate-900">
                GitHub Repositories
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                github.com/harimohan1990
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white light:text-slate-900 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-brand-400" />
            <span>Technical Competencies</span>
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 mt-1">
            Specialized engineering domains honed across high-traffic platforms and distributed microservices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((comp) => {
            const Icon = comp.icon;
            return (
              <div
                key={comp.title}
                className="p-6 rounded-2xl border border-dark-border bg-dark-surface/60 light:bg-white light:border-slate-200 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-dark-elevated border border-dark-border text-brand-400 light:bg-slate-100 light:border-slate-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white light:text-slate-900">
                    {comp.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  {comp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {comp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-bg text-slate-300 border border-dark-border/60 light:bg-slate-100 light:text-slate-700 light:border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white light:text-slate-900 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-brand-400" />
            <span>Engineering Principles</span>
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 mt-1">
            The guiding rules I follow when architecting reliable software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {engineeringPrinciples.map((item, idx) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl border border-dark-border bg-dark-surface/30 light:bg-white light:border-slate-200 space-y-2"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-brand-400 font-bold">
                  0{idx + 1}.
                </span>
                <h4 className="text-sm font-bold text-white light:text-slate-900">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect Card */}
      <section className="p-8 rounded-3xl border border-dark-border bg-gradient-to-r from-dark-surface to-dark-elevated text-center space-y-4 light:from-white light:to-slate-100 light:border-slate-200">
        <h3 className="text-xl font-bold text-white light:text-slate-900">
          Interested in Collaborating or Discussing Architecture?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 max-w-xl mx-auto">
          Whether you want to exchange thoughts on distributed consensus, benchmark LLM latency, or discuss backend architecture, feel free to reach out.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href="https://github.com/harimohan1990"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-bg text-xs font-bold transition-all shadow-md shadow-brand-500/20"
          >
            Follow on GitHub
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-dark-surface hover:bg-dark-elevated border border-dark-border text-slate-200 text-xs font-bold transition-all light:bg-white light:border-slate-300 light:text-slate-800"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};
