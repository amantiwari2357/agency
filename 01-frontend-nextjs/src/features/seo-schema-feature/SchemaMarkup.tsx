"use client";

import React from "react";

interface SchemaMarkupProps {
  countryCode?: string;
  pageType?: "landing" | "service";
}

export default function SchemaMarkup({ countryCode = "us", pageType = "landing" }: SchemaMarkupProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AEX Feature-Driven Tech Agency",
    "url": `https://aex-agency.com/${countryCode}`,
    "logo": "https://aex-agency.com/logo.png",
    "image": "https://aex-agency.com/og-image.jpg",
    "description": "High-performance technical SEO, micro-frontend architecture & React Native solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": countryCode.toUpperCase(),
    },
    "priceRange": "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
