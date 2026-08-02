"use client";

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import Link from "next/link";
import { motion } from 'framer-motion';
import { BookOpen, Code, Server, MessageSquare, Search, GraduationCap, ChevronRight } from 'lucide-react';

export default function INDocumentationPage() {
  const countryCode = "in";
  const countryName = "India";
  const currency = "INR";
  const currencySymbol = "₹";

  const docs = [
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Setup guides, API references, and best practices.",
      link: `/countries/${countryCode}/services/cloud`
    },
    {
      icon: MessageSquare,
      title: "Marketing Automation",
      description: "Integration guides and campaign setup tutorials.",
      link: `/countries/${countryCode}/services/marketing`
    },
    {
      icon: Search,
      title: "Technical SEO",
      description: "Schema markup guides and audit documentation.",
      link: `/countries/${countryCode}/services/seo`
    },
    {
      icon: GraduationCap,
      title: "Campus Recruitment",
      description: "Platform setup and API documentation.",
      link: `/countries/${countryCode}/services/placements`
    },
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Quick start guides for all services.",
      link: "#"
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation and examples.",
      link: `/countries/${countryCode}/api-reference`
    },
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
            Documentation
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides and API documentation to help you integrate and use our services effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={doc.link}>
                <div className="h-full bg-white rounded-2xl border border-[#4d7cf5]/30 p-8 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300 group cursor-pointer">
                  <div className="w-14 h-14 bg-[#4d7cf5]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4d7cf5] transition-colors">
                    <doc.icon className="w-7 h-7 text-[#4d7cf5] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1c1f26] mb-3">{doc.title}</h3>
                  <p className="text-[#4a5060] mb-4 leading-relaxed">{doc.description}</p>
                  <div className="flex items-center text-[#4d7cf5] font-semibold group-hover:translate-x-2 transition-transform">
                    View Docs <ChevronRight className="w-4 h-4 ml-2" />
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
