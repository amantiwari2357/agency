import React from "react";
import Header from "@/components/layout/NavigationHeader";
import { MarketingFooter } from "@/components/layout/ServiceSpecificFooters/MarketingFooter";
import MarketingAutomationFeature from "@/features/marketing-automation-feature";
import DynamicPricingFeature from "@/features/dynamic-pricing-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function MarketingServicePage({ params }: PageProps) {
  const { country } = await params;
  const countryCode = country || "us";

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="service" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <ServiceBackLink countryCode={countryCode} />

        <ServiceHeroSection
          iconName="MessageSquare"
          badge="Dedicated Service Portal: Marketing & SEO Bookmarking Suite"
          title="WhatsApp API, Email Sequences & SEO Indexer"
          description="Multi-channel campaign triggers supporting WhatsApp Business API broadcasts, cold email drip sequences, and high DA SEO social bookmarking."
        />

        <MarketingAutomationFeature />
        <DynamicPricingFeature countryCode={countryCode} />
      </main>

      <MarketingFooter />
    </>
  );
}
