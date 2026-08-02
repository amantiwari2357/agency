"use client";

import React, { useState } from "react";
import { Server, Cloud, Shield, Activity, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CloudDesktop() {
  const [region, setRegion] = useState<string>("us-east");
  const [ram, setRam] = useState<number>(32);

  const estimatedCost = Math.round(ram * 4.5 + (region === "us-east" ? 20 : 35));

  return (
    <section className="py-12 my-6 bg-white rounded-3xl border border-[#4d7cf5]/30 p-8 shadow-xl shadow-[#4d7cf5]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider bg-[#4d7cf5]/10 text-[#4d7cf5] px-3 py-1 rounded-full border border-[#4d7cf5]/30">
            Cloud & SaaS Architecture
          </span>
          <h2 className="text-3xl font-extrabold text-[#1c1f26] mt-3">
            Managed Cloud Infrastructure & Server SLAs
          </h2>
        </div>
        <div className="flex items-center text-[#4d7cf5] font-bold text-xs bg-[#4d7cf5]/10 px-3 py-1.5 rounded-full border border-[#4d7cf5]/30">
          <Activity className="w-4 h-4 mr-1.5 animate-pulse" /> 99.99% Network Uptime Guaranteed
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Cloud Telemetry Status */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#eef0f4] p-5 rounded-2xl border border-[#4d7cf5]/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#4a5060] flex items-center">
                <Server className="w-4 h-4 text-[#4d7cf5] mr-2" /> Node cluster US-East-1
              </span>
              <span className="text-xs text-[#4d7cf5] font-bold">ACTIVE (12ms)</span>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-[#4d7cf5] h-full w-[94%]" />
            </div>
          </div>

          <div className="bg-[#eef0f4] p-5 rounded-2xl border border-[#4d7cf5]/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#4a5060] flex items-center">
                <Cloud className="w-4 h-4 text-[#4d7cf5] mr-2" /> Edge Cache EU-West-2
              </span>
              <span className="text-xs text-[#4d7cf5] font-bold">ACTIVE (18ms)</span>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-[#4d7cf5] h-full w-[98%]" />
            </div>
          </div>
        </div>

        {/* Right Column: Cloud Cost Configurator */}
        <div className="lg:col-span-6 bg-[#eef0f4] p-6 rounded-2xl border border-[#4d7cf5]/20 space-y-4">
          <h3 className="font-bold text-lg text-[#1c1f26]">Cloud Server Estimator</h3>
          
          <div>
            <label className="block text-xs font-semibold text-[#4a5060] mb-1">Datacenter Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-white border border-[#4d7cf5]/20 rounded-xl px-4 py-2 text-sm text-[#1c1f26]"
            >
              <option value="us-east">US East (N. Virginia)</option>
              <option value="eu-west">EU West (London)</option>
              <option value="ap-south">AE Middle East (Dubai)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4a5060] mb-1">RAM Capacity: {ram} GB</label>
            <input
              type="range"
              min="8"
              max="256"
              step="8"
              value={ram}
              onChange={(e) => setRam(Number(e.target.value))}
              className="w-full accent-[#4d7cf5]"
            />
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#4d7cf5]/20 text-center">
            <span className="text-xs text-[#4a5060] block">Est. Cloud Monthly Cost</span>
            <span className="text-3xl font-black text-[#4d7cf5]">${estimatedCost} / mo</span>
          </div>

          <Button variant="primary" size="md" className="w-full">
            Provision Dedicated Cloud Stack
          </Button>
        </div>
      </div>
    </section>
  );
}
