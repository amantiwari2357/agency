"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import PlacementsDesktop from "./placementsDesktop";
import PlacementsMobile from "./placementsMobile";

export default function HiringPlacementsFeature() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <PlacementsMobile /> : <PlacementsDesktop />;
}
