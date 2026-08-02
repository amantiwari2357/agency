"use client";

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Server, MessageSquare, Search, GraduationCap, ShoppingBag, Home, ArrowRight } from 'lucide-react';

export default function AEServicesPage() {
  const countryCode = "ae";
  const countryName = "United Arab Emirates";
  const currency = "AED";
  const currencySymbol = "د.إ";

  const services = [
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture, CI/CD pipelines, and multi-region deployment strategies.",
      link: `/${countryCode}/services/cloud`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Marketing Automation",
      description: "WhatsApp Business API, email campaigns, and real-time analytics dashboards.",
      link: `/${countryCode}/services/marketing`,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Technical SEO",
      description: "Automated schema markup, technical audits, and search performance monitoring.",
      link: `/${countryCode}/services/seo`,
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: GraduationCap,
      title: "Campus Recruitment",
      description: "AI-powered candidate matching and automated placement tracking systems.",
      link: `/${countryCode}/services/placements`,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Solutions",
      description: "Multi-channel inventory sync and AI-powered size recommendations.",
      link: `/${countryCode}/services/ecommerce`,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Home,
      title: "Real Estate Tech",
      description: "MLS integration, virtual 3D tours, and automated mortgage calculators.",
      link: `/${countryCode}/services/real-estate`,
      color: "from-amber-500 to-yellow-500"
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
            Our Services
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth across the United Arab Emirates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={service.link}>
                <div className="h-full bg-white rounded-2xl border border-[#4d7cf5]/30 p-8 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300 group cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1c1f26] mb-4">{service.title}</h3>
                  <p className="text-[#4a5060] mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-[#4d7cf5] font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#4d7cf5] via-[#4366d8] to-[#3660e0] rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team can build tailored solutions to meet your specific business requirements.
          </p>
          <Link
            href={`/${countryCode}/contact`}
            className="inline-block px-8 py-4 bg-white text-[#4d7cf5] rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
          >
            Contact Us
          </Link>
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
