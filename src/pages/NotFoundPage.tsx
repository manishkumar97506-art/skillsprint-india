import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Compass, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { trackEvent } from '../utils/analytics';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-[#0a0f1d] px-4 py-16">
      <SEOHead
        title="Page Not Found | SkillSprint India"
        description="The page you were looking for does not exist on SkillSprint India."
      />

      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Simple Educational Illustration */}
        <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-brand-blue-500/10 dark:bg-brand-blue-500/20 blur-xl animate-pulse" />
          <div className="w-24 h-24 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-brand-purple-600 dark:text-brand-cyan-400">
            <Compass className="w-12 h-12" />
          </div>
          <span className="absolute -top-1 -right-1 px-2.5 py-0.5 rounded-full bg-brand-purple-600 text-white font-mono font-bold text-xs shadow">
            404
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
            Oops! This page took a wrong turn.
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Let's get you back to learning practical digital skills.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            onClick={() => trackEvent('404_go_home_click')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-blue-600 hover:bg-brand-blue-700 shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>

          <Link
            to="/courses"
            onClick={() => trackEvent('404_explore_courses_click')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Courses</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400">
          SkillSprint India • Learn Skills. Build Your Career.
        </div>

      </div>
    </div>
  );
};
