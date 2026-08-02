import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CloudServicesFeature from "@/features/cloud-services-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import CloudFeaturesSection from "@/components/page-sections/CloudFeaturesSection";
import CloudHowItWorksSection from "@/components/page-sections/CloudHowItWorksSection";
import CloudCaseStudiesSection from "@/components/page-sections/CloudCaseStudiesSection";
import CloudTestimonialsSection from "@/components/page-sections/CloudTestimonialsSection";
import CloudFAQSection from "@/components/page-sections/CloudFAQSection";
import ServiceCTASection from "@/components/page-sections/ServiceCTASection";
import InsightsToggle from "@/components/insights/InsightsToggle";
import SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";

export const metadata: Metadata = {
  title: "Cloud Infrastructure Solutions | AEX Agency United States",
  description: "Cloud Infrastructure & DevOps Automation across United States. Pricing in USD.",
  alternates: {
    canonical: "https://aexagency.com/us/services/cloud",
  },
  openGraph: {
    title: "Cloud Infrastructure Solutions | AEX Agency United States",
    description: "Cloud Infrastructure & DevOps Automation across United States.",
    url: "https://aexagency.com/us/services/cloud",
  },
};

export default function USCloudServicePage() {
  const countryCode = "us";
  const countryName = "United States";
  const currency = "USD";
  const currencySymbol = "$";

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
        <CloudFeaturesSection />
        <CloudHowItWorksSection />
        <CloudCaseStudiesSection />
        <CloudTestimonialsSection />
        <CloudFAQSection />
        <ServiceCTASection countryCode={countryCode} />
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
