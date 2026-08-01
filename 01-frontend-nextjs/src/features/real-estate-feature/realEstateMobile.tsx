"use client";

import React from "react";
import { Home, MapPin, Key } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function RealEstateMobile() {
  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full">
          Real Estate Mobile View
        </span>
        <h2 className="text-xl font-bold text-white mt-2">Property Listings</h2>
      </div>

      <div className="space-y-4">
        <div className="theme-card p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-bold">Featured Listing</span>
          <h3 className="text-base font-bold text-white mt-2">Luxurious Glass Villa</h3>
          <p className="text-xs text-slate-400 flex items-center mt-1">
            <MapPin className="w-3.5 h-3.5 mr-1 text-blue-400" /> Beverly Hills / Palm Jumeirah
          </p>
          <div className="text-xl font-extrabold text-blue-400 mt-2">$4,250,000</div>
          <Button variant="primary" size="sm" className="w-full mt-3 text-xs">
            Contact Agent on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
