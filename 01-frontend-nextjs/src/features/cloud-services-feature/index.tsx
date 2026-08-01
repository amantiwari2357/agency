"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import CloudDesktop from "./cloudDesktop";
import CloudMobile from "./cloudMobile";

export default function CloudServicesFeature() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <CloudMobile /> : <CloudDesktop />;
}
