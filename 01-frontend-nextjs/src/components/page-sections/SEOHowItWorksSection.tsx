"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Search, Code, BarChart3, Globe, Zap } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Site Audit",
    description: "Comprehensive technical SEO audit identifying crawl issues, broken links, and optimization opportunities."
  },
  {
    icon: Code,
    title: "2. Schema Implementation",
    description: "Generate and implement structured data markup for products, articles, and local business listings."
  },
  {
    icon: Globe,
    title: "3. On-Page Optimization",
    description: "Optimize meta tags, headings, content structure, and internal linking for better search visibility."
  },
  {
    icon: BarChart3,
    title: "4. Rank Monitoring",
    description: "Track keyword rankings, organic traffic, and search performance metrics over time."
  },
  {
    icon: Zap,
    title: "5. Performance Optimization",
    description: "Improve page speed, Core Web Vitals, and mobile-friendliness for better rankings."
  },
  {
    icon: CheckCircle,
    title: "6. Continuous Improvement",
    description: "Ongoing monitoring, reporting, and optimization to maintain and improve rankings."
  }
];

export default function SEOHowItWorksSection() {
  return (
    <section className="py-16 bg-[#eef0f4] rounded-3xl border border-[#4d7cf5]/30 p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">How It Works</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Improve your SEO in 6 simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="bg-white rounded-xl p-6 border border-[#4d7cf5]/20 hover:border-[#4d7cf5] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4d7cf5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1c1f26] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4a5060] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
