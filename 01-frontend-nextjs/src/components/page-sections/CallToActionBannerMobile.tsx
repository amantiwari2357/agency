"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

export default function CallToActionBannerMobile() {
  return (
    <section className="px-4 py-8 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 text-sm">
                Let's build something amazing together
              </p>
            </div>
          </div>
          <a
            href="/us/contact"
            className="group px-6 py-3 bg-white hover:bg-gray-100 rounded-full text-blue-600 font-semibold transition-all duration-300 shadow-xl shadow-white/20 transform hover:scale-105 flex items-center gap-2 text-sm whitespace-nowrap"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
