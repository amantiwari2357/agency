"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import ApparelDesktop from "./apparelDesktop";
import ApparelMobile from "./apparelMobile";

export default function EcommerceApparelFeature() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <ApparelMobile /> : <ApparelDesktop />;
}
