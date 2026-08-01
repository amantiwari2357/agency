"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import CallToActionSectionDesktop from "./CallToActionSectionDesktop";
import CallToActionSectionMobile from "./CallToActionSectionMobile";

export default function CTASection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <CallToActionSectionMobile /> : <CallToActionSectionDesktop />;
}
