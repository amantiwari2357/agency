"use client";

import { useState } from "react";

export interface PricingPlan {
  id: string;
  name: string;
  popular?: boolean;
  baseUsdPrice: number;
  features: string[];
}

const defaultPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Growth Starter",
    baseUsdPrice: 499,
    features: ["Local SEO Schema Setup", "Single Location Maps Audit", "Monthly Performance Report", "Standard Support"],
  },
  {
    id: "pro",
    name: "Scale Pro",
    popular: true,
    baseUsdPrice: 1299,
    features: ["Full Technical & On-Page SEO", "5 Multi-location landing pages", "Next.js Custom Component Grid", "24/7 Dedicated Manager", "Weekly API Telemetry"],
  },
  {
    id: "enterprise",
    name: "Enterprise Dominance",
    baseUsdPrice: 2999,
    features: ["Unlimited Country Subdomains", "React Native Mobile App Integration", "Custom Express Server Middlewares", "SLA Guarantee 99.9%", "Dedicated Dev Subagent"],
  },
];

const rates: Record<string, { multiplier: number; symbol: string; code: string }> = {
  us: { multiplier: 1, symbol: "$", code: "USD" },
  uk: { multiplier: 0.79, symbol: "£", code: "GBP" },
  ae: { multiplier: 3.67, symbol: "AED ", code: "AED" },
  in: { multiplier: 83, symbol: "₹", code: "INR" },
};

export function usePricingCalculator(countryCode: string = "us") {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const regionInfo = rates[countryCode.toLowerCase()] || rates.us;

  const calculatePrice = (baseUsd: number) => {
    let price = baseUsd * regionInfo.multiplier;
    if (billingCycle === "annual") {
      price = price * 0.8; // 20% discount
    }
    return Math.round(price);
  };

  return {
    plans: defaultPlans,
    billingCycle,
    setBillingCycle,
    calculatePrice,
    symbol: regionInfo.symbol,
    currencyCode: regionInfo.code,
  };
}
