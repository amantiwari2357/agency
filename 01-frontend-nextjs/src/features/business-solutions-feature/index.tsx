"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import SolutionsDesktop from "./solutionsDesktop";
import SolutionsMobile from "./solutionsMobile";

export default function BusinessSolutionsFeature() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <SolutionsMobile /> : <SolutionsDesktop />;
}
