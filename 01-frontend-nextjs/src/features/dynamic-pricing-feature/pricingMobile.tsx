"use client";

import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePricingCalculator } from "./usePricingCalculator";

interface PricingMobileProps {
  countryCode: string;
}

export default function PricingMobile({ countryCode }: PricingMobileProps) {
  const { plans, billingCycle, setBillingCycle, calculatePrice, symbol, currencyCode } =
    usePricingCalculator(countryCode);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("pro");

  const activePlan = plans.find((p) => p.id === selectedPlanId) || plans[1];
  const activePrice = calculatePrice(activePlan.baseUsdPrice);

  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
          Mobile Pricing Cards ({currencyCode})
        </span>
        <h2 className="text-xl font-bold text-white mt-2">Dynamic Rates</h2>
      </div>

      {/* Plan Selector Pills */}
      <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 mb-6">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelectedPlanId(plan.id)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
              selectedPlanId === plan.id
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400"
            }`}
          >
            {plan.name.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Active Card */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 relative">
        {activePlan.popular && (
          <div className="inline-flex items-center text-[10px] font-extrabold uppercase bg-blue-600 text-white px-2.5 py-0.5 rounded-full mb-3">
            <Sparkles className="w-3 h-3 mr-1" /> Recommended
          </div>
        )}

        <h3 className="text-lg font-bold text-white">{activePlan.name}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-extrabold text-white">
            {symbol}{activePrice.toLocaleString()}
          </span>
          <span className="text-slate-400 text-xs ml-1.5">/ mo</span>
        </div>

        <div className="mt-4 space-y-2 pt-4 border-t border-slate-800">
          {activePlan.features.map((feat, idx) => (
            <div key={idx} className="flex items-center text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-cyan-400 mr-2 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <Button variant="primary" size="sm" className="w-full mt-5">
          Get Started Now
        </Button>
      </div>
    </section>
  );
}
