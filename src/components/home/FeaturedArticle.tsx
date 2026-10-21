import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { Post } from '@/types/post';
import { formatDate } from '@/utils/formatDate';

interface FeaturedArticleProps {
  post: Post;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ post }) => {
  return (
    <section className="mb-14">
      <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-4">
        <Sparkles className="w-4 h-4 text-brand-400" />
        <span>Featured Engineering Deep Dive</span>
      </div>

      <div className="relative rounded-3xl border border-brand-500/30 bg-gradient-to-br from-dark-surface via-dark-surface to-dark-elevated p-6 sm:p-10 shadow-2xl overflow-hidden group light:from-white light:via-slate-50 light:to-slate-100 light:border-slate-300">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30">
                {post.category}
              </span>
              <div className="flex items-center space-x-3 text-xs text-slate-400 light:text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime} min read
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-brand-300 transition-colors light:text-slate-900 light:group-hover:text-brand-600">
              <Link to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl light:text-slate-600">
              {post.description}
            </p>

            {/* Tags & Author info */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-brand-400/30"
                />
                <span className="text-xs text-slate-300 light:text-slate-700 font-medium">
                  {post.author.name}
                </span>
              </div>

              <div className="h-3 w-px bg-dark-border light:bg-slate-300 hidden sm:block" />

              <div className="flex items-center gap-2 flex-wrap">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-dark-bg/80 text-slate-400 border border-dark-border/60 light:bg-slate-200 light:text-slate-700 light:border-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action / Architecture Pill Card */}
          <div className="lg:w-72 flex flex-col justify-center items-start lg:items-end">
            <Link
              to={`/posts/${post.slug}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-bg font-semibold text-sm transition-all shadow-lg shadow-brand-500/20 group/btn"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[11px] text-slate-400 light:text-slate-500 mt-2 flex items-center gap-1 font-mono">
              <Terminal className="w-3 h-3 text-brand-400" />
              Verified code & benchmarks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
