"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Search, Users, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "E-Commerce Site London",
    client: "ShopSmart UK",
    result: "450% Increase in Organic Traffic",
    description: "Technical SEO audit and schema markup implementation drove a 450% increase in organic search traffic and 180% more conversions.",
    metrics: { traffic: "+450%", conversion: "+180%", time: "4 months" }
  },
  {
    title: "Local Business Manchester",
    client: "City Plumbers Ltd",
    result: "320% Higher Local Rankings",
    description: "Local SEO optimization with Google Business Profile management achieved top 3 rankings for all target keywords.",
    metrics: { rankings: "+320%", leads: "+250%", time: "3 months" }
  },
  {
    title: "SaaS Company",
    client: "CloudFlow Solutions",
    result: "280% More Qualified Leads",
    description: "Content optimization and technical improvements increased organic leads by 280% with 40% lower cost per acquisition.",
    metrics: { leads: "+280%", cost: "-40%", time: "5 months" }
  }
];

export default function SEOCaseStudiesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Success Stories</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          See how businesses improved their search rankings with our platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="h-full bg-white rounded-xl border border-[#4d7cf5]/30 p-6 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-[#4d7cf5]" />
                <span className="text-sm font-semibold text-[#4a5060]">{study.client}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1c1f26] mb-2">{study.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-[#4d7cf5]" />
                <span className="text-sm font-bold text-[#4d7cf5]">{study.result}</span>
              </div>
              <p className="text-sm text-[#4a5060] mb-6 leading-relaxed">{study.description}</p>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#4d7cf5]/20">
                <div className="text-center">
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.traffic || study.metrics.rankings || study.metrics.leads}</p>
                  <p className="text-xs text-[#4a5060]">Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.conversion || study.metrics.leads || study.metrics.cost}</p>
                  <p className="text-xs text-[#4a5060]">Impact</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.time}</p>
                  <p className="text-xs text-[#4a5060]">Timeline</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
