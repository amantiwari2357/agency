"use client";

import React, { useState } from "react";
import { Home, Compass, Key, Building, MapPin, Calculator, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const properties = [
  {
    id: "prop-1",
    title: "Luxurious Glass Villa",
    location: "Beverly Hills / Palm Jumeirah",
    price: "$4,250,000",
    specs: "5 Beds • 6 Baths • 6,500 sqft",
    badge: "Virtual 3D Tour",
  },
  {
    id: "prop-2",
    title: "Skyline Penthouse Suites",
    location: "Downtown Commercial District",
    price: "$1,890,000",
    specs: "3 Beds • 3 Baths • 3,200 sqft",
    badge: "High ROI Yield",
  },
  {
    id: "prop-3",
    title: "Eco Smart Tech Residence",
    location: "Suburban Innovation Hub",
    price: "$950,000",
    specs: "4 Beds • 3 Baths • 2,800 sqft",
    badge: "Solar & Automation",
  },
];

export default function RealEstateDesktop() {
  const [propertyPrice, setPropertyPrice] = useState<number>(1000000);
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20);

  const loanAmount = propertyPrice * (1 - downPaymentPct / 100);
  const estimatedMonthly = Math.round((loanAmount * 0.06) / 12);

  return (
    <section className="py-12 my-6 theme-card p-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full border border-blue-500/30">
            Real Estate Solution Feature
          </span>
          <h2 className="text-3xl font-extrabold mt-3">
            Real Estate Digital Engine & Virtual Property Portals
          </h2>
        </div>
        <p className="text-sm opacity-80 max-w-md mt-2 md:mt-0">
          MLS integration, virtual 3D tour rendering, and automated mortgage calculation for brokers and developers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 8 Cols: Property Showcase */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {properties.map((p) => (
            <div key={p.id} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-blue-500 transition-colors">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-900/80 text-blue-300 px-2.5 py-0.5 rounded-full">
                  {p.badge}
                </span>
                <h3 className="font-bold text-lg text-white mt-3">{p.title}</h3>
                <p className="text-xs text-slate-400 flex items-center mt-1">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-blue-400" /> {p.location}
                </p>
                <div className="mt-4 text-xl font-extrabold text-blue-400">{p.price}</div>
                <p className="text-[11px] text-slate-300 mt-1">{p.specs}</p>
              </div>

              <Button variant="primary" size="sm" className="mt-5 text-xs">
                Schedule Virtual Tour
              </Button>
            </div>
          ))}
        </div>

        {/* Right 4 Cols: Mortgage & ROI Calculator */}
        <div className="lg:col-span-4 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="font-bold text-lg flex items-center text-white">
            <Calculator className="w-5 h-5 text-blue-400 mr-2" /> Live Mortgage Calculator
          </h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Property Value: ${propertyPrice.toLocaleString()}
            </label>
            <input
              type="range"
              min="200000"
              max="5000000"
              step="50000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
            <span className="text-xs text-slate-400 block">Est. Monthly Payment</span>
            <span className="text-3xl font-black text-emerald-400">${estimatedMonthly.toLocaleString()}/mo</span>
            <span className="text-[10px] text-slate-400 block mt-1">Based on 6% APR over 30 yrs</span>
          </div>

          <Button variant="accent" size="sm" className="w-full text-xs">
            Generate Buyer Brochure
          </Button>
        </div>
      </div>
    </section>
  );
}
