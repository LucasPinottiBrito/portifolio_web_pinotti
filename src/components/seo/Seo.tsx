import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioContent } from '@/content/portfolioContent';

export function Seo() {
  const { language } = useLanguage();
  const { seo } = portfolioContent[language];

  useEffect(() => {
    // Update Document Title
    document.title = seo.title;

    // Helper to update or create meta tags
    const updateMetaTag = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        if (selector.startsWith('meta[property')) {
          element = document.createElement('meta');
          const property = selector.match(/property="([^"]+)"/)?.[1];
          if (property) element.setAttribute('property', property);
          document.head.appendChild(element);
        } else if (selector.startsWith('meta[name')) {
          element = document.createElement('meta');
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) element.setAttribute('name', name);
          document.head.appendChild(element);
        }
      }
      if (element) {
        element.setAttribute(attr, value);
      }
    };

    // Helper to update link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Update Meta Tags
    updateMetaTag('meta[name="description"]', 'content', seo.description);
    updateMetaTag('meta[name="keywords"]', 'content', seo.keywords.join(', '));
    
    // Update Open Graph
    updateMetaTag('meta[property="og:title"]', 'content', seo.ogTitle);
    updateMetaTag('meta[property="og:description"]', 'content', seo.ogDescription);
    updateMetaTag('meta[property="og:locale"]', 'content', seo.language === 'en' ? 'en_US' : 'pt_BR');
    
    // Update Twitter
    updateMetaTag('meta[name="twitter:title"]', 'content', seo.ogTitle);
    updateMetaTag('meta[name="twitter:description"]', 'content', seo.ogDescription);

    // Update Canonical
    const baseUrl = 'https://pinotti.vercel.app';
    updateLinkTag('canonical', `${baseUrl}${seo.canonicalPath}`);
    
    // Update HTML lang attribute
    document.documentElement.lang = seo.language;

  }, [seo, language]);

  return null;
}
