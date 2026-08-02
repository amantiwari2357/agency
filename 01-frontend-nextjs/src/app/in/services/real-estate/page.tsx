import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import RealEstateFeature from "@/features/real-estate-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import InsightsToggle from "@/components/insights/InsightsToggle";
import SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";

export const metadata: Metadata = {
  title: "Real Estate Technology Solutions | AEX Agency India",
  description: "MLS Property Portals & Virtual 3D Tour Engines across India. Pricing in INR.",
  alternates: {
    canonical: "https://aexagency.com/in/services/real-estate",
  },
  openGraph: {
    title: "Real Estate Technology Solutions | AEX Agency India",
    description: "MLS Property Portals & Virtual 3D Tour Engines across India.",
    url: "https://aexagency.com/in/services/real-estate",
  },
};

export default function INRealEstateServicePage() {
  const countryCode = "in";
  const countryName = "India";
  const currency = "INR";
  const currencySymbol = "₹";

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="service" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <ServiceBackLink countryCode={countryCode} />

        <ServiceHeroSection
          iconName="Home"
          badge="Dedicated Service Portal: Real Estate Tech Engine"
          title="MLS Property Portals & Virtual 3D Tour Engines"
          description={`Powering real estate brokerages and property developers across ${countryName} with high-speed IDX feeds, automated mortgage calculators, and WhatsApp agent booking integration. Pricing in ${currencySymbol}.`}
        />


        <SuccessStoryBanner
          countryCode={countryCode}
          countryName={countryName}
          type="service"
          serviceType="real-estate"
        />

        <RealEstateFeature />
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
