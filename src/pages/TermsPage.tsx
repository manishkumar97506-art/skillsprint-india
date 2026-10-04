import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] py-12 lg:py-16">
      <SEOHead
        title="Terms & Conditions | SkillSprint India"
        description="Terms and conditions for utilizing SkillSprint India educational materials and resources."
        canonicalPath="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-blue-600 dark:hover:text-brand-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white dark:bg-[#111827] rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          
          <div className="space-y-2 border-b border-slate-100 dark:border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-slate-400">Last updated: October 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              1. Acceptance of Terms
            </h2>
            <p>
              By visiting and using the SkillSprint India website, learning materials, downloadable guides, or participating in courses, you acknowledge and agree to comply with the terms and conditions outlined herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              2. Educational Purpose &amp; No Guarantee of Income
            </h2>
            <p>
              SkillSprint India provides educational materials, frameworks, and practical exercises. While our content is designed to teach marketable skills, we make <strong>no guaranteed claims of employment, income, or revenue</strong>. Career and freelance outcomes depend entirely on the individual learner's effort, portfolio quality, and external market factors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              3. Intellectual Property &amp; Permitted Use
            </h2>
            <p>
              All articles, course syllabi, checklists, and visual branding elements produced by SkillSprint India are protected under intellectual property laws. You are granted a personal, non-exclusive license to use these guides for your individual learning and study. You may not republish, resell, or distribute our course materials as your own proprietary commercial product.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              4. Third-Party Tools &amp; Affiliates
            </h2>
            <p>
              Our guides reference various third-party software and AI tools (such as Canva, Google Search Console, Notion, etc.). We are not affiliated with these third parties unless explicitly stated. Users must adhere to the individual terms of service of each external platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              5. Contact &amp; Questions
            </h2>
            <p>
              For legal inquiries regarding these terms, please contact us at <span className="text-brand-blue-600 dark:text-brand-cyan-400 font-medium">legal@skillsprintindia.org</span>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
