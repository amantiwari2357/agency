"use client";

import { motion } from 'framer-motion';
import { TrendingUp, GraduationCap, Users, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "Engineering College London",
    client: "Imperial Tech University",
    result: "96% Placement Rate Achieved",
    description: "AI-powered candidate matching increased placement rate from 78% to 96% with 40% higher average salary packages.",
    metrics: { placement: "96%", salary: "+40%", time: "6 months" }
  },
  {
    title: "Business School Manchester",
    client: "Manchester Business College",
    result: "280% More Company Partnerships",
    description: "Automated outreach and partnership management increased hiring partners from 50 to 190 companies.",
    metrics: { partners: "+280%", jobs: "+350%", time: "4 months" }
  },
  {
    title: "University Campus Birmingham",
    client: "Birmingham State University",
    result: "340% Faster Hiring Process",
    description: "Streamlined workflows reduced time-to-hire from 45 days to 10 days, improving both student and recruiter experience.",
    metrics: { speed: "+340%", satisfaction: "+180%", time: "3 months" }
  }
];

export default function PlacementsCaseStudiesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Success Stories</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          See how universities transformed their campus recruitment with our platform
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
                <GraduationCap className="w-5 h-5 text-[#4d7cf5]" />
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
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.placement || study.metrics.partners || study.metrics.speed}</p>
                  <p className="text-xs text-[#4a5060]">Performance</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.salary || study.metrics.jobs || study.metrics.satisfaction}</p>
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
