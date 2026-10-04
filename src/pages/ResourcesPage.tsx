import React, { useState, useMemo } from 'react';
import { Search, Download, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ResourceCard } from '../components/ResourceCard';
import { LeadMagnetModal } from '../components/LeadMagnetModal';
import { resourcesData } from '../data/resources';
import { Resource } from '../types';
import { trackEvent } from '../utils/analytics';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeResource, setActiveResource] = useState<Resource | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    'All',
    'Guides',
    'Checklists',
    'Templates',
    'AI Tools',
    'Marketing Tools',
    'Career Resources',
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    trackEvent('resource_category_change', { category });
  };

  const handleSelectResource = (resource: Resource) => {
    setActiveResource(resource);
    setIsModalOpen(true);
  };

  const filteredResources = useMemo(() => {
    return resourcesData.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.includedItems.some((it) => it.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] py-12 lg:py-16">
      <SEOHead
        title="Free Resource Library | SkillSprint India"
        description="Download free marketing checklists, AI prompt cheatsheets, social media calendar templates, and Canva design guides."
        canonicalPath="/resources"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Free Downloads</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] tracking-tight">
            Free Resource Library
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Actionable roadmaps, SEO checklists, AI prompt matrices, and design cheat sheets created to accelerate your learning journey.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-white dark:bg-[#111827] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
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
              placeholder="Search resources by title or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredResources.map((res) => (
              <ResourceCard
                key={res.id}
                resource={res}
                onSelect={handleSelectResource}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
            <FileText className="w-10 h-10 mx-auto text-slate-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No matching resources found
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              We couldn't find any resources matching "{searchQuery}". Try selecting another category or resetting the search.
            </p>
          </div>
        )}

      </div>

      {/* Modal */}
      <LeadMagnetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resourceTitle={activeResource ? activeResource.title : 'Free Digital Marketing Starter Kit'}
      />
    </div>
  );
};
