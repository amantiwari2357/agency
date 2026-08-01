"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

export default function CallToActionSectionMobile() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl font-bold text-white leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Let's build something amazing together. Our team is ready to bring your vision to life with cutting-edge technology and modern design.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <a
              href="/us/contact"
              className="group px-8 py-4 bg-white hover:bg-gray-100 rounded-full text-blue-600 font-semibold transition-all duration-300 shadow-xl shadow-white/20 transform hover:scale-105 flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/us/services"
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:border-white rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
