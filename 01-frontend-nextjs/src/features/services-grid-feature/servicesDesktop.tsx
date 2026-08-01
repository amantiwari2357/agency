"use client";

import React from "react";
import { ServiceItem } from "./useServicesData";
import { Search, Code, Smartphone, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ServicesDesktopProps {
  services: ServiceItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6 text-blue-400" />,
  Code: <Code className="w-6 h-6 text-indigo-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-purple-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
};

export default function ServicesDesktop({ services }: ServicesDesktopProps) {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
            Desktop 4-Column Grid View
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3">
            Our High-Performance Digital Solutions
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0">
          Engineered with micro-services and component isolation to deliver maximum ROI for shops, libraries, & enterprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 flex flex-col justify-between"
          >
            <div className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-5 shadow-inner">
                {iconMap[service.iconName] || <Code className="w-6 h-6 text-blue-400" />}
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {service.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-between group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                <span>Explore Feature</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
