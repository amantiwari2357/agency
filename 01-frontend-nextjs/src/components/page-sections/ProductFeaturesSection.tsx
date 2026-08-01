"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductFeaturesSectionDesktop from "./ProductFeaturesSectionDesktop";
import ProductFeaturesSectionMobile from "./ProductFeaturesSectionMobile";

export default function FeaturesSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <ProductFeaturesSectionMobile /> : <ProductFeaturesSectionDesktop />;
}
