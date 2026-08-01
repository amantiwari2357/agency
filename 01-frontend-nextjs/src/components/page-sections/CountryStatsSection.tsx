"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import CountryStatsSectionDesktop from "./CountryStatsSectionDesktop";
import CountryStatsSectionMobile from "./CountryStatsSectionMobile";

export default function CountryStatsSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <CountryStatsSectionMobile /> : <CountryStatsSectionDesktop />;
}
