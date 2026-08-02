"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone, Mail } from 'lucide-react';
import Link from "next/link";

interface ServiceCTASectionProps {
  countryCode: string;
}

export default function ServiceCTASection({ countryCode }: ServiceCTASectionProps) {
  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-[#4d7cf5] via-[#4366d8] to-[#3660e0] rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-xl shadow-[#4d7cf5]/20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join hundreds of brokerages and property developers already using our platform to close deals faster and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href={`/${countryCode}/contact`}>
                <button className="group px-8 py-4 bg-white text-[#4d7cf5] rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2">
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href={`tel:+18001234567`}>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>realestate@aexagency.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (800) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
