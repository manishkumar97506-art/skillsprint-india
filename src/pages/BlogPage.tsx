import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BlogCard } from '../components/BlogCard';
import { blogsData } from '../data/blogs';
import { trackEvent } from '../utils/analytics';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Career', 'Digital Marketing', 'AI', 'Design', 'Social Media'];

  const featuredPost = blogsData[0];
  const remainingPosts = blogsData.slice(1);

  const filteredPosts = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    trackEvent('blog_category_filter', { category: cat });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] py-12 lg:py-16">
      <SEOHead
        title="Learning Blog | SkillSprint India"
        description="Practical guides, AI workflows, and digital marketing tutorials for students and beginners."
        canonicalPath="/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple-50 dark:bg-brand-purple-950/60 border border-brand-purple-200/50 dark:border-brand-purple-800 text-brand-purple-700 dark:text-brand-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Articles &amp; Practical Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] tracking-tight">
            SkillSprint Learning Blog
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Actionable strategies, tool breakdowns, and career playbooks written for the next generation of digital professionals.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-white dark:bg-[#111827] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-purple-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple-500"
            />
          </div>
        </div>

        {/* Featured Post Card (When no active search and 'All' category) */}
        {!searchQuery && selectedCategory === 'All' && featuredPost && (
          <div className="group rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-xl text-xs font-bold bg-brand-purple-600 text-white shadow">
                    Featured Guide
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-brand-purple-600 dark:text-brand-purple-400 uppercase tracking-wide">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans'] leading-tight group-hover:text-brand-purple-600 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredPost.shortDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-[10px] text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-slate-800 hover:bg-brand-purple-600 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
            {searchQuery ? `Search Results (${filteredPosts.length})` : 'All Articles & Tutorials'}
          </h2>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
              <BookOpen className="w-10 h-10 mx-auto text-slate-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                No articles found
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                No articles match "{searchQuery}". Try a different keyword or reset filters.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
