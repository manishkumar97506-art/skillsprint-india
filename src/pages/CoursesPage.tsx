import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Sparkles, Layers } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CourseCard } from '../components/CourseCard';
import { coursesData } from '../data/courses';
import { trackEvent } from '../utils/analytics';

export const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Digital Marketing',
    'AI Tools',
    'Social Media',
    'Canva & Design',
    'Freelancing',
    'Content Creation',
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    trackEvent('course_filter_category_click', { category });
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        (selectedCategory === 'Design' && course.category === 'Canva & Design') ||
        (selectedCategory === 'AI' && course.category === 'AI Tools') ||
        course.category === selectedCategory;

      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] py-12 lg:py-16">
      <SEOHead
        title="Explore Courses | SkillSprint India"
        description="Browse practical, beginner-friendly courses in Digital Marketing, AI Tools, Social Media, Canva and Freelancing."
        canonicalPath="/courses"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 dark:bg-brand-blue-950/60 border border-brand-blue-200/50 dark:border-brand-blue-800 text-brand-blue-700 dark:text-brand-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Learning Tracks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] tracking-tight">
            Explore Practical Skills
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Choose a skill and start learning at your own pace. All courses are designed for beginners with hands-on projects.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-white dark:bg-[#111827] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-blue-600 text-white shadow-sm'
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
              placeholder="Search by topic or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
            />
          </div>

        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
            <BookOpen className="w-10 h-10 mx-auto text-slate-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No matching courses found
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              We couldn't find any courses matching "{searchQuery}". Try selecting another category or resetting the search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-brand-blue-600 dark:text-brand-cyan-400 bg-brand-blue-50 dark:bg-slate-800 rounded-lg hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
