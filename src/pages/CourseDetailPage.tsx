import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Layers, 
  Clock, 
  BookOpen, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  FileText,
  ArrowRight,
  PlayCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { coursesData } from '../data/courses';
import { LeadMagnetModal } from '../components/LeadMagnetModal';
import { trackEvent } from '../utils/analytics';

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const course = coursesData.find((c) => c.slug === slug) || coursesData[0];

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
    trackEvent('curriculum_module_toggle', {
      courseSlug: course.slug,
      moduleNumber: index + 1,
    });
  };

  const handleStartLearning = () => {
    trackEvent('start_learning_click', {
      courseId: course.id,
      courseSlug: course.slug,
      courseTitle: course.title,
    });
    setHasStarted(true);
    // Smooth scroll to curriculum
    const el = document.getElementById('curriculum-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] pb-20">
      <SEOHead
        title={`${course.title} | SkillSprint India`}
        description={course.shortDescription}
        canonicalPath={`/courses/${course.slug}`}
      />

      {/* Back Link Breadcrumb */}
      <div className="bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-blue-600 dark:hover:text-brand-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Courses</span>
          </Link>
        </div>
      </div>

      {/* ---------------- COURSE HERO ---------------- */}
      <section className="bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 dark:bg-slate-800 border border-brand-blue-200/60 dark:border-slate-700">
                <span className="text-xs font-bold text-brand-blue-700 dark:text-brand-cyan-400">
                  {course.category}
                </span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans'] tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {course.shortDescription}
              </p>

              {/* Course Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                  <p className="text-[11px] text-slate-500 uppercase font-semibold">Skill Level</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{course.level}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                  <p className="text-[11px] text-slate-500 uppercase font-semibold">Structure</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{course.modulesCount} Modules</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                  <p className="text-[11px] text-slate-500 uppercase font-semibold">Practice</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Real Project</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                  <p className="text-[11px] text-slate-500 uppercase font-semibold">Access</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Lifetime Free</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="course-start-learning-btn"
                  onClick={handleStartLearning}
                  className="px-8 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-600 hover:opacity-95 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Start Learning</span>
                </button>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-brand-purple-500" />
                  <span>Download Starter Kit</span>
                </button>
              </div>

              {hasStarted && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
                  <span>
                    You're enrolled! Scroll down to begin Module 1 or review the practical project.
                  </span>
                </div>
              )}

            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-white dark:bg-[#111827]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-5 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {course.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 space-y-1">
                    <p className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-blue-500" />
                      <span>{course.estimatedHours}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified beginner curriculum</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- WHAT YOU'LL LEARN & CURRICULUM ---------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-14">
        
        {/* Section: What You'll Learn */}
        <section className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600 dark:text-brand-cyan-400">
              Learning Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              What You'll Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.whatYoullLearn.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Course Curriculum */}
        <section id="curriculum-section" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-600 dark:text-brand-purple-400">
                Step-by-Step Modules
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Course Curriculum
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              {course.modulesCount} Modules • {course.lessonsCount} Practical Lessons
            </p>
          </div>

          <div className="space-y-3">
            {course.curriculum.map((mod, index) => {
              const isOpen = openModuleIndex === index;
              return (
                <div
                  key={mod.moduleNumber}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleModule(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-brand-blue-600 dark:hover:text-brand-cyan-400 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                        {mod.moduleNumber}
                      </span>
                      <span>{mod.title}</span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-slate-400 font-normal hidden sm:inline">
                        {mod.duration}
                      </span>
                      <span className="p-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-400">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-200">
                      <ul className="space-y-2.5">
                        {mod.lessons.map((lesson, lIdx) => (
                          <li
                            key={lIdx}
                            className="flex items-center justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-300 py-1 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50"
                          >
                            <div className="flex items-center gap-2.5">
                              <PlayCircle className="w-4 h-4 text-brand-purple-500 shrink-0" />
                              <span>{lesson}</span>
                            </div>
                            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                              Free Lesson
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------- FINAL PROJECT SECTION ---------------- */}
        <section className="rounded-3xl bg-gradient-to-tr from-brand-blue-900 via-brand-purple-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-brand-cyan-500/20 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-brand-cyan-300 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Capstone Proof of Work</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans']">
                Final Project: {course.finalProject.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {course.finalProject.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan-300">
                Key Project Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                {course.finalProject.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-md active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Get Starter Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

      </div>

      <LeadMagnetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resourceTitle={`${course.title} Starter Kit`}
      />
    </div>
  );
};
