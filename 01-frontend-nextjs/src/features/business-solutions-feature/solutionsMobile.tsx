"use client";

import React, { useState } from "react";
import { Store, Library, Building2, ChevronDown, ChevronUp, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const solutions = [
  {
    id: "shops",
    title: "Retail & Local Shops",
    icon: <Store className="w-5 h-5 text-blue-400" />,
    description: "Designed for local businesses seeking hyper-local Google maps ranking & digital catalog checkout.",
    features: ["Google Maps Local 3-Pack Optimization", "Instant POS & WhatsApp Ordering", "Inventory Sync with Web Catalog"],
  },
  {
    id: "libraries",
    title: "Libraries & Educational Hubs",
    icon: <Library className="w-5 h-5 text-indigo-400" />,
    description: "Tailored indexing systems for libraries and academic archives needing high-speed search schemas.",
    features: ["OPAC Catalog Schema Integration", "Student/Member Portal Access", "Digital Book Reservation & Search"],
  },
  {
    id: "enterprises",
    title: "B2B Enterprises & IT Firms",
    icon: <Building2 className="w-5 h-5 text-purple-400" />,
    description: "Enterprise landing systems with real-time lead capture, CRM webhooks, and automated consultation scheduling.",
    features: ["HubSpot/Salesforce API Webhooks", "Multi-country Geo-IP Targeting", "GDPR & HIPAA Compliant Security"],
  },
];

export default function SolutionsMobile() {
  const [expandedId, setExpandedId] = useState<string>("shops");

  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/50">
          Mobile Compact View
        </span>
        <h2 className="text-xl font-bold text-white mt-2">Vertical Solutions</h2>
      </div>

      <div className="space-y-3">
        {solutions.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div key={item.id} className="glass-card rounded-xl border border-slate-800 p-4">
              <button
                onClick={() => setExpandedId(isExpanded ? "" : item.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-slate-800 animate-fadeIn">
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{item.description}</p>
                  <div className="space-y-2 mb-4">
                    {item.features.map((f, idx) => (
                      <div key={idx} className="flex items-center text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-purple-400 mr-2 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Get Custom Quote
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
