"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import HeaderDesktop from "./NavigationHeaderDesktop";
import HeaderMobile from "./NavigationHeaderMobile";

interface HeaderProps {
  currentCountry?: string;
}

export default function Header({ currentCountry = "us" }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <HeaderMobile currentCountry={currentCountry} /> : <HeaderDesktop currentCountry={currentCountry} />;
}
