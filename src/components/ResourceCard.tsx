import React from 'react';
import { Download, FileText, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { Resource } from '../types';
import { trackEvent } from '../utils/analytics';

interface ResourceCardProps {
  resource: Resource;
  onSelect: (resource: Resource) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onSelect }) => {
  const handleGetClick = () => {
    trackEvent('resource_get_click', {
      resourceId: resource.id,
      title: resource.title,
      category: resource.category,
    });
    onSelect(resource);
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 p-6 justify-between">
      
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-brand-blue-50 dark:bg-brand-blue-950/50 text-brand-blue-700 dark:text-brand-cyan-400 border border-brand-blue-200/50 dark:border-brand-blue-800/40">
            {resource.category}
          </span>
          {resource.freeBadge && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/40">
              <Sparkles className="w-3 h-3" />
              <span>100% Free</span>
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5">
          <div className="flex items-start gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan-50 dark:group-hover:bg-brand-cyan-950/40 transition-colors">
              <FileText className="w-5 h-5 text-brand-blue-600 dark:text-brand-cyan-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-blue-600 dark:group-hover:text-brand-cyan-400 transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                {resource.title}
              </h3>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Format: {resource.format}
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
            {resource.shortDescription}
          </p>
        </div>

        {/* Included Items Preview */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
          <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Included in this guide:
          </p>
          <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
            {resource.includedItems.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button */}
      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80">
        <button
          onClick={handleGetClick}
          className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-brand-blue-600 group-hover:to-brand-cyan-600 shadow-sm active:scale-98 transition-all flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Get Free Resource</span>
        </button>
      </div>

    </div>
  );
};
