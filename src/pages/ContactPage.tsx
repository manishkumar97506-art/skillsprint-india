import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Send, CheckCircle2, AlertCircle, Sparkles, MapPin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { trackEvent } from '../utils/analytics';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setError('Please select or specify a subject.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setError('Message must be at least 10 characters long.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackEvent('contact_form_submit', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        timestamp: new Date().toISOString(),
      });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] py-12 lg:py-16">
      <SEOHead
        title="Contact Us | SkillSprint India"
        description="Have questions about courses, guides, or partnerships? Reach out to the SkillSprint India team."
        canonicalPath="/contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan-50 dark:bg-brand-cyan-950/60 border border-brand-cyan-200/50 dark:border-brand-cyan-800 text-brand-cyan-700 dark:text-brand-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>We're Here to Help</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans'] tracking-tight">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have a question about a course, feedback on a learning guide, or want to collaborate? Send us a note.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-soft">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="e.g. Question about Digital Marketing Course"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-brand-cyan-600 hover:opacity-95 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, <span className="font-semibold">{formData.name}</span>. Our team reviews all inquiries and will respond to <span className="text-brand-purple-600 dark:text-brand-cyan-400 font-semibold">{formData.email}</span> within 24–48 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-semibold text-brand-blue-600 dark:text-brand-cyan-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Info Block */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-600 dark:text-brand-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Direct Email</p>
                    <p className="text-slate-500 dark:text-slate-400">hello@skillsprintindia.org</p>
                    <p className="text-[11px] text-slate-400">For course inquiries &amp; resource queries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple-50 dark:bg-slate-800 text-brand-purple-600 dark:text-brand-purple-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Response Time</p>
                    <p className="text-slate-500 dark:text-slate-400">Monday – Friday</p>
                    <p className="text-[11px] text-slate-400">We typically reply within 24 to 48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                    <p className="text-slate-500 dark:text-slate-400">New Delhi / Bengaluru, India</p>
                    <p className="text-[11px] text-slate-400">Serving students across all Indian states</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Support */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-soft space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-cyan-400">
                Connect on Social Channels
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We share quick carousels, marketing tips, and AI prompts daily on our official community pages.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://facebook.com/skillsprintindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-brand-blue-600 text-xs font-medium transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com/skillsprintindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-pink-600 text-xs font-medium transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/company/skillsprintindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-600 text-xs font-medium transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
