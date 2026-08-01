"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import CallToActionBannerDesktop from "./CallToActionBannerDesktop";
import CallToActionBannerMobile from "./CallToActionBannerMobile";

export default function CTABanner() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <CallToActionBannerMobile /> : <CallToActionBannerDesktop />;
}
