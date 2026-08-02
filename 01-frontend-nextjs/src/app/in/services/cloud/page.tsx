import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CloudServicesFeature from "@/features/cloud-services-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import InsightsToggle from "@/components/insights/InsightsToggle";`nimport SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";

export const metadata: Metadata = {
  title: "Cloud Infrastructure Solutions | AEX Agency India",
  description: "Cloud Infrastructure & DevOps Automation across India. Pricing in INR.",
  alternates: {
    canonical: "https://aexagency.com/in/services/cloud",
  },
  openGraph: {
    title: "Cloud Infrastructure Solutions | AEX Agency India",
    description: "Cloud Infrastructure & DevOps Automation across India.",
    url: "https://aexagency.com/in/services/cloud",
  },
};

export default function INCloudServicePage() {
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
          iconName="Server"
          badge="Dedicated Service Portal: Cloud Solutions Engine"
          title="Cloud Infrastructure & DevOps Automation"
          description={`Powering startups and enterprises across ${countryName} with scalable cloud architecture, CI/CD pipelines, and multi-region deployment strategies. Pricing in ${currencySymbol}.`}
        />

        
        <SuccessStoryBanner
          countryCode={countryCode}
          countryName={countryName}
          type="service"
          serviceType="cloud"
        />

        <CloudServicesFeature />
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
