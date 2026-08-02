import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SeoSchemaFeature from "@/features/seo-schema-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import SEOFeaturesSection from "@/components/page-sections/SEOFeaturesSection";
import SEOHowItWorksSection from "@/components/page-sections/SEOHowItWorksSection";
import SEOCaseStudiesSection from "@/components/page-sections/SEOCaseStudiesSection";
import SEOTestimonialsSection from "@/components/page-sections/SEOTestimonialsSection";
import SEOFAQSection from "@/components/page-sections/SEOFAQSection";
import ServiceCTASection from "@/components/page-sections/ServiceCTASection";
import InsightsToggle from "@/components/insights/InsightsToggle";

export default function USSeoServicePage() {
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
          iconName="Search"
          badge="Dedicated Service Portal: Technical SEO Engine"
          title="Technical SEO & Schema Markup Generation"
          description={`Powering SEO professionals and content teams across ${countryName} with automated schema markup generation, technical SEO audits, and real-time search performance monitoring. Pricing in ${currencySymbol}.`}
        />

        <SeoSchemaFeature />
        <SEOFeaturesSection />
        <SEOHowItWorksSection />
        <SEOCaseStudiesSection />
        <SEOTestimonialsSection />
        <SEOFAQSection />
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
