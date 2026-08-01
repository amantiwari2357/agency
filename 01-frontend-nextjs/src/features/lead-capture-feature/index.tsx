"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import LeadFormDesktop from "./leadFormDesktop";
import LeadFormMobile from "./leadFormMobile";

export default function LeadCaptureFeature() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <LeadFormMobile /> : <LeadFormDesktop />;
}
