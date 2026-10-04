import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { trackEvent } from '../utils/analytics';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const handleClick = () => {
    trackEvent('blog_card_click', {
      postId: post.id,
      postTitle: post.title,
      category: post.category,
    });
  };

  return (
    <article className="group flex flex-col bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      
      {/* Featured Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-brand-blue-600/90 text-white backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>{post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-purple-600 dark:group-hover:text-brand-cyan-400 transition-colors font-['Plus_Jakarta_Sans'] line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {post.shortDescription}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
            />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            onClick={handleClick}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple-600 dark:text-brand-cyan-400 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </article>
  );
};
