import React from "react";
import { MessageSquare, Mail, Bookmark, Shield } from "lucide-react";

export function MarketingFooter() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-10 px-4 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-sm mb-3">AEX Omnichannel Broadcast Suite</h4>
          <p className="text-slate-400 leading-relaxed">
            WhatsApp Business API, Email Sequences, and High DA SEO Social Bookmarking Engine.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Compliance & Privacy</h5>
          <ul className="space-y-1 text-slate-400">
            <li>CAN-SPAM Act Compliant</li>
            <li>Meta Official WhatsApp API Partner</li>
            <li>Opt-Out & Unsubscribe Management</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Delivery SLA</h5>
          <p className="text-slate-400">99.2% Message Delivery Rate</p>
          <p className="text-slate-400">Instant SEO Indexing Webhook</p>
        </div>
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Shield className="w-6 h-6 text-emerald-400 mb-1" />
          <span className="text-white font-bold block">Anti-SPAM Verified</span>
          <span className="text-[11px] text-slate-400">Meta & Google Approved</span>
        </div>
      </div>
    </footer>
  );
}
