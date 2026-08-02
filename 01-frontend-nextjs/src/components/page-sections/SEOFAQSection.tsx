"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of schema markup do you support?",
    answer: "We support all major schema types including Product, Article, LocalBusiness, Organization, FAQ, Review, BreadcrumbList, Event, JobPosting, Recipe, VideoObject, and many more. Our AI can automatically generate appropriate schema based on your content type."
  },
  {
    question: "How does the technical SEO audit work?",
    answer: "Our crawler analyzes your website for over 200 SEO factors including crawlability, indexability, site speed, mobile-friendliness, HTTPS security, broken links, duplicate content, and technical issues. You'll receive a prioritized list of actionable recommendations."
  },
  {
    question: "Can you help with local SEO?",
    answer: "Yes, we provide comprehensive local SEO optimization including Google Business Profile management, local citation building, review management, geo-targeted content optimization, and local schema markup implementation."
  },
  {
    question: "How do you track keyword rankings?",
    answer: "We track your keyword rankings across Google, Bing, and other search engines. You can monitor position changes, search volume trends, competitor rankings, and receive alerts for significant ranking changes. Historical data shows progress over time."
  },
  {
    question: "What about international and multi-language SEO?",
    answer: "We support international SEO with hreflang tag implementation, geo-targeting configuration, multi-language sitemaps, and content localization recommendations. This helps search engines serve the right content to the right audience."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track comprehensive metrics including organic traffic, keyword rankings, click-through rates, conversion rates, Core Web Vitals, and revenue attribution. Custom dashboards show the metrics that matter most to your business goals."
  }
];

export default function SEOFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to know about our SEO platform
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-[#4d7cf5]/30 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#eef0f4] transition-colors"
            >
              <span className="font-semibold text-[#1c1f26]">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#4d7cf5]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#4d7cf5]" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-2">
                <p className="text-[#4a5060] leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
