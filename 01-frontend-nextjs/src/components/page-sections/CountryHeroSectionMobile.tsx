"use client";

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from "next/link";

interface CountryHeroSectionProps {
  countryCode: string;
}

export default function CountryHeroSectionMobile({ countryCode }: CountryHeroSectionProps) {
  return (
    <section className="relative text-center py-20 px-6 bg-white rounded-3xl border border-[#4d7cf5]/30 shadow-xl shadow-[#4d7cf5]/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4d7cf5]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#3660e0]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#4d7cf5]/10 border border-[#4d7cf5]/30 rounded-full mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-[#4d7cf5]" />
          <span className="text-xs font-bold text-[#4d7cf5] uppercase tracking-wider">
            Multi-Theme Industry Architecture ({countryCode.toUpperCase()})
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-black tracking-tight max-w-4xl mx-auto leading-tight text-[#1c1f26]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Component-Driven{' '}
          <span className="bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] bg-clip-text text-transparent">
            Multi-Industry
          </span>{' '}
          Platform
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg max-w-2xl mx-auto mt-6 text-[#4a5060] leading-relaxed"
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
            <button className="group px-8 py-4 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] hover:from-[#3660e0] hover:to-[#4d7cf5] rounded-full text-white font-semibold transition-all duration-300 shadow-lg shadow-[#4d7cf5]/30 transform hover:scale-105 flex items-center gap-2">
              Inspect Technical SEO Feature
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
