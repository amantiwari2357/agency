"use client";

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from "next/link";

interface CountryHeroSectionProps {
  countryCode: string;
}

export default function CountryHeroSection({ countryCode }: CountryHeroSectionProps) {
  return (
    <section className="relative text-center py-16 md:py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl border border-gray-200 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold text-blue-700">
            Multi-Theme Industry Architecture ({countryCode.toUpperCase()})
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Component-Driven{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Multi-Industry
          </span>{' '}
          Platform
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg max-w-2xl mx-auto mt-4 text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Real Estate, E-Commerce Apparel, SaaS Cloud, Campus Hiring, SEO Bookmarking, & WhatsApp Marketing running in isolated feature directories.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href={`/${countryCode}/services/seo`}>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 transform hover:scale-105 flex items-center gap-2">
              Inspect Technical SEO Feature
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
