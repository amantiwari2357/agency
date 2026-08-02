"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Users, Briefcase, Calendar, FileText, BarChart3, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: "Resume Database",
    description: "Centralized student resume database with AI-powered matching and search capabilities."
  },
  {
    icon: Users,
    title: "Candidate Matching",
    description: "AI-driven candidate matching based on skills, experience, and job requirements."
  },
  {
    icon: Briefcase,
    title: "Job Portal",
    description: "Branded job portal with company profiles, job listings, and application tracking."
  },
  {
    icon: Calendar,
    title: "Interview Scheduling",
    description: "Automated interview scheduling with calendar sync and reminder notifications."
  },
  {
    icon: FileText,
    title: "Assessment Integration",
    description: "Online assessments, coding tests, and video interview integration."
  },
  {
    icon: BarChart3,
    title: "Placement Analytics",
    description: "Real-time dashboards tracking placement rates, salary packages, and company partnerships."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamlined workflows from application to offer letter with minimal manual intervention."
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Secure student data management with role-based access and compliance features."
  }
];

export default function PlacementsFeaturesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Complete Campus Hiring Solution</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to manage campus recruitment and placements
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
