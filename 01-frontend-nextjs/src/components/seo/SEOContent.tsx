'use client';

import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS, fetchAPI } from '../../config/api';

interface SEOData {
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
  seoContent: string;
  pageContent: string;
}

interface SEOContentProps {
  page: string;
  country?: string;
}

export default function SEOContent({ page, country = 'global' }: SEOContentProps) {
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSEO = async () => {
      try {
        const response = await fetchAPI<any>(`${API_ENDPOINTS.seo}/page/${page}/${country}`);
        if (response.success) {
          setSeoData(response.data);
          // Update document title and meta tags
          if (typeof document !== 'undefined') {
            document.title = response.data.pageTitle || response.data.metaTitle;
            updateMetaTags(response.data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch SEO data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSEO();
  }, [page, country]);

  const updateMetaTags = (data: SEOData) => {
    if (typeof document === 'undefined') return;

    // Update or create meta description
    updateOrCreateMeta('meta[name="description"]', 'name', 'description', data.metaDescription);

    // Update or create meta keywords
    updateOrCreateMeta('meta[name="keywords"]', 'name', 'keywords', Array.isArray(data.metaKeywords) ? data.metaKeywords.join(', ') : data.metaKeywords);

    // Update OG tags
    updateOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', data.ogTitle || data.metaTitle);
    updateOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', data.ogDescription || data.metaDescription);
    updateOrCreateMeta('meta[property="og:image"]', 'property', 'og:image', data.ogImage);

    // Update Twitter tags
    updateOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', data.twitterTitle || data.metaTitle);
    updateOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', data.twitterDescription || data.metaDescription);
    updateOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', data.twitterImage);

    // Update canonical URL
    updateOrCreateLink('link[rel="canonical"]', 'rel', 'canonical', data.canonicalUrl);
  };

  const updateOrCreateMeta = (selector: string, attribute: string, value: string, content: string) => {
    let element = document.querySelector(selector) as HTMLMetaElement;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, value);
      document.head.appendChild(element);
    }
    if (content) {
      element.setAttribute('content', content);
    }
  };

  const updateOrCreateLink = (selector: string, attribute: string, value: string, href: string) => {
    let element = document.querySelector(selector) as HTMLLinkElement;
    if (!element) {
      element = document.createElement('link');
      element.setAttribute(attribute, value);
      document.head.appendChild(element);
    }
    if (href) {
      element.setAttribute('href', href);
    }
  };

  if (loading || !seoData) {
    return null;
  }

  return (
    <>
      {/* SEO Content Display at Bottom of Page */}
      {seoData.seoContent && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Page</h3>
              <div className="text-gray-700 whitespace-pre-line">
                {seoData.seoContent}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: seoData.pageTitle,
            description: seoData.metaDescription,
            url: seoData.canonicalUrl,
            keywords: seoData.metaKeywords
          })
        }}
      />
    </>
  );
}
