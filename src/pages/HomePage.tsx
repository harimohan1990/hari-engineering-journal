import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { FeaturedArticle } from '@/components/home/FeaturedArticle';
import { ArticleCard } from '@/components/home/ArticleCard';
import { TopicSection } from '@/components/home/TopicSection';
import { Newsletter } from '@/components/home/Newsletter';
import { getAllPosts, getFeaturedPosts } from '@/utils/posts';

export const HomePage: React.FC = () => {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const topFeatured = featuredPosts[0] || allPosts[0];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Python Engineering',
    'FastAPI and API Design',
    'Database Engineering',
    'Distributed Systems',
    'Docker and Kubernetes',
    'LLM Infrastructure and Inference',
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? allPosts.slice(0, 6)
      : allPosts
          .filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
          .slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Deep Dive */}
      {topFeatured && <FeaturedArticle post={topFeatured} />}

      {/* Latest Articles Section with Filter */}
      <section className="my-14 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-dark-border pb-4 light:border-slate-200">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Latest Research & Deep Dives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white light:text-slate-900">
              Recent Engineering Articles
            </h2>
          </div>

          <Link
            to="/posts"
            className="inline-flex items-center space-x-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 light:text-brand-600 transition-colors"
          >
            <span>View all {allPosts.length} articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Layers className="w-4 h-4 text-slate-500 mr-1 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-brand-500 text-dark-bg font-semibold shadow-sm'
                  : 'bg-dark-surface/60 text-slate-400 hover:text-white hover:bg-dark-elevated border border-dark-border light:bg-slate-100 light:text-slate-600 light:border-slate-200 light:hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of Latest Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Topic Tracks */}
      <TopicSection posts={allPosts} />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};
