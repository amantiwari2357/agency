"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import RealEstateDesktop from "./realEstateDesktop";
import RealEstateMobile from "./realEstateMobile";

export default function RealEstateFeature() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <RealEstateMobile /> : <RealEstateDesktop />;
}
