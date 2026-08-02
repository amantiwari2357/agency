import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";
import SchemaMarkup from "@/features/seo-schema-feature";
import { motion } from "framer-motion";
import { Users, Globe, Award, Target, Heart, Zap } from 'lucide-react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AEX Agency United States",
  description: "Learn about AEX Agency's mission, values, and commitment to delivering innovative digital solutions in United States. Discover our 500+ global clients and 2000+ successful projects.",
  alternates: {
    canonical: "https://aexagency.com/us/about",
  },
  openGraph: {
    title: "About Us | AEX Agency United States",
    description: "Learn about AEX Agency's mission, values, and commitment to delivering innovative digital solutions in United States.",
    url: "https://aexagency.com/us/about",
  },
};

export default function USAboutPage() {
  const countryCode = "us";
  const countryName = "United States";
  const currency = "USD";
  const currencySymbol = "$";

  const stats = [
    { icon: Users, value: "500+", label: "Global Clients" },
    { icon: Globe, value: "30+", label: "Countries Served" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: Target, value: "2000+", label: "Projects Delivered" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Centric",
      description: "We put our clients first, ensuring every solution is tailored to their unique needs and goals."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We leverage cutting-edge technology to deliver solutions that stay ahead of the curve."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work as partners, not vendors, building long-term relationships based on trust."
    },
  ];

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="about" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1c1f26] mb-6">
            About AEX Agency
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed">
            We're a global technology agency delivering innovative digital solutions that transform businesses and drive growth across the United States and beyond.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#4d7cf5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#4d7cf5]" />
              </div>
              <p className="text-4xl font-bold text-[#4d7cf5] mb-2">{stat.value}</p>
              <p className="text-sm text-[#4a5060]">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl border border-[#4d7cf5]/30 p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-6">Our Mission</h2>
          <p className="text-lg text-[#4a5060] leading-relaxed mb-6">
            To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth. We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that exceed expectations.
          </p>
          <p className="text-lg text-[#4a5060] leading-relaxed">
            Our team of experts combines deep technical knowledge with creative problem-solving to deliver results that matter. From cloud infrastructure to marketing automation, from SEO optimization to campus recruitment systems, we provide end-to-end solutions that help businesses thrive in the digital age.
          </p>
        </motion.div>

        {/* Success Story Banner */}
        <SuccessStoryBanner 
          countryCode={countryCode}
          countryName={countryName}
          type="company"
          serviceType="company"
        />

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-[#1c1f26] mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#eef0f4] rounded-2xl p-8 border border-[#4d7cf5]/20">
                <div className="w-14 h-14 bg-[#4d7cf5] rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1c1f26] mb-4">{value.title}</h3>
                <p className="text-[#4a5060] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-[#4d7cf5] via-[#4366d8] to-[#3660e0] rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our innovative solutions.
          </p>
          <a
            href={`/${countryCode}/contact`}
            className="inline-block px-8 py-4 bg-white text-[#4d7cf5] rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
          >
            Get in Touch
          </a>
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
