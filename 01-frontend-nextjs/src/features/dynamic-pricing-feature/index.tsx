"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import PricingDesktop from "./pricingDesktop";
import PricingMobile from "./pricingMobile";

interface DynamicPricingFeatureProps {
  countryCode?: string;
}

export default function DynamicPricingFeature({ countryCode = "us" }: DynamicPricingFeatureProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? (
    <PricingMobile countryCode={countryCode} />
  ) : (
    <PricingDesktop countryCode={countryCode} />
  );
}
