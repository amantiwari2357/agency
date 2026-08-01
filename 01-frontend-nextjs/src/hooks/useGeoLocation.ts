"use client";

import { useEffect, useState } from "react";

export type CountryCode = "us" | "uk" | "ae" | "in";
export type LanguageCode = "en" | "ar" | "hi";

export interface GeoInfo {
  country: CountryCode;
  lang: LanguageCode;
  currency: string;
  symbol: string;
  flag: string;
  gateways: string[];
  taxName: string;
  taxRatePct: number;
  dir: "ltr" | "rtl";
  loading: boolean;
}

export function useGeoLocation(initialCountry?: string, initialLang?: string): GeoInfo {
  const [geo, setGeo] = useState<GeoInfo>({
    country: (initialCountry as CountryCode) || "us",
    lang: (initialLang as LanguageCode) || "en",
    currency: "USD",
    symbol: "$",
    flag: "🇺🇸",
    gateways: ["Stripe", "Apple Pay", "Google Pay"],
    taxName: "State Sales Tax",
    taxRatePct: 7.5,
    dir: "ltr",
    loading: true,
  });

  useEffect(() => {
    const code = (initialCountry || "us").toLowerCase() as CountryCode;
    const l = (initialLang || "en").toLowerCase() as LanguageCode;

    switch (code) {
      case "uk":
        setGeo({
          country: "uk",
          lang: "en",
          currency: "GBP",
          symbol: "£",
          flag: "🇬🇧",
          gateways: ["Stripe", "Klarna BNPL", "Apple Pay"],
          taxName: "UK VAT",
          taxRatePct: 20,
          dir: "ltr",
          loading: false,
        });
        break;

      case "ae":
        setGeo({
          country: "ae",
          lang: l === "ar" ? "ar" : "en",
          currency: "AED",
          symbol: "AED ",
          flag: "🇦🇪",
          gateways: ["Tabby BNPL", "Tamara BNPL", "Network Intl"],
          taxName: "UAE VAT",
          taxRatePct: 5,
          dir: l === "ar" ? "rtl" : "ltr",
          loading: false,
        });
        break;

      case "in":
        setGeo({
          country: "in",
          lang: l === "hi" ? "hi" : "en",
          currency: "INR",
          symbol: "₹",
          flag: "🇮🇳",
          gateways: ["UPI (PhonePe/GPay)", "Paytm", "Razorpay"],
          taxName: "India GST",
          taxRatePct: 18,
          dir: "ltr",
          loading: false,
        });
        break;

      case "us":
      default:
        setGeo({
          country: "us",
          lang: "en",
          currency: "USD",
          symbol: "$",
          flag: "🇺🇸",
          gateways: ["Stripe", "Apple Pay", "Google Pay"],
          taxName: "State Sales Tax",
          taxRatePct: 7.5,
          dir: "ltr",
          loading: false,
        });
        break;
    }
  }, [initialCountry, initialLang]);

  return geo;
}
