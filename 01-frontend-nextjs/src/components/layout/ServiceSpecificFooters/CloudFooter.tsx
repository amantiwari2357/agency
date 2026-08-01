import React from "react";
import { Server, ShieldCheck, Activity } from "lucide-react";

export function CloudFooter() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-10 px-4 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-sm mb-3">AEX Managed Cloud SLAs</h4>
          <p className="text-slate-400 leading-relaxed">
            High-performance edge compute clusters with automated failover and 99.99% uptime guarantees.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Compliance Standards</h5>
          <ul className="space-y-1 text-slate-400">
            <li>SOC 2 Type II Certified</li>
            <li>ISO 27001 Security Standard</li>
            <li>GDPR & HIPAA Compliant Data Vaults</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Live Status</h5>
          <p className="flex items-center text-emerald-400 font-bold"><Activity className="w-3.5 h-3.5 mr-1" /> All Systems Operational (12ms)</p>
        </div>
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <ShieldCheck className="w-6 h-6 text-cyan-400 mb-1" />
          <span className="text-white font-bold block">Enterprise SLA 99.99%</span>
          <span className="text-[11px] text-slate-400">Financial Credit Guarantee</span>
        </div>
      </div>
    </footer>
  );
}
