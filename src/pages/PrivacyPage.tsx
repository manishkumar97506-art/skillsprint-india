import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] py-12 lg:py-16">
      <SEOHead
        title="Privacy Policy | SkillSprint India"
        description="Privacy policy and data transparency practices for SkillSprint India."
        canonicalPath="/privacy"
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
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400">Last updated: October 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              1. Overview &amp; Commitment to Privacy
            </h2>
            <p>
              At SkillSprint India, we respect the privacy of every student, learner, and visitor. This policy explains what information we collect when you use our educational website, download our learning resources, or subscribe to our free learning updates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>
                <strong>Contact Information:</strong> When you subscribe to our newsletter or request a downloadable starter kit, we collect your name and email address.
              </li>
              <li>
                <strong>Inquiry Messages:</strong> When you submit a message through our contact form, we collect the details provided so we can respond.
              </li>
              <li>
                <strong>Aggregated Usage Telemetry:</strong> We collect non-identifiable browser and device telemetry (such as page visits, device type, and button clicks) to improve the website's performance and design for mobile devices.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              3. How We Use Your Data
            </h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Deliver the requested learning resources, starter kits, and templates.</li>
              <li>Send occasional educational newsletters, career insights, and new course updates.</li>
              <li>Respond to your feedback, questions, or support requests.</li>
            </ul>
            <p className="font-semibold text-slate-900 dark:text-white">
              We never sell, rent, or trade your personal email address to third-party data brokers or marketing lists.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              We may utilize standard web cookies and local storage tokens (such as remembering your dark mode preference) to ensure an optimal user experience across visits. You may disable cookies through your browser settings at any time without losing access to our free articles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              5. Your Rights &amp; Unsubscribing
            </h2>
            <p>
              You can unsubscribe from our learning updates at any time by clicking the "Unsubscribe" link at the bottom of any email we send, or by emailing us directly at <span className="text-brand-blue-600 dark:text-brand-cyan-400 font-medium">privacy@skillsprintindia.org</span>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
