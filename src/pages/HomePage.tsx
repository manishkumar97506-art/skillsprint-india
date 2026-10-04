import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  TrendingUp, 
  Zap, 
  Compass, 
  BookOpen, 
  Share2, 
  Palette, 
  Briefcase, 
  PenTool, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  FileCheck, 
  BarChart3,
  Bot,
  Users
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CourseCard } from '../components/CourseCard';
import { BlogCard } from '../components/BlogCard';
import { NewsletterSection } from '../components/NewsletterSection';
import { LeadMagnetModal } from '../components/LeadMagnetModal';
import { coursesData } from '../data/courses';
import { blogsData } from '../data/blogs';
import { resourcesData } from '../data/resources';
import { faqData } from '../data/faq';
import { trackEvent } from '../utils/analytics';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState('Free Digital Marketing Starter Kit');

  const featuredCourses = coursesData.slice(0, 4);
  const latestBlogs = blogsData.slice(0, 3);
  const featuredResources = resourcesData.slice(0, 4);

  const handleExploreCourses = () => {
    trackEvent('explore_courses_click', { source: 'hero_primary_cta' });
    navigate('/courses');
  };

  const handleReadFreeResources = () => {
    trackEvent('free_resources_click', { source: 'hero_secondary_cta' });
    navigate('/resources');
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
    trackEvent('faq_accordion_toggle', { faqId: id });
  };

  const openStarterKitModal = (title?: string) => {
    if (title) setSelectedResource(title);
    setIsLeadModalOpen(true);
    trackEvent('lead_magnet_modal_open', { resource: title || selectedResource });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="SkillSprint India | Learn Digital Skills & Build Your Career"
        description="Learn digital marketing, AI tools, social media, design and freelancing with practical beginner-friendly resources from SkillSprint India."
        canonicalPath="/"
      />

      {/* ---------------- 6. HERO SECTION ---------------- */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-brand-blue-50/30 dark:from-[#0a0f1d] dark:via-[#0c1222] dark:to-[#0f172a]">
        
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-50 dark:bg-slate-800/90 border border-brand-blue-200/60 dark:border-slate-700 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-cyan-500 animate-pulse" />
                <span className="text-xs font-semibold text-brand-blue-900 dark:text-brand-cyan-300">
                  Practical Digital Skills for Students &amp; Beginners
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.1] font-['Plus_Jakarta_Sans']">
                Learn Skills.{' '}
                <span className="bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-500 bg-clip-text text-transparent">
                  Build Your Career.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Master practical digital skills, discover powerful AI tools and learn how to turn your skills into real career opportunities.
              </p>

              {/* Hero Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="hero-explore-courses-btn"
                  onClick={handleExploreCourses}
                  className="px-7 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-600 hover:opacity-95 shadow-lg shadow-brand-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  id="hero-free-resources-btn"
                  onClick={handleReadFreeResources}
                  className="px-7 py-3.5 rounded-xl font-semibold text-base text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5 text-brand-purple-500" />
                  <span>Read Free Resources</span>
                </button>
              </div>

              {/* Micro-guarantee */}
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% Free Starter Guides</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>No Fake Promises</span>
                </span>
              </div>

            </div>

            {/* Right Column: Hero Visual (Rich Digital Learning Workspace with Floating Cards) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Glass Container */}
                <div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-7 shadow-2xl border border-slate-700/80 text-white relative overflow-hidden">
                  
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      skillsprint-workspace.edu
                    </span>
                    <Sparkles className="w-4 h-4 text-brand-cyan-400" />
                  </div>

                  {/* Mockup Screen Inside */}
                  <div className="py-4 space-y-4">
                    
                    {/* Simulated Campaign Metric */}
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                          <BarChart3 className="w-4 h-4 text-brand-cyan-400" />
                          <span>Campaign Traffic Experiment</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-950/60 px-2 py-0.5 rounded">
                          +42.8% CTR
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand-blue-500 to-brand-cyan-400 w-3/4 rounded-full" />
                      </div>
                    </div>

                    {/* Interactive Active Module Snippet */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-brand-blue-950/60 to-brand-purple-950/60 border border-brand-blue-800/50 space-y-2">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-brand-purple-400" />
                        <span className="text-xs font-bold text-white">
                          AI Prompt Engine: Active
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-mono line-clamp-2">
                        &gt; Target: Indian College Students &amp; Freshers<br />
                        &gt; Strategy: High-retention carousels + SEO guide
                      </p>
                    </div>

                    {/* Progress Step */}
                    <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Curriculum: 8 Modules Completed</span>
                      </span>
                      <span className="text-[11px] text-brand-cyan-400 font-semibold">
                        Practical Project Ready
                      </span>
                    </div>

                  </div>

                </div>

                {/* Floating Card 1: Digital Marketing */}
                <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 animate-bounce-subtle">
                  <div className="w-8 h-8 rounded-xl bg-brand-blue-50 dark:bg-brand-blue-950/80 flex items-center justify-center text-brand-blue-600 dark:text-brand-cyan-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Digital Marketing</p>
                    <p className="text-[10px] text-slate-500">SEO &amp; Paid Ads</p>
                  </div>
                </div>

                {/* Floating Card 2: AI Tools */}
                <div className="absolute top-1/3 -right-3 sm:-right-6 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-brand-purple-50 dark:bg-brand-purple-950/80 flex items-center justify-center text-brand-purple-600 dark:text-brand-purple-300">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">AI Tools</p>
                    <p className="text-[10px] text-slate-500">Save 10+ hrs/wk</p>
                  </div>
                </div>

                {/* Floating Card 3: Content Creation */}
                <div className="absolute -bottom-5 left-4 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/80 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Content Creation</p>
                    <p className="text-[10px] text-slate-500">Writing &amp; Design</p>
                  </div>
                </div>

                {/* Floating Card 4: Career Skills */}
                <div className="absolute -bottom-4 -right-4 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Career Skills</p>
                    <p className="text-[10px] text-slate-500">Freelance Portfolios</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 7. TRUST / STATS SECTION ---------------- */}
      <section className="py-10 bg-white dark:bg-[#070b14] border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
            
            <div className="pt-4 sm:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue-600 dark:text-brand-cyan-400 font-['Plus_Jakarta_Sans']">
                10+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Practical Topics
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                From SEO to AI workflows
              </p>
            </div>

            <div className="pt-4 sm:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-purple-600 dark:text-brand-purple-400 font-['Plus_Jakarta_Sans']">
                50+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Learning Resources
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Checklists, guides &amp; templates
              </p>
            </div>

            <div className="pt-4 sm:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-['Plus_Jakarta_Sans']">
                100%
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Beginner Friendly
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                No complex jargon required
              </p>
            </div>

            <div className="pt-4 sm:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-cyan-600 dark:text-brand-cyan-400 font-['Plus_Jakarta_Sans']">
                Free
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Learning Resources
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Always available for students
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 8. WHAT CAN YOU LEARN? ---------------- */}
      <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600 dark:text-brand-cyan-400 bg-brand-blue-50 dark:bg-brand-blue-950/60 px-3 py-1 rounded-full border border-brand-blue-200 dark:border-brand-blue-900">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans']">
              Build Skills That Matter
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Start with practical skills that are useful in today's digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Digital Marketing */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-600 dark:text-brand-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Digital Marketing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Learn SEO, social media marketing, content marketing and online advertising.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/courses/digital-marketing-fundamentals"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue-600 dark:text-brand-cyan-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: AI Tools */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-purple-50 dark:bg-slate-800 text-brand-purple-600 dark:text-brand-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  AI Tools
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Discover AI tools that can improve productivity, creativity and workflows.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/courses/ai-tools-for-productivity"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-purple-600 dark:text-brand-purple-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Social Media */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-slate-800 text-pink-600 dark:text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Social Media
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Learn how brands create content, grow audiences and build communities.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/courses/social-media-marketing"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-pink-600 dark:text-pink-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 4: Canva & Design */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-brand-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Canva &amp; Design
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Create professional social media posts, presentations and marketing creatives.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/courses/canva-design-essentials"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 dark:text-brand-cyan-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 5: Freelancing */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Freelancing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Understand how beginners can build skills, create portfolios and find opportunities.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/courses/freelancing-for-beginners"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 6: Content Creation */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-slate-800 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Content Creation
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Learn how to plan, create and distribute useful content across online platforms.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/courses/content-creation-copywriting"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 9. FEATURED LEARNING ---------------- */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#070b14] border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-600 dark:text-brand-purple-400">
                Curated Learning Paths
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans']">
                Start Learning Today
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Practical, beginner-friendly courses built with realistic projects.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-600 dark:text-brand-cyan-400 hover:underline"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 10. WHY SKILLSPRINT? ---------------- */}
      <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-[#0a0f1d] border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans']">
              Learn by Doing, Not Just Watching
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              We cut through the noise so you can build genuine skills that stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 text-brand-blue-600 dark:text-brand-cyan-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Practical Learning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Focus on skills that can actually be applied directly in marketing, design, and workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-slate-800 text-brand-purple-600 dark:text-brand-purple-400 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Beginner Friendly
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Concepts explained in simple language with zero confusing technical or academic jargon.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-slate-800 text-brand-cyan-600 dark:text-brand-cyan-400 flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Real Projects
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Practice skills through realistic Indian case studies, briefs, and client scenarios.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Career Focused
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect learning with practical career, internship, and freelance opportunities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 11. HOW IT WORKS ---------------- */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#070b14] border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan-600 dark:text-brand-cyan-400">
              The Path to Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans']">
              How It Works
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A simple, four-stage progressive framework designed for success.
            </p>
          </div>

          {/* Desktop Horizontal / Mobile Vertical */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Choose a Skill
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Select the specific topic you want to learn based on your career interests.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple-600 text-white font-black text-sm flex items-center justify-center shadow-md font-mono">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Learn
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Follow simple, bite-sized practical lessons with clear visual demonstrations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan-600 text-white font-black text-sm flex items-center justify-center shadow-md font-mono">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Practice
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Apply what you learn through hands-on project briefs and real scenarios.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md font-mono">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Build
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Create a proof-of-work portfolio and improve your career opportunities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 12. FREE RESOURCES SECTION ---------------- */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-blue-50/40 via-white to-slate-50 dark:from-[#0a0f1d] dark:via-[#0c1222] dark:to-[#0f172a] border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                100% Free Materials
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans']">
                Free Resources for Your Growth
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Download starter guides, templates, and actionable checklists.
              </p>
            </div>

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-600 dark:text-brand-cyan-400 hover:underline"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Resource Card 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-600 dark:text-brand-cyan-400">
                  Guide
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  AI Tools Guide
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Curated list of 45+ free AI tools with 30 high-yield prompts for students and creators.
                </p>
              </div>
              <button
                onClick={() => openStarterKitModal('AI Tools Guide & Prompt Cheatsheet')}
                className="mt-6 w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-brand-blue-600 hover:text-white dark:hover:bg-brand-blue-600 transition-colors"
              >
                Get Guide Free
              </button>
            </div>

            {/* Resource Card 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-purple-50 dark:bg-slate-800 text-brand-purple-600 dark:text-brand-purple-400">
                  Checklist
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Digital Marketing Checklist
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  25 critical checks for SEO, Meta Ad creatives, and website conversion readiness.
                </p>
              </div>
              <button
                onClick={() => openStarterKitModal('Free Digital Marketing Starter Kit')}
                className="mt-6 w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-brand-purple-600 hover:text-white dark:hover:bg-brand-purple-600 transition-colors"
              >
                Get Checklist Free
              </button>
            </div>

            {/* Resource Card 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-cyan-50 dark:bg-slate-800 text-brand-cyan-600 dark:text-brand-cyan-400">
                  Template
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Social Media Content Ideas
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  30 plug-and-play hook templates and content calendar matrix for Instagram &amp; LinkedIn.
                </p>
              </div>
              <button
                onClick={() => openStarterKitModal('30-Day Social Media Content Calendar Matrix')}
                className="mt-6 w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-brand-cyan-600 hover:text-white dark:hover:bg-brand-cyan-600 transition-colors"
              >
                Get Ideas Matrix
              </button>
            </div>

            {/* Resource Card 4 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-50 dark:bg-slate-800 text-amber-600 dark:text-amber-400">
                  Cheatsheet
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  Canva Design Tips
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Foolproof font combinations, 60-30-10 color rules, and layout shortcuts for non-designers.
                </p>
              </div>
              <button
                onClick={() => openStarterKitModal('Canva Design & Typography Pairing Guide')}
                className="mt-6 w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 transition-colors"
              >
                Get Design Tips
              </button>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 dark:bg-slate-800 hover:bg-brand-blue-600 dark:hover:bg-brand-cyan-600 shadow-md active:scale-95 transition-all"
            >
              <span>Explore Resources</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ---------------- 13. BLOG PREVIEW ---------------- */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#070b14] border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600 dark:text-brand-cyan-400">
                Fresh Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans']">
                Latest from SkillSprint
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Actionable digital marketing, AI, and career advice written for students.
              </p>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple-600 dark:text-brand-purple-400 hover:underline"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 34. SOCIAL PROOF — WITHOUT FAKE CLAIMS ---------------- */}
      <section className="py-16 bg-slate-50/70 dark:bg-[#0a0f1d] border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Our Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              Built for Learners
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              We focus on honest education rather than inflated promises or aggressive sales pitches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span className="text-xs font-bold text-brand-blue-600 dark:text-brand-cyan-400">01 / Practical Learning</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Skills you can actually practice on real tools and social channels.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span className="text-xs font-bold text-brand-purple-600 dark:text-brand-purple-400">02 / Clear Explanations</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Beginner-friendly breakdowns without confusing corporate jargon.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">03 / Useful Resources</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Always-accessible guides, templates, and actionable checklists.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">04 / Project-Based Practice</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Building tangible proof-of-work rather than memorizing definitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 33. FAQ SECTION ---------------- */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#070b14] border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600 dark:text-brand-cyan-400">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans']">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clear answers to the most common questions from students and beginners.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-brand-blue-600 dark:hover:text-brand-cyan-400 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="shrink-0 p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ---------------- 14. LEAD GENERATION SECTION ---------------- */}
      <NewsletterSection 
        headline="Get Practical Digital Skills Straight to Your Inbox"
        subtext="Join our free learning updates and get useful resources, AI tools, marketing tips and career insights."
        source="home_page_bottom_cta"
      />

      {/* Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        resourceTitle={selectedResource}
      />

    </div>
  );
};
