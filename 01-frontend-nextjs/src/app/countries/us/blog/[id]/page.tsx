"use client";

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from "@/data/blogPosts";

export default function USBlogPostPage({ params }: { params: { id: string } }) {
  const countryCode = "us";
  const countryName = "United States";
  const currency = "USD";
  const currencySymbol = "$";
  const postId = parseInt(params.id);
  
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <>
        <Header currentCountry={countryCode} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1c1f26] mb-4">Blog Post Not Found</h1>
            <Link href={`/countries/${countryCode}/blog`} className="text-[#4d7cf5] hover:underline">
              Back to Blog
            </Link>
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

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="landing" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link 
            href={`/countries/${countryCode}/blog`}
            className="inline-flex items-center gap-2 text-[#4d7cf5] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-[#4d7cf5]/10 text-[#4d7cf5] rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1c1f26] mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#4a5060]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#4d7cf5]/30 p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none text-[#4a5060] leading-relaxed">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-12">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#4d7cf5] text-white rounded-lg hover:bg-[#3660e0] transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="border-t border-[#4d7cf5]/30 pt-12">
              <h2 className="text-2xl font-bold text-[#1c1f26] mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/countries/${countryCode}/blog/${relatedPost.id}`}>
                    <div className="bg-white rounded-xl border border-[#4d7cf5]/30 p-6 hover:shadow-lg hover:shadow-[#4d7cf5]/10 transition-all cursor-pointer">
                      <span className="text-sm font-semibold text-[#4d7cf5] mb-2 block">{relatedPost.category}</span>
                      <h3 className="text-lg font-bold text-[#1c1f26] mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-sm text-[#4a5060] line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
