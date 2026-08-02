"use client";

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import { motion } from 'framer-motion';
import { TrendingUp, Building, ArrowRight } from 'lucide-react';

export default function INCaseStudiesPage() {
  const countryCode = "in";
  const countryName = "India";
  const currency = "INR";
  const currencySymbol = "₹";

  const caseStudies = [
    {
      title: "Luxury Properties Mumbai",
      client: "Mumbai Prime Estates",
      result: "340% Increase in Online Leads",
      description: "Implemented virtual 3D tours and automated lead nurturing, resulting in record-breaking property inquiries.",
      metrics: { leads: "+340%", conversion: "+180%", time: "3 months" }
    },
    {
      title: "Fintech Startup Bangalore",
      client: "PayFlow India",
      result: "99.99% Uptime Achieved",
      description: "Implemented multi-cloud architecture with auto-scaling, reducing infrastructure costs by 40%.",
      metrics: { uptime: "99.99%", cost: "-40%", time: "3 months" }
    },
    {
      title: "Fashion Brand Delhi",
      client: "Boutique Style India",
      result: "450% Increase in Online Sales",
      description: "Implemented AI-powered size recommendations and virtual try-on, reducing returns by 60%.",
      metrics: { sales: "+450%", returns: "-60%", time: "4 months" }
    },
    {
      title: "Engineering College Chennai",
      client: "Tech University Chennai",
      result: "96% Placement Rate Achieved",
      description: "AI-powered candidate matching increased placement rate from 78% to 96%.",
      metrics: { placement: "96%", salary: "+40%", time: "6 months" }
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
            Case Studies
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed">
            Real-world success stories showing how our solutions transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="h-full bg-white rounded-2xl border border-[#4d7cf5]/30 p-8 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Building className="w-5 h-5 text-[#4d7cf5]" />
                  <span className="text-sm font-semibold text-[#4a5060]">{study.client}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1c1f26] mb-2">{study.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-[#4d7cf5]" />
                  <span className="text-sm font-bold text-[#4d7cf5]">{study.result}</span>
                </div>
                <p className="text-[#4a5060] mb-6 leading-relaxed">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#4d7cf5]/20">
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.leads || study.metrics.uptime || study.metrics.sales || study.metrics.placement}</p>
                    <p className="text-xs text-[#4a5060]">Growth</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.conversion || study.metrics.cost || study.metrics.returns || study.metrics.salary}</p>
                    <p className="text-xs text-[#4a5060]">Impact</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#4d7cf5]">{study.metrics.time}</p>
                    <p className="text-xs text-[#4a5060]">Timeline</p>
                  </div>
                </div>
              </div>
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
