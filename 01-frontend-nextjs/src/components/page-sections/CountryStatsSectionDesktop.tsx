"use client";

import { motion } from 'framer-motion';
import { Users, Building, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "100,000+",
    label: "Executives, Businesses & Clients Served",
    color: "text-blue-600"
  },
  {
    icon: Building,
    value: "650+",
    label: "Enterprise & University Partners",
    color: "text-cyan-600"
  },
  {
    icon: Globe,
    value: "125",
    label: "Global Cities & Cloud Regions",
    color: "text-purple-600"
  }
];

export default function CountryStatsSectionDesktop() {
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-[#4d7cf5] via-[#4366d8] to-[#3660e0] rounded-2xl border border-[#4d7cf5]/30 relative overflow-hidden shadow-xl shadow-[#4d7cf5]/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="grid grid-cols-3 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className={`w-6 h-6 text-white`} />
              </div>
              <span className="text-5xl font-black text-white block mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider block mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
