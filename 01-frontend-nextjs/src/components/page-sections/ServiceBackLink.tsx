"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import ServiceBackLinkDesktop from "./ServiceBackLinkDesktop";
import ServiceBackLinkMobile from "./ServiceBackLinkMobile";

interface ServiceBackLinkProps {
  countryCode: string;
}

export default function ServiceBackLink(props: ServiceBackLinkProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <ServiceBackLinkMobile {...props} /> : <ServiceBackLinkDesktop {...props} />;
}
