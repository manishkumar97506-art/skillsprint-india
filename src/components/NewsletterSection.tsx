import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface NewsletterSectionProps {
  headline?: string;
  subtext?: string;
  source?: string;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  headline = 'Get Practical Digital Skills Straight to Your Inbox',
  subtext = 'Join our free learning updates and get useful resources, AI tools, marketing tips and career insights.',
  source = 'homepage_bottom',
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackEvent('newsletter_signup', {
        email: email.trim(),
        source,
        timestamp: new Date().toISOString(),
      });
    }, 600);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-brand-blue-50/40 dark:from-[#0a0f1d] dark:to-[#0f172a] border-y border-slate-200/80 dark:border-slate-800">
      
      {/* Decorative blurred background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple-100 dark:bg-brand-purple-950/60 border border-brand-purple-200 dark:border-brand-purple-800/60 text-brand-purple-700 dark:text-brand-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan-500" />
          <span>Weekly Learning Dispatch</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto">
          {headline}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          {subtext}
        </p>

        {/* Lead Form */}
        <div className="mt-8 max-w-md mx-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-600 hover:opacity-95 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Joining...</span>
                  ) : (
                    <>
                      <span>Join Free</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {error && (
                <div className="flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400 pt-1 text-left">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                No spam. Only useful learning resources. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-lg text-center space-y-2 animate-in zoom-in-95 duration-200">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                You're in! Check your inbox for the next SkillSprint update.
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                We sent a welcome message to <span className="font-semibold text-brand-purple-500">{email}</span>.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
