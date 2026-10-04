import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, BookOpen, FileText, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { coursesData } from '../data/courses';
import { blogsData } from '../data/blogs';
import { resourcesData } from '../data/resources';
import { trackEvent } from '../utils/analytics';

interface SearchResultItem {
  id: string;
  type: 'Course' | 'Blog Article' | 'Free Resource';
  title: string;
  description: string;
  category: string;
  link: string;
  actionText: string;
}

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setSearchParams(val ? { q: val } : {});
    if (val.length > 2) {
      trackEvent('site_search_query', { query: val });
    }
  };

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const items: SearchResultItem[] = [];

    // Search courses
    coursesData.forEach((course) => {
      if (
        course.title.toLowerCase().includes(q) ||
        course.shortDescription.toLowerCase().includes(q) ||
        course.topics.some((t) => t.toLowerCase().includes(q))
      ) {
        items.push({
          id: `course_${course.id}`,
          type: 'Course',
          title: course.title,
          description: course.shortDescription,
          category: course.category,
          link: `/courses/${course.slug}`,
          actionText: 'View Course',
        });
      }
    });

    // Search blogs
    blogsData.forEach((blog) => {
      if (
        blog.title.toLowerCase().includes(q) ||
        blog.shortDescription.toLowerCase().includes(q) ||
        blog.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        items.push({
          id: `blog_${blog.id}`,
          type: 'Blog Article',
          title: blog.title,
          description: blog.shortDescription,
          category: blog.category,
          link: `/blog/${blog.slug}`,
          actionText: 'Read Article',
        });
      }
    });

    // Search resources
    resourcesData.forEach((res) => {
      if (
        res.title.toLowerCase().includes(q) ||
        res.shortDescription.toLowerCase().includes(q) ||
        res.includedItems.some((it) => it.toLowerCase().includes(q))
      ) {
        items.push({
          id: `res_${res.id}`,
          type: 'Free Resource',
          title: res.title,
          description: res.shortDescription,
          category: res.category,
          link: '/resources',
          actionText: 'Explore Resource',
        });
      }
    });

    return items;
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] py-12 lg:py-16">
      <SEOHead
        title="Search Learning Topics | SkillSprint India"
        description="Search across courses, articles, checklists, and guides on SkillSprint India."
        canonicalPath="/search"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
            Search SkillSprint
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Find courses, practical blog guides, AI prompts, and downloadable checklists.
          </p>
        </div>

        {/* Big Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by keyword (e.g. SEO, Canva, AI, Freelancing, Ads)..."
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            autoFocus
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-900 dark:text-white text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
          />
        </div>

        {/* Results Info */}
        {query.trim() && (
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Found <strong className="text-slate-900 dark:text-white">{results.length}</strong> results for "{query}"
            </span>
          </div>
        )}

        {/* Results List */}
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-soft transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                        item.type === 'Course'
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-brand-blue-700 dark:text-brand-cyan-400'
                          : item.type === 'Blog Article'
                          ? 'bg-purple-50 dark:bg-purple-950/60 text-brand-purple-700 dark:text-brand-purple-400'
                          : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-blue-600 dark:group-hover:text-brand-cyan-400 transition-colors font-['Plus_Jakarta_Sans']">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-600 dark:text-brand-cyan-400 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-brand-blue-50 shrink-0"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        ) : query.trim() ? (
          /* Empty State */
          <div className="text-center py-16 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
            <HelpCircle className="w-12 h-12 mx-auto text-slate-400" />
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                No results found
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Try another keyword or explore our popular learning resources below.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => handleQueryChange('Digital Marketing')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                Digital Marketing
              </button>
              <button
                onClick={() => handleQueryChange('AI Tools')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                AI Tools
              </button>
              <button
                onClick={() => handleQueryChange('Canva')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                Canva Design
              </button>
            </div>
          </div>
        ) : (
          /* Initial Suggested Searches */
          <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Popular Search Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Digital Marketing', 'SEO Basics', 'AI Tools', 'Instagram Reels', 'Canva Design', 'Freelance Proposals'].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => handleQueryChange(term)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-blue-50 hover:text-brand-blue-600 dark:hover:text-brand-cyan-400 transition-colors"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
