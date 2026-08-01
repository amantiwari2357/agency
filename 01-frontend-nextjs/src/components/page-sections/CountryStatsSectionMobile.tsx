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

export default function CountryStatsSectionMobile() {
  return (
    <section className="py-8 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl border border-blue-500/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 gap-8 text-center divide-y divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className={`w-6 h-6 text-white`} />
              </div>
              <span className="text-4xl md:text-5xl font-black text-white block">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-blue-100 uppercase tracking-wider block mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
