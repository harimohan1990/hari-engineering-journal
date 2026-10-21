import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/utils/posts';
import { Post } from '@/types/post';
import { formatDate } from '@/utils/formatDate';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered from parent if listener attached
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const allPosts = getAllPosts();
    const matched = allPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.content.toLowerCase().includes(q)
      );
    });

    setResults(matched);
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (slug: string) => {
    navigate(`/posts/${slug}`);
    onClose();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-dark-surface border border-dark-border shadow-2xl overflow-hidden light:bg-white light:border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-dark-border light:border-slate-200">
          <Search className="w-5 h-5 text-brand-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, architecture topics, code patterns, tags... (Press Esc to close)"
            className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-400 focus:outline-none light:text-slate-900"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-200 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono px-2 py-1 rounded bg-dark-elevated text-slate-400 border border-dark-border hover:text-slate-200 light:bg-slate-100 light:border-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results Box */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              <p>Type to search across all backend engineering articles and guides.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['FastAPI', 'Kubernetes', 'PostgreSQL', 'Redis', 'LLM Inference', 'Event-Driven'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 rounded-full bg-dark-elevated hover:bg-dark-border text-slate-300 light:bg-slate-100 light:text-slate-700"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              <p>No engineering articles matched "{query}".</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for keywords like "connection pooling", "vLLM", or "FastAPI".</p>
            </div>
          ) : (
            results.map((post) => (
              <div
                key={post.slug}
                onClick={() => handleSelect(post.slug)}
                className="group p-3.5 rounded-xl border border-transparent hover:border-dark-border hover:bg-dark-elevated/70 cursor-pointer transition-all light:hover:bg-slate-100 light:hover:border-slate-200"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-medium text-brand-400 light:text-brand-600">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-slate-400 space-x-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime} min read
                    </span>
                  </div>
                </div>
                <h4 className="text-base font-semibold text-slate-100 group-hover:text-brand-300 transition-colors mt-1.5 light:text-slate-900 light:group-hover:text-brand-700">
                  {post.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-1 mt-1 light:text-slate-600">
                  {post.description}
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-dark-border/40 light:border-slate-200/60">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-bg text-slate-400 light:bg-slate-200/60 light:text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
