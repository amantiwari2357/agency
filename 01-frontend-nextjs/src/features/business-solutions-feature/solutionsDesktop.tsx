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
    <section className="py-12 my-6 glass-panel rounded-3xl p-8 border border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/50">
          Desktop Tabbed Interactive Feature
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-3">
          Specialized Business Solutions
        </h2>
        <p className="text-slate-400 text-sm mt-2">
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
                  ? "bg-slate-800 border-purple-500/80 shadow-lg shadow-purple-500/10 text-white"
                  : "bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800/50 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2.5 rounded-lg ${activeTab === item.id ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <span className="text-[11px] text-slate-400 block">{item.badge}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Display Content Box */}
        <div className="lg:col-span-8 glass-card rounded-2xl p-8 border border-purple-900/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-purple-400 bg-purple-950/80 px-3 py-1 rounded-md border border-purple-800">
              {activeSolution.badge}
            </span>
            <div className="flex items-center text-emerald-400 text-xs font-medium">
              <Zap className="w-4 h-4 mr-1" /> Production Ready
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">{activeSolution.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {activeSolution.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            {activeSolution.features.map((feat, idx) => (
              <div key={idx} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-purple-400 mb-2" />
                <p className="text-xs font-medium text-slate-200">{feat}</p>
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
