import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Post } from '@/types/post';
import { formatDate } from '@/utils/formatDate';

interface ArticleCardProps {
  post: Post;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ post, featured = false }) => {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-200 ${
        featured
          ? 'p-6 sm:p-8 bg-dark-surface/90 border-brand-500/30 hover:border-brand-500/60 shadow-lg shadow-brand-950/20 light:bg-white light:border-slate-300 light:shadow-sm'
          : 'p-6 bg-dark-surface/60 border-dark-border hover:border-slate-700 hover:bg-dark-surface/90 light:bg-white light:border-slate-200 light:hover:border-slate-300'
      }`}
    >
      <div>
        {/* Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-brand-950/70 text-brand-300 border border-brand-800/40 light:bg-brand-50 light:text-brand-700 light:border-brand-200">
            {post.category}
          </span>
          <div className="flex items-center space-x-3 text-xs text-slate-400 light:text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime} min read
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`font-bold tracking-tight text-slate-100 group-hover:text-brand-400 transition-colors light:text-slate-900 light:group-hover:text-brand-600 ${
            featured ? 'text-xl sm:text-2xl mb-3' : 'text-lg sm:text-xl mb-2.5'
          }`}
        >
          <Link to={`/posts/${post.slug}`}>
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 light:text-slate-600">
          {post.description}
        </p>
      </div>

      {/* Footer info: tags & read prompt */}
      <div className="pt-4 border-t border-dark-border/60 flex items-center justify-between light:border-slate-100">
        <div className="flex items-center gap-1.5 flex-wrap">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-slate-400 light:text-slate-500 bg-dark-bg/80 light:bg-slate-100 px-2 py-0.5 rounded border border-dark-border/40 light:border-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center text-xs font-semibold text-brand-400 light:text-brand-600 group-hover:translate-x-0.5 transition-transform">
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </div>
      </div>
    </article>
  );
};
