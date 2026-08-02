"use client";

import { motion } from 'framer-motion';
import { TrendingUp, MessageSquare, Users, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "E-Commerce Brand London",
    client: "StyleHub UK",
    result: "340% Increase in Engagement",
    description: "WhatsApp marketing campaigns achieved 98% open rates and drove a 340% increase in customer engagement.",
    metrics: { engagement: "+340%", conversion: "+180%", time: "3 months" }
  },
  {
    title: "SaaS Startup Manchester",
    client: "TechFlow Solutions",
    result: "280% Higher Lead Generation",
    description: "Multi-channel email and WhatsApp automation increased qualified leads by 280% with 45% lower cost per lead.",
    metrics: { leads: "+280%", cost: "-45%", time: "2 months" }
  },
  {
    title: "Restaurant Chain UK",
    client: "Tasty Bites Group",
    result: "420% More Bookings",
    description: "Automated SMS and WhatsApp reminders reduced no-shows by 60% and increased bookings by 420%.",
    metrics: { bookings: "+420%", noshow: "-60%", time: "4 months" }
  }
];

export default function MarketingCaseStudiesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Success Stories</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          See how businesses transformed their marketing with our platform
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
                <MessageSquare className="w-5 h-5 text-[#4d7cf5]" />
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
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.engagement || study.metrics.leads || study.metrics.bookings}</p>
                  <p className="text-xs text-[#4a5060]">Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.conversion || study.metrics.cost || study.metrics.noshow}</p>
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
