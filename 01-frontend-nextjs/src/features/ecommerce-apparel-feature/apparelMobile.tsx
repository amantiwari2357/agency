"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ApparelMobile() {
  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full">
          Apparel Mobile View
        </span>
        <h2 className="text-xl font-bold text-white mt-2">Retail Showcase</h2>
      </div>

      <div className="theme-card p-4 rounded-xl border border-slate-800">
        <span className="text-[10px] bg-pink-600 text-white px-2 py-0.5 rounded font-bold">Bestseller</span>
        <h3 className="text-base font-bold text-white mt-2">Performance Tech Blazer</h3>
        <div className="text-lg font-extrabold text-pink-400 mt-1">$280</div>
        <Button variant="accent" size="sm" className="w-full mt-3 text-xs">
          <ShoppingBag className="w-3.5 h-3.5 mr-1" /> Quick Buy Drawer
        </Button>
      </div>
    </section>
  );
}
