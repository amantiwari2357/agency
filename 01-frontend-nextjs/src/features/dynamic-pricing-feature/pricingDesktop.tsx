"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePricingCalculator } from "./usePricingCalculator";

interface PricingDesktopProps {
  countryCode: string;
}

export default function PricingDesktop({ countryCode }: PricingDesktopProps) {
  const { plans, billingCycle, setBillingCycle, calculatePrice, symbol, currencyCode } =
    usePricingCalculator(countryCode);

  return (
    <section className="py-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
          Desktop Region-Aware Matrix ({currencyCode})
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-3">
          Transparent Regional Pricing
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Automatic currency localized rates for US, UK, and UAE markets.
        </p>

        {/* Billing Switcher */}
        <div className="mt-6 inline-flex items-center p-1 bg-slate-900 border border-slate-800 rounded-2xl">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              billingCycle === "monthly"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center ${
              billingCycle === "annual"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Annual Billing
            <span className="ml-1.5 bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => {
          const finalPrice = calculatePrice(plan.baseUsdPrice);
          return (
            <div
              key={plan.id}
              className={`relative glass-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-blue-500/80 shadow-2xl shadow-blue-500/20 scale-105 z-10"
                  : "border border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {symbol}{finalPrice.toLocaleString()}
                  </span>
                  <span className="text-slate-400 text-xs ml-2">/ month</span>
                </div>

                <div className="mt-6 space-y-3 pt-6 border-t border-slate-800">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 mr-2.5 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                >
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
