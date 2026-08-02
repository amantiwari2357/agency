"use client";

import Link from "next/link";
import { BarChart3 } from 'lucide-react';

export default function InsightsToggle() {
  return (
    <Link href="/insights">
      <button className="fixed bottom-24 right-6 z-50 px-4 py-3 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] hover:from-[#3660e0] hover:to-[#4d7cf5] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
        <BarChart3 className="w-5 h-5" />
        View Insights
      </button>
    </Link>
  );
}
