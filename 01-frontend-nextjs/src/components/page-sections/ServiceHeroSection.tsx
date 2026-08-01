"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import ServiceHeroSectionDesktop from "./ServiceHeroSectionDesktop";
import ServiceHeroSectionMobile from "./ServiceHeroSectionMobile";

interface ServiceHeroSectionProps {
  iconName: string;
  badge: string;
  title: string;
  description: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export default function ServiceHeroSection(props: ServiceHeroSectionProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <ServiceHeroSectionMobile {...props} /> : <ServiceHeroSectionDesktop {...props} />;
}
