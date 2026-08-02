import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import HiringPlacementsFeature from "@/features/hiring-placements-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import PlacementsFeaturesSection from "@/components/page-sections/PlacementsFeaturesSection";
import PlacementsHowItWorksSection from "@/components/page-sections/PlacementsHowItWorksSection";
import PlacementsCaseStudiesSection from "@/components/page-sections/PlacementsCaseStudiesSection";
import PlacementsTestimonialsSection from "@/components/page-sections/PlacementsTestimonialsSection";
import PlacementsFAQSection from "@/components/page-sections/PlacementsFAQSection";
import ServiceCTASection from "@/components/page-sections/ServiceCTASection";
import InsightsToggle from "@/components/insights/InsightsToggle";

export default function USPlacementsServicePage() {
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
          iconName="GraduationCap"
          badge="Dedicated Service Portal: Campus Hiring Engine"
          title="Campus Recruitment & HR Placements Portal"
          description={`Powering HR teams and recruitment agencies across ${countryName} with automated campus hiring workflows, AI-powered candidate matching, and integrated placement tracking systems. Pricing in ${currencySymbol}.`}
        />

        <HiringPlacementsFeature />
        <PlacementsFeaturesSection />
        <PlacementsHowItWorksSection />
        <PlacementsCaseStudiesSection />
        <PlacementsTestimonialsSection />
        <PlacementsFAQSection />
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
