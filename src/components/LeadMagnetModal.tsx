import React, { useState } from 'react';
import { X, CheckCircle, Download, Sparkles, FileText, Check, AlertCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle?: string;
  defaultEmail?: string;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({
  isOpen,
  onClose,
  resourceTitle = 'Free Digital Marketing Starter Kit',
  defaultEmail = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(defaultEmail);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate marketing lead submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackEvent('lead_magnet_download', {
        resourceTitle,
        name: name.trim(),
        email: email.trim(),
        timestamp: new Date().toISOString(),
      });
    }, 700);
  };

  const handleDownloadSimulate = () => {
    trackEvent('download_starter_kit_file_click', { resourceTitle });
    
    // Create an actionable text file download representing the starter kit
    const starterKitContent = `=====================================================
SKILLSPRINT INDIA — DIGITAL MARKETING STARTER KIT
=====================================================
Tagline: Learn Skills. Build Your Career.
Website: https://skillsprintindia.org/

WELCOME TO YOUR STARTER KIT!
Thank you for taking action. Here is your immediate 90-day action plan:

PHASE 1: THE FOUNDATIONS (Days 1–30)
- Understand the modern inbound funnel: Awareness -> Consideration -> Conversion.
- Set up Google Search Console and understand high-intent organic keywords.
- Optimize your personal LinkedIn & Instagram profiles for professional credibility.

PHASE 2: CONTENT & VISUALS (Days 31–60)
- Master the 60-30-10 color rule and 2-font typography hierarchy in Canva.
- Practice the PAS (Problem-Agitation-Solution) writing framework.
- Create your first 30-day content calendar.

PHASE 3: PAID TRAFFIC & ANALYTICS (Days 61–90)
- Learn Meta Ads Manager hierarchy: Campaign -> Ad Set -> Creative.
- Set up custom event tracking and UTM parameter conventions.
- Build your capstone project: "Build Your First Marketing Campaign".

BONUS CURATED AI PROMPT:
"Act as a senior growth marketing strategist in India. Review this product idea: [INSERT PRODUCT]. Identify the top 3 target buyer personas, their biggest emotional pain points, and suggest 5 organic content hooks for Instagram and LinkedIn."

Happy learning!
Team SkillSprint India
=====================================================`;

    const blob = new Blob([starterKitContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SkillSprint-Digital-Marketing-Starter-Kit.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-brand-blue-700 via-brand-purple-700 to-brand-cyan-600 p-6 text-white text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan-300" />
            <span>100% Free Starter Resource</span>
          </div>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-tight">
            {resourceTitle}
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm mt-1">
            Practical roadmap, tested checklists, and content templates for students and beginners.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isSuccess ? (
            <div>
              {/* Included Checklist Highlights */}
              <div className="mb-6 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">What's inside your bundle:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Digital Marketing Roadmap</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>30 Social Content Ideas</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Beginner SEO Checklist</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Top Free AI Tools List</span>
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email Address
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm"
                  />
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    No spam ever. Only practical learning guides and actionable tips.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-600 hover:opacity-95 shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Preparing your starter kit...</span>
                  ) : (
                    <>
                      <span>Get the Free Kit Now</span>
                      <Download className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  You're in! Welcome to SkillSprint.
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                  We've sent a confirmation to <strong className="text-brand-purple-600 dark:text-brand-cyan-400">{email}</strong>. You can also download your copy right now:
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadSimulate}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Starter Kit (.txt / .pdf)</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
                >
                  Close and explore website
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
