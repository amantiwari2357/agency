import React from "react";
import { ShieldCheck, MapPin, Phone, Mail } from "lucide-react";

export function RealEstateFooter() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-10 px-4 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-sm mb-3">AEX Real Estate Engine</h4>
          <p className="text-slate-400 leading-relaxed">
            Authorized MLS & IDX Property Indexer powering residential and commercial brokerages worldwide.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">MLS Licensing & Compliance</h5>
          <ul className="space-y-1 text-slate-400">
            <li>Equal Housing Opportunity</li>
            <li>NAR Registered IDX Provider</li>
            <li>Virtual 3D Tour Disclaimers</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Broker Support</h5>
          <p className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-blue-400" /> Beverly Hills / Dubai Offices</p>
          <p className="flex items-center mt-1"><Phone className="w-3.5 h-3.5 mr-1 text-blue-400" /> +1 (800) 555-REAL</p>
        </div>
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <ShieldCheck className="w-6 h-6 text-emerald-400 mb-1" />
          <span className="text-white font-bold block">Verified IDX License</span>
          <span className="text-[11px] text-slate-400">MLS ID #94820-AEX</span>
        </div>
      </div>
    </footer>
  );
}
