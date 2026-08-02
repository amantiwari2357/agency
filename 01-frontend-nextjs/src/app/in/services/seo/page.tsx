import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SeoSchemaFeature from "@/features/seo-schema-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import InsightsToggle from "@/components/insights/InsightsToggle";`nimport SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";

export const metadata: Metadata = {
  title: "SEO Services Solutions | AEX Agency India",
  description: "Technical SEO & Schema Markup Generation across India. Pricing in INR.",
  alternates: {
    canonical: "https://aexagency.com/in/services/seo",
  },
  openGraph: {
    title: "SEO Services Solutions | AEX Agency India",
    description: "Technical SEO & Schema Markup Generation across India.",
    url: "https://aexagency.com/in/services/seo",
  },
};

export default function INSeoServicePage() {
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
          iconName="Search"
          badge="Dedicated Service Portal: Technical SEO Engine"
          title="Technical SEO & Schema Markup Generation"
          description={`Powering SEO professionals and content teams across ${countryName} with automated schema markup generation, technical SEO audits, and real-time search performance monitoring. Pricing in ${currencySymbol}.`}
        />

        
        <SuccessStoryBanner
          countryCode={countryCode}
          countryName={countryName}
          type="service"
          serviceType="seo"
        />

        <SeoSchemaFeature />
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
