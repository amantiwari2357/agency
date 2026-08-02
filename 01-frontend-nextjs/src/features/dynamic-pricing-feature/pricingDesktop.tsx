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
    <section className="py-12 bg-white rounded-3xl border border-[#4d7cf5]/30 p-8 shadow-xl shadow-[#4d7cf5]/10">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider bg-[#4d7cf5]/10 text-[#4d7cf5] px-3 py-1 rounded-full border border-[#4d7cf5]/30">
          Desktop Region-Aware Matrix ({currencyCode})
        </span>
        <h2 className="text-3xl font-extrabold text-[#1c1f26] mt-3">
          Transparent Regional Pricing
        </h2>
        <p className="text-[#4a5060] text-sm mt-2">
          Automatic currency localized rates for US, UK, and UAE markets.
        </p>

        {/* Billing Switcher */}
        <div className="mt-6 inline-flex items-center p-1 bg-[#eef0f4] border border-[#4d7cf5]/20 rounded-2xl">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              billingCycle === "monthly"
                ? "bg-[#4d7cf5] text-white shadow-md"
                : "text-[#4a5060] hover:text-[#1c1f26]"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center ${
              billingCycle === "annual"
                ? "bg-[#4d7cf5] text-white shadow-md"
                : "text-[#4a5060] hover:text-[#1c1f26]"
            }`}
          >
            Annual Billing
            <span className="ml-1.5 bg-[#4d7cf5] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
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
              className={`relative bg-[#eef0f4] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#4d7cf5] shadow-2xl shadow-[#4d7cf5]/20 scale-105 z-10"
                  : "border border-[#4d7cf5]/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#1c1f26]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-[#4d7cf5] tracking-tight">
                    {symbol}{finalPrice.toLocaleString()}
                  </span>
                  <span className="text-[#4a5060] text-xs ml-2">/ month</span>
                </div>

                <div className="mt-6 space-y-3 pt-6 border-t border-[#4d7cf5]/20">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-[#4a5060]">
                      <Check className="w-4 h-4 text-[#4d7cf5] mr-2.5 flex-shrink-0 mt-0.5" />
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
