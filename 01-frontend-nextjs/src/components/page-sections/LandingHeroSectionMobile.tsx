"use client";

import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, Shield } from 'lucide-react';
import CallToActionBannerMobile from './CallToActionBannerMobile';

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Globe },
  { value: "99%", label: "Client Satisfaction", icon: Sparkles },
  { value: "24/7", label: "Support Available", icon: Zap },
  { value: "3+", label: "Years Experience", icon: Shield },
];

export default function LandingHeroSectionMobile() {
  return (
    <div className="space-y-0">
      {/* Banner 1 - Image Banner */}
      <section className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4d7cf5] via-[#3660e0] to-[#4d7cf5] opacity-90" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl font-extrabold text-white pb-2 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                AEX Agency
              </span>
            </h1>
            <p className="text-base max-w-2xl mx-auto text-blue-100">
              Empowering businesses with cutting-edge digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Banner 2 - Stats */}
      <section className="px-4 py-8 bg-white border-y border-[#eef0f4]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-[#eef0f4] rounded-xl border border-[#eef0f4] hover:bg-[#4d7cf5] hover:border-[#3660e0] transition-all"
                whileHover={{ y: -4 }}
                transition={{ delay: 0.1 * index }}
              >
                <stat.icon className="w-5 h-5 text-[#4d7cf5] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#1c1f26]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#8a90a2] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CallToActionBannerMobile />
    </div>
  );
}
