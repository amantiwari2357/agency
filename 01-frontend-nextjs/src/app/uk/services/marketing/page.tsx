import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import MarketingAutomationFeature from "@/features/marketing-automation-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import MarketingFeaturesSection from "@/components/page-sections/MarketingFeaturesSection";
import MarketingHowItWorksSection from "@/components/page-sections/MarketingHowItWorksSection";
import MarketingCaseStudiesSection from "@/components/page-sections/MarketingCaseStudiesSection";
import MarketingTestimonialsSection from "@/components/page-sections/MarketingTestimonialsSection";
import MarketingFAQSection from "@/components/page-sections/MarketingFAQSection";
import ServiceCTASection from "@/components/page-sections/ServiceCTASection";
import InsightsToggle from "@/components/insights/InsightsToggle";`nimport SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";

export const metadata: Metadata = {
  title: "Digital Marketing Solutions | AEX Agency United Kingdom",
  description: "Digital Marketing & WhatsApp Business Integration across United Kingdom. Pricing in GBP.",
  alternates: {
    canonical: "https://aexagency.com/uk/services/marketing",
  },
  openGraph: {
    title: "Digital Marketing Solutions | AEX Agency United Kingdom",
    description: "Digital Marketing & WhatsApp Business Integration across United Kingdom.",
    url: "https://aexagency.com/uk/services/marketing",
  },
};

export default function UKMarketingServicePage() {
  const countryCode = "uk";
  const countryName = "United Kingdom";
  const currency = "GBP";
  const currencySymbol = "£";

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
          countryCode={$countryCode}
          countryName={$countryName}
          type="service"
          serviceType="marketing"
        />

        <MarketingAutomationFeature />
        <MarketingFeaturesSection />
        <MarketingHowItWorksSection />
        <MarketingCaseStudiesSection />
        <MarketingTestimonialsSection />
        <MarketingFAQSection />
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
