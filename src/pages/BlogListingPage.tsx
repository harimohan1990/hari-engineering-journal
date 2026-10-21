import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, ArrowUpDown } from 'lucide-react';
import { getAllPosts, getAllCategories, getAllTags } from '@/utils/posts';
import { ArticleCard } from '@/components/home/ArticleCard';

export const BlogListingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialTag = searchParams.get('tag') || '';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'readingTime'>('newest');
  const [visibleCount, setVisibleCount] = useState(9);

  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const allTags = getAllTags();

  // Filter posts
  const filteredPosts = useMemo(() => {
    return allPosts
      .filter((post) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matches =
            post.title.toLowerCase().includes(q) ||
            post.description.toLowerCase().includes(q) ||
            post.tags.some((t) => t.toLowerCase().includes(q)) ||
            post.category.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // Category filter
        if (selectedCategory !== 'All' && post.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }

        // Tag filter
        if (selectedTag && !post.tags.includes(selectedTag)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        if (sortBy === 'oldest') {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        if (sortBy === 'readingTime') {
          return (b.readingTime || 0) - (a.readingTime || 0);
        }
        return 0;
      });
  }, [allPosts, searchQuery, selectedCategory, selectedTag, sortBy]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleTagChange = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag('');
      searchParams.delete('tag');
    } else {
      setSelectedTag(tag);
      searchParams.set('tag', tag);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTag('');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedTag !== '';

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-dark-border pb-6 light:border-slate-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Engineering Articles & Guides
        </h1>
        <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
          Deep dives into backend architecture, distributed systems, high-concurrency database design, and production LLM serving.
        </p>
      </div>

      {/* Controls: Search, Sort, Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, algorithms, technologies..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-500 light:bg-white light:border-slate-300 light:text-slate-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort articles"
                className="appearance-none pl-9 pr-8 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-500 cursor-pointer light:bg-white light:border-slate-300 light:text-slate-800"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="readingTime">Longest Read</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center space-x-1 px-3 py-2.5 rounded-xl text-xs font-medium text-rose-400 hover:bg-rose-950/20 border border-rose-800/30 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === 'All'
                ? 'bg-brand-500 text-dark-bg font-semibold'
                : 'bg-dark-surface/80 text-slate-300 border border-dark-border hover:bg-dark-elevated light:bg-slate-100 light:text-slate-700 light:border-slate-200'
            }`}
          >
            All Categories ({allPosts.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryChange(cat.name)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory.toLowerCase() === cat.name.toLowerCase()
                  ? 'bg-brand-500 text-dark-bg font-semibold'
                  : 'bg-dark-surface/80 text-slate-300 border border-dark-border hover:bg-dark-elevated light:bg-slate-100 light:text-slate-700 light:border-slate-200'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Tags Row */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs text-slate-500 mr-1 flex items-center gap-1 font-mono">
              <Filter className="w-3 h-3" />
              Tags:
            </span>
            {allTags.slice(0, 14).map(({ tag, count }) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-md transition-all ${
                    isSelected
                      ? 'bg-cyanBrand-500 text-dark-bg font-semibold'
                      : 'bg-dark-elevated text-slate-400 hover:text-slate-200 border border-dark-border/60 light:bg-slate-100 light:text-slate-600 light:border-slate-200'
                  }`}
                >
                  #{tag} ({count})
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="text-xs text-slate-400 flex items-center justify-between">
        <span>
          Showing {Math.min(visibleCount, filteredPosts.length)} of {filteredPosts.length} articles
        </span>
      </div>

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div className="py-20 text-center rounded-2xl border border-dashed border-dark-border light:border-slate-300">
          <p className="text-base text-slate-300 light:text-slate-700 font-medium">
            No articles found matching your criteria.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search query, or clear your filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-4 px-4 py-2 rounded-xl bg-brand-500 text-dark-bg font-semibold text-xs"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(0, visibleCount).map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {visibleCount < filteredPosts.length && (
        <div className="text-center pt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2.5 rounded-xl bg-dark-surface hover:bg-dark-elevated text-slate-200 text-sm font-medium border border-dark-border transition-colors light:bg-white light:border-slate-300 light:text-slate-800"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
};
