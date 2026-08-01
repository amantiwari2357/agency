"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const placementStats = [
  { label: "Students Placed", value: "14,800+" },
  {label: "Hiring Partners", value: "650+" },
  { label: "Highest Package", value: "$180,000" },
  { label: "Avg Placement Rate", value: "96.4%" },
];

export default function PlacementsDesktop() {
  return (
    <section className="py-12 my-6 theme-card p-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full border border-indigo-500/30">
          College Placements & Hiring Portal
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-3">
          Campus Recruitment & Talent Pipeline Engine
        </h2>
        <p className="text-slate-300 text-sm mt-2">
          Automated student resume indexing, recruiter matchmaker, and placement tracking dashboards.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {placementStats.map((stat, idx) => (
          <div key={idx} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 text-center">
            <span className="text-3xl font-black text-indigo-400 block">{stat.value}</span>
            <span className="text-xs font-semibold text-slate-300 block mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-xl text-white flex items-center">
            <GraduationCap className="w-6 h-6 text-indigo-400 mr-2" /> For University Placement Cells
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Integrate our automated candidate portal to connect graduating cohorts directly with enterprise IT firms and Fortune 500 recruiters.
          </p>
        </div>

        <Button variant="accent" size="lg">
          Launch College Portal
        </Button>
      </div>
    </section>
  );
}
