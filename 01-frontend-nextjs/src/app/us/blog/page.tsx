"use client";

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from "@/data/blogPosts";

export default function USBlogPage() {
  const countryCode = "us";
  const countryName = "United States";
  const currency = "USD";
  const currencySymbol = "$";

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
            Blog
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and industry news from our team of experts.
          </p>
        </motion.div>

        <SuccessStoryBanner
          countryCode={countryCode}
          countryName={countryName}
          type="resource"
          serviceType="resource"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <Link href={`/${countryCode}/blog/${post.id}`}>
                <div className="h-full bg-white rounded-2xl border border-[#4d7cf5]/30 p-8 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300 group cursor-pointer">
                  <div className="text-sm font-semibold text-[#4d7cf5] mb-3">{post.category}</div>
                  <h3 className="text-xl font-bold text-[#1c1f26] mb-4 group-hover:text-[#4d7cf5] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-[#4a5060] mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-[#4a5060]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#4d7cf5] group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
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
