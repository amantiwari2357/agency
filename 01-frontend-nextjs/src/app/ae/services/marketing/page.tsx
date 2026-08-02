import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import MarketingAutomationFeature from "@/features/marketing-automation-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import InsightsToggle from "@/components/insights/InsightsToggle";`nimport SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";

export const metadata: Metadata = {
  title: "Digital Marketing Solutions | AEX Agency United Arab Emirates",
  description: "Digital Marketing & WhatsApp Business Integration across United Arab Emirates. Pricing in AED.",
  alternates: {
    canonical: "https://aexagency.com/ae/services/marketing",
  },
  openGraph: {
    title: "Digital Marketing Solutions | AEX Agency United Arab Emirates",
    description: "Digital Marketing & WhatsApp Business Integration across United Arab Emirates.",
    url: "https://aexagency.com/ae/services/marketing",
  },
};

export default function AEMarketingServicePage() {
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
          iconName="MessageSquare"
          badge="Dedicated Service Portal: Marketing Automation Engine"
          title="Digital Marketing & WhatsApp Business Integration"
          description={`Powering marketing teams and agencies across ${countryName} with automated campaign management, WhatsApp Business API integration, and real-time analytics dashboards. Pricing in ${currencySymbol}.`}
        />

        
        <SuccessStoryBanner
          countryCode={countryCode}
          countryName={countryName}
          type="service"
          serviceType="marketing"
        />

        <MarketingAutomationFeature />
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
