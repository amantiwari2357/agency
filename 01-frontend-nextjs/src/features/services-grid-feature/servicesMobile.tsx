"use client";

import React, { useState } from "react";
import { ServiceItem } from "./useServicesData";
import { ChevronDown, ChevronUp, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ServicesMobileProps {
  services: ServiceItem[];
}

export default function ServicesMobile({ services }: ServicesMobileProps) {
  const [openId, setOpenId] = useState<string>(services[0]?.id || "");

  return (
    <section className="py-8">
      <div className="mb-6 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/50 inline-flex items-center">
          <Sparkles className="w-3 h-3 mr-1" /> Mobile Swipe / Accordion View
        </span>
        <h2 className="text-2xl font-bold text-white mt-2">Services Mobile Experience</h2>
        <p className="text-slate-400 text-xs mt-1">Tap card to inspect deliverables</p>
      </div>

      <div className="space-y-3">
        {services.map((service) => {
          const isOpen = openId === service.id;
          return (
            <div
              key={service.id}
              className="glass-card rounded-xl border border-slate-800 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenId(isOpen ? "" : service.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-10 rounded-full bg-gradient-to-b ${service.gradient}`} />
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">{service.title}</h3>
                  </div>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-4 border-t border-slate-800/60 pt-3 animate-fadeIn">
                  <p className="text-slate-300 text-xs leading-relaxed">{service.description}</p>
                  
                  <div className="mt-3 space-y-1.5 bg-slate-950/50 p-3 rounded-lg border border-slate-800/60">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Included:</span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" size="sm" className="w-full mt-3 text-xs">
                    Select Plan
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
