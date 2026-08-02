"use client";

import React, { useState } from "react";
import { Store, Library, Building2, ShoppingCart, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const solutions = [
  {
    id: "shops",
    title: "Retail & Local Shops",
    icon: <Store className="w-5 h-5" />,
    badge: "E-Commerce & Local SEO",
    description: "Designed for local businesses and multi-outlet retail chains seeking hyper-local Google maps ranking & digital catalog checkout.",
    features: ["Google Maps Local 3-Pack Optimization", "Instant POS & WhatsApp Ordering", "Inventory Sync with Web Catalog"],
  },
  {
    id: "libraries",
    title: "Libraries & Educational Hubs",
    icon: <Library className="w-5 h-5" />,
    badge: "Digital Cataloging & Archival",
    description: "Tailored indexing systems for libraries, schools, and academic archives needing high-speed search schemas.",
    features: ["OPAC Catalog Schema Integration", "Student/Member Portal Access", "Digital Book Reservation & Search"],
  },
  {
    id: "enterprises",
    title: "B2B Enterprises & IT Firms",
    icon: <Building2 className="w-5 h-5" />,
    badge: "High-Ticket Lead Generation",
    description: "Enterprise landing systems with real-time lead capture, CRM webhooks, and automated consultation scheduling.",
    features: ["HubSpot/Salesforce API Webhooks", "Multi-country Geo-IP Targeting", "GDPR & HIPAA Compliant Security"],
  },
];

export default function SolutionsDesktop() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section className="py-12 my-6 bg-white rounded-3xl border border-[#4d7cf5]/30 p-8 shadow-xl shadow-[#4d7cf5]/10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider bg-[#4d7cf5]/10 text-[#4d7cf5] px-3 py-1 rounded-full border border-[#4d7cf5]/30">
          Desktop Tabbed Interactive Feature
        </span>
        <h2 className="text-3xl font-extrabold text-[#1c1f26] mt-3">
          Specialized Business Solutions
        </h2>
        <p className="text-[#4a5060] text-sm mt-2">
          Tailored tech architectures built for specific business verticals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Navigation Tabs */}
        <div className="lg:col-span-4 space-y-3">
          {solutions.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                activeTab === item.id
                  ? "bg-[#4d7cf5]/10 border-[#4d7cf5] shadow-lg shadow-[#4d7cf5]/10 text-[#1c1f26]"
                  : "bg-[#eef0f4] border-[#4d7cf5]/20 text-[#4a5060] hover:bg-[#4d7cf5]/5 hover:text-[#1c1f26]"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2.5 rounded-lg ${activeTab === item.id ? "bg-[#4d7cf5] text-white" : "bg-white border border-[#4d7cf5]/20 text-[#4a5060]"}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1c1f26]">{item.title}</h4>
                  <span className="text-[11px] text-[#4a5060] block">{item.badge}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Display Content Box */}
        <div className="lg:col-span-8 bg-[#eef0f4] rounded-2xl p-8 border border-[#4d7cf5]/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-[#4d7cf5] bg-[#4d7cf5]/10 px-3 py-1 rounded-md border border-[#4d7cf5]/30">
              {activeSolution.badge}
            </span>
            <div className="flex items-center text-[#4d7cf5] text-xs font-medium">
              <Zap className="w-4 h-4 mr-1" /> Production Ready
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#1c1f26] mb-3">{activeSolution.title}</h3>
          <p className="text-[#4a5060] text-sm leading-relaxed mb-6">
            {activeSolution.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#4d7cf5]/20">
            {activeSolution.features.map((feat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#4d7cf5]/20">
                <ShieldCheck className="w-5 h-5 text-[#4d7cf5] mb-2" />
                <p className="text-xs font-medium text-[#1c1f26]">{feat}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="accent" size="sm">
              Deploy Solution Model
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
