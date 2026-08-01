"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import LandingHeroSectionDesktop from "./LandingHeroSectionDesktop";
import LandingHeroSectionMobile from "./LandingHeroSectionMobile";

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <LandingHeroSectionMobile /> : <LandingHeroSectionDesktop />;
}
