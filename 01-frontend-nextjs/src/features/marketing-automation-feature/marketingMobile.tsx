"use client";

import React from "react";
import { MessageSquare, Mail, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function MarketingMobile() {
  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest theme-badge px-3 py-1 rounded-full">
          Marketing Automation View
        </span>
        <h2 className="text-xl font-bold text-white mt-2">Broadcast Suite</h2>
      </div>

      <div className="theme-card p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center space-x-2 text-emerald-400">
          <MessageSquare className="w-5 h-5" />
          <span className="font-bold text-sm text-white">WhatsApp & Email Blast</span>
        </div>
        <p className="text-xs text-slate-400">Automated SEO bookmarking & multi-channel lead outreach.</p>
        <Button variant="primary" size="sm" className="w-full text-xs">
          Trigger Mobile Broadcast
        </Button>
      </div>
    </section>
  );
}
