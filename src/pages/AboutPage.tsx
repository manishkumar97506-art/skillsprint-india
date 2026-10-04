import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  HeartHandshake, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { trackEvent } from '../utils/analytics';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] py-12 lg:py-16">
      <SEOHead
        title="About Us | SkillSprint India"
        description="Learn how SkillSprint India is building practical, accessible digital skills education for students, freshers, and creators."
        canonicalPath="/about"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-50 dark:bg-brand-blue-950/60 border border-brand-blue-200/50 dark:border-brand-blue-800 text-brand-blue-700 dark:text-brand-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Purpose</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans'] tracking-tight leading-tight">
            We're Building Practical Learning for the Digital Generation
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            SkillSprint India is a learning platform focused on helping beginners understand practical digital skills through simple lessons, projects and useful resources.
          </p>
        </div>

        {/* ---------------- VISUAL TIMELINE: Learn → Practice → Build → Grow ---------------- */}
        <section className="bg-white dark:bg-[#111827] rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-6">
          <div className="text-center space-y-1 max-w-md mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-600 dark:text-brand-purple-400">
              The Learning Journey
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              The SkillSprint Progression
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            <div className="p-5 rounded-2xl bg-brand-blue-50/50 dark:bg-slate-800/60 border border-brand-blue-100 dark:border-slate-700 space-y-2 text-center">
              <span className="w-9 h-9 rounded-xl bg-brand-blue-600 text-white font-bold flex items-center justify-center mx-auto text-xs font-mono">
                01
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white">Learn</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Understand the basics clearly without corporate fluff.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-purple-50/50 dark:bg-slate-800/60 border border-brand-purple-100 dark:border-slate-700 space-y-2 text-center">
              <span className="w-9 h-9 rounded-xl bg-brand-purple-600 text-white font-bold flex items-center justify-center mx-auto text-xs font-mono">
                02
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white">Practice</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Apply concepts through real-world exercises and tools.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-50/50 dark:bg-slate-800/60 border border-cyan-100 dark:border-slate-700 space-y-2 text-center">
              <span className="w-9 h-9 rounded-xl bg-brand-cyan-600 text-white font-bold flex items-center justify-center mx-auto text-xs font-mono">
                03
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white">Build</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Assemble proof of work to showcase your capabilities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-slate-800/60 border border-emerald-100 dark:border-slate-700 space-y-2 text-center">
              <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto text-xs font-mono">
                04
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white">Grow</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Unlock career, freelancing, and digital business opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- 4 KEY SECTIONS ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-600 dark:text-brand-cyan-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              Our Mission
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To bridge the gap between college curricula and the demands of the modern internet economy by making practical digital skills accessible, understandable, and immediately actionable for every beginner in India.
            </p>
          </div>

          {/* What We Believe */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple-50 dark:bg-slate-800 text-brand-purple-600 dark:text-brand-purple-400 flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              What We Believe
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We believe that proof of work speaks louder than paper degrees. When a student knows how to write a high-converting ad, audit an SEO website, or leverage AI tools, their career trajectory changes fundamentally.
            </p>
          </div>

          {/* Who We Help */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              Who We Help
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              College students, freshers, job-seekers, budding freelancers, and aspiring creators who want to build real digital competencies without paying lakhs for overpriced bootcamps.
            </p>
          </div>

          {/* Learning Philosophy */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-brand-cyan-400 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              Learning Philosophy
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Keep it simple. Eliminate artificial complexity. Always tie learning to a tangible deliverable. No fake guarantees, no aggressive FOMO marketing—just genuine, helpful guidance.
            </p>
          </div>

        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-blue-700 via-brand-purple-700 to-brand-cyan-600 text-white text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Plus_Jakarta_Sans']">
            Ready to Begin Your Learning Sprint?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
            Explore our beginner-friendly courses or download our free starter resources.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/courses"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-all"
            >
              Explore Courses
            </Link>
            <Link
              to="/resources"
              className="px-6 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-white font-bold text-sm border border-white/20 transition-all"
            >
              Free Resources
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
