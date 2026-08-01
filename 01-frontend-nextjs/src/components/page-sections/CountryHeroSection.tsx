"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import CountryHeroSectionDesktop from "./CountryHeroSectionDesktop";
import CountryHeroSectionMobile from "./CountryHeroSectionMobile";

interface CountryHeroSectionProps {
  countryCode: string;
}

export default function CountryHeroSection(props: CountryHeroSectionProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <CountryHeroSectionMobile {...props} /> : <CountryHeroSectionDesktop {...props} />;
}
