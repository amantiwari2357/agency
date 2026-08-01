"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import ServiceOfferingsSectionDesktop from "./ServiceOfferingsSectionDesktop";
import ServiceOfferingsSectionMobile from "./ServiceOfferingsSectionMobile";

export default function ServicesSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <ServiceOfferingsSectionMobile /> : <ServiceOfferingsSectionDesktop />;
}
