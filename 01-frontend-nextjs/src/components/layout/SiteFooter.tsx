"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import SiteFooterDesktop from "./SiteFooterDesktop";
import SiteFooterMobile from "./SiteFooterMobile";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <SiteFooterMobile /> : <SiteFooterDesktop />;
}
