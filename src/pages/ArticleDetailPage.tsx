import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Bookmark,
} from 'lucide-react';
import { getPostBySlug, getRelatedPosts, getAdjacentPosts } from '@/utils/posts';
import { formatDate } from '@/utils/formatDate';
import { CodeBlock } from '@/components/article/CodeBlock';
import { TableOfContents } from '@/components/article/TableOfContents';
import { ReadingProgress } from '@/components/article/ReadingProgress';
import { SocialShare } from '@/components/article/SocialShare';
import { AuthorBio } from '@/components/article/AuthorBio';
import { ArticleCard } from '@/components/home/ArticleCard';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = slug ? getPostBySlug(slug) : undefined;
  const adjacent = slug ? getAdjacentPosts(slug) : {};
  const relatedPosts = post ? getRelatedPosts(post, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Backend Engineering Journal`;
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', post.description);
    }
    return () => {
      document.title = 'Backend Engineering Journal';
    };
  }, [post]);

  if (!post) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white light:text-slate-900">
          Article Not Found
        </h2>
        <p className="text-sm text-slate-400">
          The requested engineering article "{slug}" does not exist or has been moved.
        </p>
        <Link
          to="/posts"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-500 text-dark-bg font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all articles</span>
        </Link>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <ReadingProgress />

      <div className="space-y-10">
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex items-center justify-between">
          <Link
            to="/posts"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-brand-400 light:text-slate-600 light:hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to articles</span>
          </Link>

          <SocialShare title={post.title} url={currentUrl} />
        </div>

        {/* Article Header */}
        <header className="space-y-4 border-b border-dark-border pb-8 light:border-slate-200">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={`/posts?category=${encodeURIComponent(post.category)}`}
              className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-brand-950/80 text-brand-400 border border-brand-800/40 hover:bg-brand-900/40 transition-colors light:bg-brand-50 light:text-brand-700 light:border-brand-200"
            >
              {post.category}
            </Link>
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-[1.2]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed font-normal">
            {post.description}
          </p>

          {/* Author Pill & Tag List */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/30"
              />
              <div>
                <div className="text-sm font-bold text-white light:text-slate-900">
                  {post.author.name}
                </div>
                <div className="text-xs text-slate-400 light:text-slate-500">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/posts?tag=${encodeURIComponent(tag)}`}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-slate-300 hover:text-brand-400 hover:border-brand-500/40 transition-colors light:bg-slate-100 light:text-slate-700 light:border-slate-200"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <div className="prose-journal">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug, rehypeRaw]}
                components={{
                  code({ inline, className, children }: any) {
                    return (
                      <CodeBlock className={className} inline={inline}>
                        {children}
                      </CodeBlock>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Bottom Social Share */}
            <div className="mt-12 pt-6 border-t border-dark-border flex items-center justify-between light:border-slate-200">
              <div className="text-sm font-semibold text-slate-300 light:text-slate-700">
                Found this helpful? Share with your engineering team:
              </div>
              <SocialShare title={post.title} url={currentUrl} />
            </div>

            {/* Author Bio Section */}
            <div className="mt-8">
              <AuthorBio author={post.author} />
            </div>

            {/* Next / Previous Post Navigation */}
            <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {adjacent.previous ? (
                <Link
                  to={`/posts/${adjacent.previous.slug}`}
                  className="group p-4 rounded-xl border border-dark-border bg-dark-surface/60 hover:bg-dark-surface hover:border-brand-500/40 transition-all flex flex-col justify-between light:bg-white light:border-slate-200 light:hover:bg-slate-50"
                >
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1 mb-1">
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    Previous Article
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-brand-400 line-clamp-1 light:text-slate-900 transition-colors">
                    {adjacent.previous.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {adjacent.next ? (
                <Link
                  to={`/posts/${adjacent.next.slug}`}
                  className="group p-4 rounded-xl border border-dark-border bg-dark-surface/60 hover:bg-dark-surface hover:border-brand-500/40 transition-all flex flex-col justify-between sm:items-end text-right light:bg-white light:border-slate-200 light:hover:bg-slate-50"
                >
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1 mb-1">
                    Next Article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-brand-400 line-clamp-1 light:text-slate-900 transition-colors">
                    {adjacent.next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </div>

          {/* Sticky Sidebar: Table of Contents & Metadata */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <TableOfContents content={post.content} />

              <div className="p-4 rounded-xl border border-dark-border bg-dark-surface/40 light:bg-white light:border-slate-200 text-xs text-slate-400 space-y-2.5">
                <div className="font-semibold text-slate-200 light:text-slate-800 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-brand-400" />
                  Article Quick Facts
                </div>
                <div>Category: <span className="text-slate-300 light:text-slate-700 font-medium">{post.category}</span></div>
                <div>Estimated Read: <span className="text-slate-300 light:text-slate-700 font-medium">{post.readingTime} minutes</span></div>
                <div>Published: <span className="text-slate-300 light:text-slate-700 font-medium">{formatDate(post.date)}</span></div>
                <div>Source format: <span className="font-mono text-brand-400">Markdown (.md)</span></div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="pt-12 border-t border-dark-border light:border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-white light:text-slate-900">
              Related Engineering Deep Dives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <ArticleCard key={related.slug} post={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};
