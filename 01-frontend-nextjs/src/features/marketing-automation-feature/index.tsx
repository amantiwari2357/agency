"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import MarketingDesktop from "./marketingDesktop";
import MarketingMobile from "./marketingMobile";

export default function MarketingAutomationFeature() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <MarketingMobile /> : <MarketingDesktop />;
}
