import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Download, 
  BookOpen, 
  HelpCircle,
  FileCheck,
  Zap,
  Users
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LeadMagnetModal } from '../components/LeadMagnetModal';
import { trackEvent } from '../utils/analytics';

export const CampaignLandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackEvent('campaign_landing_lead_submit', {
        campaign: 'facebook_digital_marketing_intro',
        name: name.trim(),
        email: email.trim(),
        timestamp: new Date().toISOString(),
      });
    }, 700);
  };

  const handleDownloadStarterKit = () => {
    trackEvent('campaign_download_file_click');
    const content = `=====================================================
SKILLSPRINT INDIA — DIGITAL MARKETING STARTER GUIDE
=====================================================
Welcome! This guide is prepared specifically for students and beginners.

3 CRITICAL TAKEAWAYS TO APPLY IMMEDIATELY:
1. Master Customer Search Intent: Google users have active intent; Meta (FB/IG) users have discovery intent. Tailor your copy accordingly.
2. The 3-Second Hook Rule: If the first 3 seconds of your reel or the headline of your post doesn't address an immediate pain point, 80% of readers bounce.
3. Proof-of-Work Over Certificates: Build 3 concept campaign audits for real local businesses to showcase tangible skills.

Included Checklists & Workflows:
- On-Page SEO 20-Point Audit
- 30-Day Content Pillar Rotation
- Free Marketing Tech Stack Directory

Happy learning!
SkillSprint India Team
=====================================================`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SkillSprint-Digital-Marketing-Starter-Guide.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 font-sans">
      <SEOHead
        title="Learn Digital Marketing From Scratch | SkillSprint India"
        description="Start your digital marketing journey with practical, beginner-friendly learning and download the free starter guide."
        canonicalPath="/campaign/digital-marketing"
      />

      {/* Focused Campaign Banner */}
      <div className="bg-brand-blue-700 dark:bg-brand-blue-950 text-white text-center py-2 px-4 text-xs font-semibold tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-brand-cyan-300" />
        <span>Free Special Edition for Students &amp; Beginners in India</span>
      </div>

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-brand-blue-50/20 to-slate-50 dark:from-[#0a0f1d] dark:via-[#0c1222] dark:to-[#070b14] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-50 dark:bg-slate-800 border border-brand-blue-200 dark:border-slate-700">
            <span className="w-2 h-2 rounded-full bg-brand-cyan-500 animate-pulse" />
            <span className="text-xs font-bold text-brand-blue-700 dark:text-brand-cyan-400">
              Facebook Marketing Community Edition
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans'] tracking-tight leading-tight">
            Learn Digital Marketing{' '}
            <span className="bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-500 bg-clip-text text-transparent">
              From Scratch
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Start your digital marketing journey with practical, beginner-friendly learning. No expensive bootcamps or theoretical fluff.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#free-guide-form"
              onClick={() => trackEvent('campaign_hero_get_free_guide_click')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 hover:opacity-95 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Get Free Guide</span>
            </a>

            <Link
              to="/courses/digital-marketing-fundamentals"
              onClick={() => trackEvent('campaign_hero_explore_courses_click')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Free Starter Pack</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Mobile-Friendly Reading</span>
            </span>
          </div>

        </div>
      </section>

      {/* ---------------- 2. PROBLEM SECTION ---------------- */}
      <section className="py-16 bg-white dark:bg-[#0a0f1d] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-900">
              The Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              Feeling confused about where to start?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Most students and freshers encounter the exact same roadblocks when attempting to learn digital marketing online:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Too Many Scattered Resources
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Hundreds of conflicting YouTube videos and blogs without any clear structure or order.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                No Clear Learning Path
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Not knowing whether to learn SEO first, Meta ads, Canva design, or email marketing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Overwhelming Jargon
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Courses full of complex corporate acronyms and buzzwords without simple practical explanations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Lack of Practical Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Watching hours of passive video lectures without ever creating a real campaign plan or portfolio.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 3. SOLUTION SECTION ---------------- */}
      <section className="py-16 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan-600 dark:text-brand-cyan-400 bg-brand-cyan-50 dark:bg-brand-cyan-950/50 px-3 py-1 rounded-full border border-brand-cyan-200 dark:border-brand-cyan-900">
              The SkillSprint Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              A Simple Learning Path
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A clear progression from absolute beginner to competent practitioner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
              <span className="w-10 h-10 rounded-xl bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-600 dark:text-brand-cyan-400 font-extrabold flex items-center justify-center mx-auto text-sm">
                01
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Learn</h3>
              <p className="text-xs text-slate-500">
                Understand core customer psychology and channels simply.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
              <span className="w-10 h-10 rounded-xl bg-brand-purple-50 dark:bg-slate-800 text-brand-purple-600 dark:text-brand-purple-400 font-extrabold flex items-center justify-center mx-auto text-sm">
                02
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Practice</h3>
              <p className="text-xs text-slate-500">
                Create real assets: ad copy, SEO keywords, social posts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
              <span className="w-10 h-10 rounded-xl bg-brand-cyan-50 dark:bg-slate-800 text-brand-cyan-600 dark:text-brand-cyan-400 font-extrabold flex items-center justify-center mx-auto text-sm">
                03
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Build</h3>
              <p className="text-xs text-slate-500">
                Assemble a concept campaign portfolio to prove your skills.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-extrabold flex items-center justify-center mx-auto text-sm">
                04
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Grow</h3>
              <p className="text-xs text-slate-500">
                Apply for internships, freelance opportunities, or build your brand.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 4. FREE RESOURCE OFFER / FORM ---------------- */}
      <section id="free-guide-form" className="py-16 sm:py-20 bg-white dark:bg-[#0a0f1d] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-tr from-brand-blue-900 via-slate-900 to-brand-purple-950 text-white shadow-2xl border border-brand-blue-800/60 space-y-6">
            
            <div className="space-y-2 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan-400/20 border border-brand-cyan-400/40 text-brand-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Immediate Download</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans']">
                Free Digital Marketing Starter Guide
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Enter your details below to get instant access to the step-by-step roadmap, checklists, and templates.
              </p>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="landing-name" className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="landing-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="landing-email" className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    id="landing-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-cyan-500 via-brand-blue-500 to-brand-purple-600 hover:opacity-95 shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Generating guide...</span>
                  ) : (
                    <>
                      <span>Get Free Starter Guide</span>
                      <Download className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  100% free • No spam • Respecting student inboxes
                </p>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">
                    You're Ready to Learn!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    We've registered your interest for <span className="text-brand-cyan-300 font-semibold">{email}</span>. Click below to download your starter file immediately:
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleDownloadStarterKit}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow active:scale-95 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Starter Guide Now</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ---------------- 5. BENEFITS ---------------- */}
      <section className="py-16 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              Why SkillSprint Works for Beginners
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Clear learning principles tailored for freshers and college students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Beginner Friendly</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Start from zero without assuming prior marketing or technical knowledge.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Practical Learning</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Focus directly on hands-on actions: researching keywords, writing ad hooks, and reviewing analytics.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Real Examples</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Case studies grounded in Indian startups, D2C brands, and local business scenarios.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Project-Based Practice</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Complete capstone projects that turn into tangible proof of work for your portfolio.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 6. FINAL CTA ---------------- */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0a0f1d] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
            Start Learning Today
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Join thousands of curious learners building real skills with SkillSprint India.
          </p>
          <div className="pt-2">
            <Link
              to="/courses/digital-marketing-fundamentals"
              onClick={() => trackEvent('campaign_final_cta_start_learning')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-600 hover:opacity-95 shadow-lg active:scale-95 transition-all"
            >
              <span>Explore Course Curriculum</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        resourceTitle="Free Digital Marketing Starter Guide"
      />
    </div>
  );
};
