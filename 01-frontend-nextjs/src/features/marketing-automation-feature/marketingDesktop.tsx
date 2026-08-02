"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Bookmark, Send, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function MarketingDesktop() {
  const [activeChannel, setActiveChannel] = useState<"whatsapp" | "email" | "bookmark">("whatsapp");
  const [targetCount, setTargetCount] = useState<number>(5000);
  const [sent, setSent] = useState<boolean>(false);

  const handleTrigger = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-12 my-6 bg-white rounded-3xl border border-[#4d7cf5]/30 p-8 shadow-xl shadow-[#4d7cf5]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider bg-[#4d7cf5]/10 text-[#4d7cf5] px-3 py-1 rounded-full border border-[#4d7cf5]/30">
            SEO & Marketing Automation Suite
          </span>
          <h2 className="text-3xl font-extrabold text-[#1c1f26] mt-3">
            WhatsApp, Email & SEO Bookmarking Engine
          </h2>
        </div>
        <p className="text-[#4a5060] text-sm max-w-md mt-2 md:mt-0">
          Automated multi-channel broadcast triggers with real-time delivery telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Channel Selection Buttons */}
        <div className="lg:col-span-4 space-y-3">
          <button
            onClick={() => setActiveChannel("whatsapp")}
            className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
              activeChannel === "whatsapp"
                ? "bg-[#4d7cf5]/10 border-[#4d7cf5] text-[#1c1f26]"
                : "bg-[#eef0f4] border-[#4d7cf5]/20 text-[#4a5060] hover:text-[#1c1f26]"
            }`}
          >
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-[#4d7cf5]" />
              <div className="text-left">
                <h4 className="font-bold text-sm text-[#1c1f26]">WhatsApp API Broadcast</h4>
                <span className="text-[11px] text-[#4a5060] block">98% Open Rate Direct Messaging</span>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveChannel("email")}
            className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
              activeChannel === "email"
                ? "bg-[#4d7cf5]/10 border-[#4d7cf5] text-[#1c1f26]"
                : "bg-[#eef0f4] border-[#4d7cf5]/20 text-[#4a5060] hover:text-[#1c1f26]"
            }`}
          >
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#4d7cf5]" />
              <div className="text-left">
                <h4 className="font-bold text-sm text-[#1c1f26]">Automated Email Sequences</h4>
                <span className="text-[11px] text-[#4a5060] block">Drip Campaigns & Cold Outreach</span>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveChannel("bookmark")}
            className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
              activeChannel === "bookmark"
                ? "bg-[#4d7cf5]/10 border-[#4d7cf5] text-[#1c1f26]"
                : "bg-[#eef0f4] border-[#4d7cf5]/20 text-[#4a5060] hover:text-[#1c1f26]"
            }`}
          >
            <div className="flex items-center space-x-3">
              <Bookmark className="w-5 h-5 text-[#4d7cf5]" />
              <div className="text-left">
                <h4 className="font-bold text-sm text-[#1c1f26]">SEO Social Bookmarking</h4>
                <span className="text-[11px] text-[#4a5060] block">High DA Backlink Indexer</span>
              </div>
            </div>
          </button>
        </div>

        {/* Campaign Blast Trigger Box */}
        <div className="lg:col-span-8 bg-[#eef0f4] p-8 rounded-2xl border border-[#4d7cf5]/20 space-y-4">
          <h3 className="font-bold text-xl text-[#1c1f26]">
            Campaign Blast Simulator: {activeChannel.toUpperCase()}
          </h3>

          <div>
            <label className="block text-xs font-semibold text-[#4a5060] mb-1">
              Target Leads / Backlinks: {targetCount.toLocaleString()}
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={targetCount}
              onChange={(e) => setTargetCount(Number(e.target.value))}
              className="w-full accent-[#4d7cf5]"
            />
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#4d7cf5]/20 flex items-center justify-between">
            <span className="text-xs text-[#4a5060]">Est. Reach Rate</span>
            <span className="text-xl font-bold text-[#4d7cf5]">99.2% Delivered</span>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleTrigger}
          >
            {sent ? (
              <span className="flex items-center text-[#1c1f26] font-bold">
                <CheckCircle2 className="w-5 h-5 mr-2 text-[#4d7cf5]" /> Campaign Executed Successfully!
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" /> Dispatch {activeChannel.toUpperCase()} Campaign
              </span>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
