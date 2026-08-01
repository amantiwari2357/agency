"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import TechnologyStackSectionDesktop from "./TechnologyStackSectionDesktop";
import TechnologyStackSectionMobile from "./TechnologyStackSectionMobile";

export default function TechStackSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <TechnologyStackSectionMobile /> : <TechnologyStackSectionDesktop />;
}
