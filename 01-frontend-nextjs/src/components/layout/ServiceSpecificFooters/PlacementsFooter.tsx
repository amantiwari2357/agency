import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function PlacementsFooter() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-10 px-4 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-sm mb-3">AEX Campus Recruitment Hub</h4>
          <p className="text-slate-400 leading-relaxed">
            Connecting university placement cells directly with Fortune 500 tech hiring partners.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Accreditations</h5>
          <ul className="space-y-1 text-slate-400">
            <li>NAAC Grade A++ Integration</li>
            <li>AICTE Placement Portal Standard</li>
            <li>Global Alumni Network Registry</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-2">Campus Cell Hotline</h5>
          <p className="text-slate-400">Email: campus@aex-agency.com</p>
          <p className="text-slate-400">Hotline: +1 (800) 555-HIRE</p>
        </div>
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <Award className="w-6 h-6 text-indigo-400 mb-1" />
          <span className="text-white font-bold block">14,800+ Placements</span>
          <span className="text-[11px] text-slate-400">Verified Recruiter Record</span>
        </div>
      </div>
    </footer>
  );
}
