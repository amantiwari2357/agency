"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PlacementsMobile() {
  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full">
          Campus Placements View
        </span>
        <h2 className="text-xl font-bold text-white mt-2">Placement Statistics</h2>
      </div>

      <div className="theme-card p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <GraduationCap className="w-8 h-8 text-indigo-400 mx-auto" />
        <h3 className="text-base font-bold text-white">14,800+ Students Placed</h3>
        <p className="text-xs text-slate-400">Direct recruitment with 650+ tech partners.</p>
        <Button variant="primary" size="sm" className="w-full text-xs mt-2">
          Apply as Recruiter
        </Button>
      </div>
    </section>
  );
}
