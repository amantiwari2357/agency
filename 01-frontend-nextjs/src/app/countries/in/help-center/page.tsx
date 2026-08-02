"use client";

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import { motion } from 'framer-motion';
import { Search, HelpCircle, MessageCircle, Book, Mail, Phone } from 'lucide-react';

export default function INHelpCenterPage() {
  const countryCode = "in";
  const countryName = "India";
  const currency = "INR";
  const currencySymbol = "₹";

  const helpCategories = [
    {
      icon: HelpCircle,
      title: "Getting Started",
      description: "Quick start guides and onboarding tutorials.",
      articles: 12
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Detailed documentation for all services.",
      articles: 45
    },
    {
      icon: MessageCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions.",
      articles: 28
    },
    {
      icon: Mail,
      title: "Contact Support",
      description: "Get help from our support team.",
      articles: 8
    },
  ];

  const popularArticles = [
    "How to set up cloud infrastructure",
    "WhatsApp Business API integration guide",
    "Schema markup for e-commerce",
    "Campus recruitment system setup",
    "Troubleshooting common SEO issues",
  ];

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="landing" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1c1f26] mb-6">
            Help Center
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to your questions and get the help you need.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a5060]" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full bg-white border border-[#4d7cf5]/30 rounded-full pl-12 pr-4 py-4 text-[#1c1f26] focus:outline-none focus:border-[#4d7cf5]"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {helpCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="h-full bg-white rounded-2xl border border-[#4d7cf5]/30 p-6 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-[#4d7cf5]/10 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-[#4d7cf5]" />
                </div>
                <h3 className="text-lg font-bold text-[#1c1f26] mb-2">{category.title}</h3>
                <p className="text-[#4a5060] text-sm mb-3">{category.description}</p>
                <p className="text-sm text-[#4d7cf5] font-semibold">{category.articles} articles</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#eef0f4] rounded-2xl p-8 border border-[#4d7cf5]/20 mb-20"
        >
          <h2 className="text-2xl font-bold text-[#1c1f26] mb-6">Popular Articles</h2>
          <ul className="space-y-4">
            {popularArticles.map((article, index) => (
              <li key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#4d7cf5]/20 hover:border-[#4d7cf5] cursor-pointer transition-colors">
                <span className="text-[#4a5060]">{article}</span>
                <span className="text-[#4d7cf5]">→</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#4d7cf5] via-[#4366d8] to-[#3660e0] rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-white/90 mb-6">Our support team is available 24/7 to assist you.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:support@aexagency.com`} className="flex items-center gap-2 px-6 py-3 bg-white text-[#4d7cf5] rounded-xl font-semibold hover:bg-white/90 transition-colors">
              <Mail className="w-4 h-4" /> Email Support
            </a>
            <a href="tel:+918012345678" className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </motion.div>
      </main>

      <AdvancedFooter 
        countryCode={countryCode}
        countryName={countryName}
        currency={currency}
        currencySymbol={currencySymbol}
      />
    </>
  );
}
