"use client";

import { motion } from 'framer-motion';
import { Search, Code, FileText, BarChart3, Globe, Zap, Shield, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Automated Schema Markup",
    description: "Generate JSON-LD schema for products, articles, local businesses, and more with zero coding."
  },
  {
    icon: Code,
    title: "Technical SEO Audits",
    description: "Comprehensive site audits identifying crawl errors, broken links, and optimization opportunities."
  },
  {
    icon: FileText,
    title: "Meta Tag Optimization",
    description: "Auto-generate and optimize title tags, meta descriptions, and Open Graph tags."
  },
  {
    icon: BarChart3,
    title: "Rank Tracking",
    description: "Monitor keyword rankings across search engines with historical performance data."
  },
  {
    icon: Globe,
    title: "International SEO",
    description: "Hreflang tags, geo-targeting, and multi-language SEO for global reach."
  },
  {
    icon: Zap,
    title: "Page Speed Optimization",
    description: "Core Web Vitals monitoring and optimization recommendations."
  },
  {
    icon: Shield,
    title: "Security & HTTPS",
    description: "SSL certificate monitoring and security header implementation."
  },
  {
    icon: CheckCircle,
    title: "Sitemap Generation",
    description: "Automatic XML sitemap creation and submission to search engines."
  }
];

export default function SEOFeaturesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Complete Technical SEO Solution</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to improve search rankings and organic traffic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="h-full bg-white rounded-xl border border-[#4d7cf5]/30 p-6 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#4d7cf5]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#4d7cf5]" />
              </div>
              <h3 className="text-lg font-bold text-[#1c1f26] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#4a5060] leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
