

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";`nimport SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";
import SchemaMarkup from "@/features/seo-schema-feature";
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Clock, Activity } from 'lucide-react';

export default function AEStatusPage() {
  const countryCode = "ae";
  const countryName = "United Arab Emirates";
  const currency = "AED";
  const currencySymbol = "د.إ";

  const services = [
    { name: "Cloud Infrastructure", status: "operational", uptime: "99.99%" },
    { name: "Marketing Automation", status: "operational", uptime: "99.95%" },
    { name: "Technical SEO", status: "operational", uptime: "99.98%" },
    { name: "Campus Recruitment", status: "operational", uptime: "99.97%" },
    { name: "E-Commerce Solutions", status: "operational", uptime: "99.96%" },
    { name: "Real Estate Tech", status: "operational", uptime: "99.94%" },
  ];

  const incidents = [
    {
      date: "August 1, 2026",
      title: "Cloud Infrastructure - Latency Issues",
      status: "Resolved",
      description: "Experienced increased latency in UAE region. Issue resolved within 30 minutes."
    },
    {
      date: "July 28, 2026",
      title: "Marketing Automation - API Degradation",
      status: "Resolved",
      description: "WhatsApp Business API experienced temporary degradation. Service restored within 1 hour."
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "down":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-500";
      case "degraded":
        return "text-yellow-500";
      case "down":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="landing" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Activity className="w-8 h-8 text-green-500" />
            <h1 className="text-5xl md:text-6xl font-bold text-[#1c1f26]">
              System Status
            </h1>
          </div>
          <p className="text-xl text-[#4a5060] max-w-2xl mx-auto leading-relaxed">
            Real-time status of all AEX Agency services and systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-[#4d7cf5]/30 p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#1c1f26]">All Systems Operational</h2>
            <span className="text-sm text-[#4a5060]">Last updated: Just now</span>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#eef0f4] rounded-xl">
                <div className="flex items-center gap-3">
                  {getStatusIcon(service.status)}
                  <span className="font-semibold text-[#1c1f26]">{service.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className={`text-sm font-semibold ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>
                  <span className="text-sm text-[#4a5060]">{service.uptime} uptime</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-[#4d7cf5]/30 p-8"
        >
          <h2 className="text-2xl font-bold text-[#1c1f26] mb-6">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="border-b border-[#4d7cf5]/20 pb-6 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#4a5060]">{incident.date}</span>
                  <span className="text-sm font-semibold text-green-500">{incident.status}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1c1f26] mb-2">{incident.title}</h3>
                <p className="text-[#4a5060]">{incident.description}</p>
              </div>
            ))}
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
