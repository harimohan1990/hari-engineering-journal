import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Rss, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-dark-border/80 bg-dark-bg/50 light:bg-slate-100/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                <Terminal className="w-4 h-4 text-brand-400" />
              </div>
              <span className="font-bold text-lg text-slate-100 light:text-slate-900 tracking-tight">
                Backend Engineering Journal
              </span>
            </div>
            <p className="text-sm text-slate-400 light:text-slate-600 max-w-md leading-relaxed">
              Engineering scalable backends. Exploring distributed systems. Building intelligent infrastructure. Written for senior backend engineers, systems architects, and infrastructure specialists.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com/harimohan1990/hari-engineering-journal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-white border border-dark-border transition-colors light:bg-white light:border-slate-200 light:hover:bg-slate-50"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/hari-m-47299b54"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-brand-400 border border-dark-border transition-colors light:bg-white light:border-slate-200 light:hover:bg-slate-50"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RSS Feed"
                className="p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-amber-400 border border-dark-border transition-colors light:bg-white light:border-slate-200 light:hover:bg-slate-50"
              >
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 light:text-slate-600">
              <li>
                <Link to="/posts" className="hover:text-brand-400 transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-400 transition-colors">
                  Engineering Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-400 transition-colors">
                  About & Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/harimohan1990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors inline-flex items-center gap-1"
                >
                  GitHub Profile <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Core Focus Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 light:text-slate-600">
              <li>Distributed Consensus & Raft</li>
              <li>Python & FastAPI Microservices</li>
              <li>PostgreSQL & Redis Scaling</li>
              <li>Kubernetes & Cloud Platforms</li>
              <li>Production LLM Serving & vLLM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border/60 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <Cpu className="w-3.5 h-3.5 text-brand-400" />
            <span>
              © {currentYear} Hari Mohan. Hosted on GitHub Pages with zero paid servers.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              All Systems Nominal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
