import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  ArrowLeft, 
  Share2, 
  Check, 
  Copy, 
  Bookmark, 
  Sparkles, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BlogCard } from '../components/BlogCard';
import { NewsletterSection } from '../components/NewsletterSection';
import { blogsData } from '../data/blogs';
import { trackEvent } from '../utils/analytics';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = blogsData.find((b) => b.slug === slug) || blogsData[0];
  const relatedPosts = blogsData.filter((b) => b.id !== post.id).slice(0, 3);

  const handleShare = (platform: string) => {
    trackEvent('blog_article_share', { platform, postTitle: post.title, slug: post.slug });
    const currentUrl = encodeURIComponent(window.location.href);
    const titleText = encodeURIComponent(post.title);

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${currentUrl}&text=${titleText}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToHeading = (id: string) => {
    trackEvent('table_of_contents_jump', { targetId: id, postSlug: post.slug });
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] pb-16">
      <SEOHead
        title={`${post.title} | SkillSprint India`}
        description={post.shortDescription}
        ogImage={post.coverImage}
        canonicalPath={`/blog/${post.slug}`}
      />

      {/* Top Breadcrumb */}
      <div className="bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-purple-600 dark:hover:text-brand-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-purple-50 dark:bg-brand-purple-950/60 text-brand-purple-700 dark:text-brand-purple-300 border border-brand-purple-200 dark:border-brand-purple-900">
              {post.category}
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white font-['Plus_Jakarta_Sans'] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {post.shortDescription}
          </p>

          {/* Author & Share Bar */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-purple-500/30"
              />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Share2 className="w-3.5 h-3.5" />
                <span>Share:</span>
              </span>
              
              <button
                onClick={() => handleShare('facebook')}
                aria-label="Share on Facebook"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-blue-600 hover:text-white transition-colors text-xs font-semibold"
              >
                FB
              </button>

              <button
                onClick={() => handleShare('twitter')}
                aria-label="Share on X"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:text-white transition-colors text-xs font-semibold"
              >
                X
              </button>

              <button
                onClick={() => handleShare('linkedin')}
                aria-label="Share on LinkedIn"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-600 hover:text-white transition-colors text-xs font-semibold"
              >
                IN
              </button>

              <button
                onClick={() => handleShare('copy')}
                aria-label="Copy article link"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors flex items-center gap-1 text-xs font-medium"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Link'}</span>
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-soft border border-slate-200/80 dark:border-slate-800">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </div>

      {/* Article Content Layout: Main + Sidebar TOC */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Body */}
          <main className="lg:col-span-8 space-y-8 prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
            
            {/* Table of Contents for Mobile */}
            <div className="lg:hidden p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-purple-600 dark:text-brand-cyan-400">
                In this article
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {post.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className="text-left hover:text-brand-purple-600 dark:hover:text-brand-cyan-400 hover:underline"
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formatted Article Content */}
            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
              {post.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                // Handle Markdown H3 with IDs
                if (trimmed.startsWith('### ')) {
                  const match = trimmed.match(/^###\s+(.+?)(?:\s+\{#(.+?)\})?$/);
                  const title = match ? match[1] : trimmed.replace('### ', '');
                  const id = match && match[2] ? match[2] : undefined;

                  return (
                    <h3
                      key={index}
                      id={id}
                      className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-6 border-t border-slate-100 dark:border-slate-800 font-['Plus_Jakarta_Sans'] scroll-mt-24"
                    >
                      {title}
                    </h3>
                  );
                }

                // Handle Markdown horizontal rules
                if (trimmed === '---') {
                  return <hr key={index} className="border-slate-200 dark:border-slate-800 my-6" />;
                }

                // Handle bullet lists
                if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                  const items = trimmed.split('\n');
                  return (
                    <ul key={index} className="space-y-2 pl-4 list-disc marker:text-brand-purple-500">
                      {items.map((it, iIdx) => (
                        <li key={iIdx} className="text-slate-700 dark:text-slate-300">
                          {it.replace(/^-\s+/, '').replace(/^\d+\.\s+/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={index} className="text-slate-700 dark:text-slate-300">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
              {post.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </main>

          {/* Desktop Sticky Sidebar (Table of Contents & Lead Magnet) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Table of Contents Widget */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-soft space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                  Table of Contents
                </h4>
                <nav className="space-y-2 text-xs">
                  {post.tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToHeading(item.id)}
                      className="block text-left text-slate-600 dark:text-slate-300 hover:text-brand-purple-600 dark:hover:text-brand-cyan-400 transition-colors leading-snug w-full"
                    >
                      {item.text}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sidebar CTA Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue-900 to-brand-purple-900 text-white shadow-soft space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan-300 bg-white/10 px-2 py-0.5 rounded">
                  Free Starter Guide
                </span>
                <h4 className="text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">
                  Download the Digital Marketing Starter Kit
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Includes our 90-day learning path, SEO checklist, and 30 social media hooks.
                </p>
                <Link
                  to="/campaign/digital-marketing"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold shadow transition-all"
                >
                  <span>Get Free Kit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200/80 dark:border-slate-800">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
              Related Articles &amp; Guides
            </h3>
            <Link
              to="/blog"
              className="text-xs sm:text-sm font-semibold text-brand-purple-600 dark:text-brand-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>View all</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <BlogCard key={rPost.id} post={rPost} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection source="blog_article_footer" />

    </div>
  );
};
