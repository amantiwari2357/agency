"use client";

import { motion } from 'framer-motion';
import { TrendingUp, ShoppingBag, Users, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "Luxury Fashion Brand London",
    client: "Boutique Style Ltd",
    result: "450% Increase in Online Sales",
    description: "Implemented AI-powered size recommendations and virtual try-on, resulting in 60% reduction in returns and record-breaking sales.",
    metrics: { sales: "+450%", returns: "-60%", time: "4 months" }
  },
  {
    title: "Streetwear Brand Manchester",
    client: "Urban Threads UK",
    result: "320% Higher Conversion Rate",
    description: "Multi-channel inventory sync and one-page checkout increased conversion rates from 2.1% to 8.8%.",
    metrics: { sales: "+320%", conversion: "+320%", time: "3 months" }
  },
  {
    title: "Sustainable Fashion Brand",
    client: "EcoWear Collective",
    result: "280% Growth in Customer Base",
    description: "Customer segmentation and personalized marketing campaigns drove massive customer acquisition and retention.",
    metrics: { sales: "+280%", customers: "+280%", time: "5 months" }
  }
];

export default function EcommerceCaseStudiesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Success Stories</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          See how fashion brands transformed their e-commerce operations with our platform
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
                <ShoppingBag className="w-5 h-5 text-[#4d7cf5]" />
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
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.sales}</p>
                  <p className="text-xs text-[#4a5060]">Sales</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.returns || study.metrics.conversion}</p>
                  <p className="text-xs text-[#4a5060]">{study.metrics.returns ? 'Returns' : 'Conversion'}</p>
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
