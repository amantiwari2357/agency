import React from "react";
import Header from "@/components/layout/NavigationHeader";
import { RealEstateFooter } from "@/components/layout/ServiceSpecificFooters/RealEstateFooter";
import RealEstateFeature from "@/features/real-estate-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function RealEstateServicePage({ params }: PageProps) {
  const { country } = await params;
  const countryCode = country || "us";

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
          description={`Powering real estate brokerages and property developers across ${countryCode.toUpperCase()} with high-speed IDX feeds, automated mortgage calculators, and WhatsApp agent booking integration.`}
        />

        <RealEstateFeature />
        <LeadCaptureFeature />
      </main>

      <RealEstateFooter />
    </>
  );
}
