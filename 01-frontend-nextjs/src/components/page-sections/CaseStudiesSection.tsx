"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Building, Users, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "Luxury Properties London",
    client: "Mayfair Estates",
    result: "340% Increase in Online Leads",
    description: "Implemented virtual 3D tours and automated lead nurturing, resulting in record-breaking property inquiries.",
    metrics: { leads: "+340%", conversion: "+180%", time: "3 months" }
  },
  {
    title: "Commercial Real Estate Dubai",
    client: "Gulf Properties LLC",
    result: "220% Faster Deal Closure",
    description: "Digital document management and smart scheduling reduced deal cycle time from 45 days to 14 days.",
    metrics: { leads: "+150%", conversion: "+220%", time: "2 months" }
  },
  {
    title: "Residential Brokerage NYC",
    client: "Manhattan Homes",
    result: "500% ROI on Marketing",
    description: "Integrated MLS feeds with WhatsApp marketing generated 5x return on advertising spend.",
    metrics: { leads: "+500%", conversion: "+300%", time: "4 months" }
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Success Stories</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          See how real estate businesses transformed their operations with our platform
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
                <Building className="w-5 h-5 text-[#4d7cf5]" />
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
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.leads}</p>
                  <p className="text-xs text-[#4a5060]">Leads</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.conversion}</p>
                  <p className="text-xs text-[#4a5060]">Conversion</p>
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
