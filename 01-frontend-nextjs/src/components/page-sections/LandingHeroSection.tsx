"use client";

import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, Shield } from 'lucide-react';
import CallToActionBanner from './CallToActionBanner';

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Globe },
  { value: "99%", label: "Client Satisfaction", icon: Sparkles },
  { value: "24/7", label: "Support Available", icon: Zap },
  { value: "3+", label: "Years Experience", icon: Shield },
];

export default function HeroSection() {
  return (
    <div className="space-y-0">
      {/* Banner 1 - Image Banner */}
      <section className="relative overflow-hidden h-64 md:h-80 lg:h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700">
          {/* Add your image here - replace the div below with an img tag */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 opacity-90" />
          {/* Example: <img src="/your-banner-image.jpg" alt="Banner" className="w-full h-full object-cover" /> */}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white pb-2 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                AEX Agency
              </span>
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto">
              Empowering businesses with cutting-edge digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Banner 2 - Stats */}
      <section className="px-4 py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all"
                whileHover={{ y: -4 }}
                transition={{ delay: 0.1 * index }}
              >
                <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
