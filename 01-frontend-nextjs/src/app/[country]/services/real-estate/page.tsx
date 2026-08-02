import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import RealEstateFeature from "@/features/real-estate-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import RealEstateFeaturesSection from "@/components/page-sections/RealEstateFeaturesSection";
import HowItWorksSection from "@/components/page-sections/HowItWorksSection";
import CaseStudiesSection from "@/components/page-sections/CaseStudiesSection";
import TestimonialsSection from "@/components/page-sections/TestimonialsSection";
import FAQSection from "@/components/page-sections/FAQSection";
import ServiceCTASection from "@/components/page-sections/ServiceCTASection";
import InsightsToggle from "@/components/insights/InsightsToggle";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function RealEstateServicePage({ params }: PageProps) {
  const { country } = await params;
  const countryCode = country || "us";
  
  const countryData: Record<string, { name: string; currency: string; currencySymbol: string }> = {
    us: { name: "United States", currency: "USD", currencySymbol: "$" },
    uk: { name: "United Kingdom", currency: "GBP", currencySymbol: "£" },
    ae: { name: "United Arab Emirates", currency: "AED", currencySymbol: "د.إ" },
    in: { name: "India", currency: "INR", currencySymbol: "₹" },
  };
  
  const currentCountry = countryData[countryCode] || countryData.us;

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
        <RealEstateFeaturesSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQSection />
        <ServiceCTASection countryCode={countryCode} />
        <LeadCaptureFeature />
      </main>

      <AdvancedFooter 
        countryCode={countryCode}
        countryName={currentCountry.name}
        currency={currentCountry.currency}
        currencySymbol={currentCountry.currencySymbol}
      />

      <InsightsToggle />
    </>
  );
}
