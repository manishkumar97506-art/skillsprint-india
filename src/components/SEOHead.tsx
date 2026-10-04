import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'SkillSprint India | Learn Digital Skills & Build Your Career',
  description = 'Learn digital marketing, AI tools, social media, design and freelancing with practical beginner-friendly resources from SkillSprint India.',
  ogImage = '/og-image.svg',
  canonicalPath = '',
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG tags
    const updateMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:image', ogImage);
    if (canonicalPath && typeof window !== 'undefined') {
      updateMeta('og:url', window.location.origin + canonicalPath);
    }

    // Scroll to top on page navigation
    window.scrollTo(0, 0);
  }, [title, description, ogImage, canonicalPath]);

  return null;
};
