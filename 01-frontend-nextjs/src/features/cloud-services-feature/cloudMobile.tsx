"use client";

import React from "react";
import { Server, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CloudMobile() {
  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full">
          Cloud Mobile Status
        </span>
        <h2 className="text-xl font-bold text-white mt-2">Server Telemetry</h2>
      </div>

      <div className="theme-card p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center">
            <Server className="w-4 h-4 text-cyan-400 mr-2" /> Global Cluster
          </span>
          <span className="text-xs text-emerald-400 font-bold">99.99% OK</span>
        </div>
        <Button variant="primary" size="sm" className="w-full text-xs">
          Deploy Cloud Worker
        </Button>
      </div>
    </section>
  );
}
