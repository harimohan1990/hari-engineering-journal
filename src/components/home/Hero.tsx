import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Layers, Server, Network } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative py-12 md:py-16 mb-8 border-b border-dark-border/80 light:border-slate-200">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl space-y-6">
        {/* Status Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/40 text-brand-400 text-xs font-mono light:bg-brand-50 light:border-brand-200 light:text-brand-700">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
          <span>SYSTEMS • DISTRIBUTED PLATFORMS • AI INFRA</span>
        </div>

        {/* Heading & Tagline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.15]">
          Backend Engineering <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-brand-400 via-cyanBrand-500 to-teal-300 bg-clip-text text-transparent">
            Journal
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed font-normal">
          Engineering scalable backends. Exploring distributed systems. Building intelligent infrastructure.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link
            to="/posts"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-bg font-semibold text-sm transition-all shadow-lg shadow-brand-500/20"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 font-medium text-sm border border-dark-border transition-all light:bg-white light:text-slate-800 light:border-slate-300 light:hover:bg-slate-100"
          >
            <span>Architecture Projects</span>
          </Link>
        </div>

        {/* Highlight Focus Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
          <div className="p-3.5 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 flex items-center space-x-3">
            <Server className="w-5 h-5 text-brand-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white light:text-slate-900">Python & FastAPI</div>
              <div className="text-[11px] text-slate-400">High-throughput APIs</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 flex items-center space-x-3">
            <Network className="w-5 h-5 text-cyanBrand-500 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white light:text-slate-900">Distributed Systems</div>
              <div className="text-[11px] text-slate-400">Consensus & Kafka</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 flex items-center space-x-3">
            <Layers className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white light:text-slate-900">PostgreSQL & Redis</div>
              <div className="text-[11px] text-slate-400">Storage & Caching</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 flex items-center space-x-3">
            <Cpu className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white light:text-slate-900">AI Infrastructure</div>
              <div className="text-[11px] text-slate-400">vLLM & RAG Systems</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
