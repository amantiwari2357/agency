"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Server, Users, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "Fintech Startup London",
    client: "PayFlow UK",
    result: "99.99% Uptime Achieved",
    description: "Implemented multi-cloud architecture with auto-scaling, reducing infrastructure costs by 40% while maintaining 99.99% uptime.",
    metrics: { uptime: "99.99%", cost: "-40%", time: "3 months" }
  },
  {
    title: "E-Commerce Platform",
    client: "ShopGlobal Ltd",
    result: "300% Faster Load Times",
    description: "Global CDN and database optimization reduced page load times from 4s to 1.2s, increasing conversion by 45%.",
    metrics: { speed: "+300%", conversion: "+45%", time: "2 months" }
  },
  {
    title: "Healthcare App",
    client: "MediCare Connect",
    result: "HIPAA Compliant Infrastructure",
    description: "Built compliant infrastructure with automated security patching and audit logging for healthcare data.",
    metrics: { compliance: "100%", security: "A+", time: "4 months" }
  }
];

export default function CloudCaseStudiesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Success Stories</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          See how businesses transformed their infrastructure with our cloud platform
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
                <Server className="w-5 h-5 text-[#4d7cf5]" />
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
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.uptime || study.metrics.speed || study.metrics.compliance}</p>
                  <p className="text-xs text-[#4a5060]">Performance</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.cost || study.metrics.conversion || study.metrics.security}</p>
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
