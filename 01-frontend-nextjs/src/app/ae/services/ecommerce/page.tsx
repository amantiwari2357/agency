import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import EcommerceApparelFeature from "@/features/ecommerce-apparel-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import InsightsToggle from "@/components/insights/InsightsToggle";`nimport SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | AEX Agency United Arab Emirates",
  description: "Fashion Retail Platforms & Inventory Management across United Arab Emirates. Pricing in AED.",
  alternates: {
    canonical: "https://aexagency.com/ae/services/ecommerce",
  },
  openGraph: {
    title: "E-Commerce Solutions | AEX Agency United Arab Emirates",
    description: "Fashion Retail Platforms & Inventory Management across United Arab Emirates.",
    url: "https://aexagency.com/ae/services/ecommerce",
  },
};

export default function AEEcommerceServicePage() {
  const countryCode = "ae";
  const countryName = "United Arab Emirates";
  const currency = "AED";
  const currencySymbol = "د.إ";

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="service" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <ServiceBackLink countryCode={countryCode} />

        <ServiceHeroSection
          iconName="ShoppingBag"
          badge="Dedicated Service Portal: E-Commerce Apparel Engine"
          title="Fashion Retail Platforms & Inventory Management"
          description={`Powering fashion retailers and apparel brands across ${countryName} with AI-powered size recommendations, virtual try-on integrations, and multi-channel inventory synchronization. Pricing in ${currencySymbol}.`}
        />

        
        <SuccessStoryBanner
          countryCode={countryCode}
          countryName={countryName}
          type="service"
          serviceType="ecommerce"
        />

        <EcommerceApparelFeature />
        <LeadCaptureFeature />
      </main>

      <AdvancedFooter 
        countryCode={countryCode}
        countryName={countryName}
        currency={currency}
        currencySymbol={currencySymbol}
      />

      <InsightsToggle />
    </>
  );
}
