"use client";

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import { motion } from 'framer-motion';
import { Code, CheckCircle, Copy } from 'lucide-react';

export default function INAPIReferencePage() {
  const countryCode = "in";
  const countryName = "India";
  const currency = "INR";
  const currencySymbol = "₹";

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/properties",
      description: "Retrieve all properties with optional filters",
      response: "Property[]"
    },
    {
      method: "POST",
      path: "/api/v1/properties",
      description: "Create a new property listing",
      response: "Property"
    },
    {
      method: "GET",
      path: "/api/v1/candidates",
      description: "Retrieve candidate profiles with matching scores",
      response: "Candidate[]"
    },
    {
      method: "POST",
      path: "/api/v1/campaigns",
      description: "Create and launch marketing campaigns",
      response: "Campaign"
    },
    {
      method: "GET",
      path: "/api/v1/seo/audit",
      description: "Run technical SEO audit on a URL",
      response: "AuditResult"
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
            API Reference
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed">
            Complete API documentation for integrating with our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#eef0f4] rounded-2xl p-8 border border-[#4d7cf5]/20 mb-20"
        >
          <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">Authentication</h2>
          <p className="text-[#4a5060] mb-6">All API requests require an API key in the Authorization header:</p>
          <div className="bg-[#1c1f26] rounded-xl p-4 overflow-x-auto">
            <code className="text-green-400 text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-[#1c1f26] mb-6">Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-xl border border-[#4d7cf5]/30 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-[#1c1f26] font-mono">{endpoint.path}</code>
                </div>
                <p className="text-[#4a5060] mb-2">{endpoint.description}</p>
                <p className="text-sm text-[#4d7cf5]">Response: {endpoint.response}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#4d7cf5] via-[#4366d8] to-[#3660e0] rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Need an API Key?</h2>
          <p className="text-white/90 mb-6">
            Contact our team to get your API key and start integrating with our services.
          </p>
          <a
            href={`/countries/${countryCode}/contact`}
            className="inline-block px-6 py-3 bg-white text-[#4d7cf5] rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Request API Access
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
