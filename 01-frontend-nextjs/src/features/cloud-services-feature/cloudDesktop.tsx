"use client";

import React, { useState } from "react";
import { Server, Cloud, Shield, Activity, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CloudDesktop() {
  const [region, setRegion] = useState<string>("us-east");
  const [ram, setRam] = useState<number>(32);

  const estimatedCost = Math.round(ram * 4.5 + (region === "us-east" ? 20 : 35));

  return (
    <section className="py-12 my-6 theme-card p-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full border border-cyan-500/30">
            Cloud & SaaS Architecture
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3">
            Managed Cloud Infrastructure & Server SLAs
          </h2>
        </div>
        <div className="flex items-center text-emerald-400 font-bold text-xs bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-800">
          <Activity className="w-4 h-4 mr-1.5 animate-pulse" /> 99.99% Network Uptime Guaranteed
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Cloud Telemetry Status */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-300 flex items-center">
                <Server className="w-4 h-4 text-cyan-400 mr-2" /> Node cluster US-East-1
              </span>
              <span className="text-xs text-emerald-400 font-bold">ACTIVE (12ms)</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[94%]" />
            </div>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-300 flex items-center">
                <Cloud className="w-4 h-4 text-indigo-400 mr-2" /> Edge Cache EU-West-2
              </span>
              <span className="text-xs text-emerald-400 font-bold">ACTIVE (18ms)</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
              <div className="bg-cyan-500 h-full w-[98%]" />
            </div>
          </div>
        </div>

        {/* Right Column: Cloud Cost Configurator */}
        <div className="lg:col-span-6 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="font-bold text-lg text-white">Cloud Server Estimator</h3>
          
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Datacenter Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white"
            >
              <option value="us-east">US East (N. Virginia)</option>
              <option value="eu-west">EU West (London)</option>
              <option value="ap-south">AE Middle East (Dubai)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">RAM Capacity: {ram} GB</label>
            <input
              type="range"
              min="8"
              max="256"
              step="8"
              value={ram}
              onChange={(e) => setRam(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="text-xs text-slate-400 block">Est. Cloud Monthly Cost</span>
            <span className="text-3xl font-black text-cyan-400">${estimatedCost} / mo</span>
          </div>

          <Button variant="primary" size="md" className="w-full">
            Provision Dedicated Cloud Stack
          </Button>
        </div>
      </div>
    </section>
  );
}
