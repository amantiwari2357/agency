

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";`nimport SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";
import SchemaMarkup from "@/features/seo-schema-feature";
import Link from "next/link";
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download, ArrowRight } from 'lucide-react';

export default function INResourcesPage() {
  const countryCode = "in";
  const countryName = "India";
  const currency = "INR";
  const currencySymbol = "₹";

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and tutorials for all our services.",
      link: `/${countryCode}/documentation`
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "Real-world success stories and implementation examples.",
      link: `/${countryCode}/case-studies`
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks.",
      link: "#"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Whitepapers, templates, and technical resources.",
      link: "#"
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
            Resources
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed">
            Access documentation, case studies, and learning materials to help you get the most out of our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={resource.link}>
                <div className="h-full bg-white rounded-2xl border border-[#4d7cf5]/30 p-8 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-[#4d7cf5]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4d7cf5] transition-colors">
                    <resource.icon className="w-8 h-8 text-[#4d7cf5] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1c1f26] mb-3">{resource.title}</h3>
                  <p className="text-[#4a5060] mb-4 leading-relaxed">{resource.description}</p>
                  <div className="flex items-center text-[#4d7cf5] font-semibold group-hover:translate-x-2 transition-transform">
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
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
