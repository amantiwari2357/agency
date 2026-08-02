import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import EcommerceApparelFeature from "@/features/ecommerce-apparel-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import EcommerceFeaturesSection from "@/components/page-sections/EcommerceFeaturesSection";
import EcommerceHowItWorksSection from "@/components/page-sections/EcommerceHowItWorksSection";
import EcommerceCaseStudiesSection from "@/components/page-sections/EcommerceCaseStudiesSection";
import EcommerceTestimonialsSection from "@/components/page-sections/EcommerceTestimonialsSection";
import EcommerceFAQSection from "@/components/page-sections/EcommerceFAQSection";
import ServiceCTASection from "@/components/page-sections/ServiceCTASection";
import InsightsToggle from "@/components/insights/InsightsToggle";

export default function UKEcommerceServicePage() {
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
          iconName="ShoppingBag"
          badge="Dedicated Service Portal: E-Commerce Apparel Engine"
          title="Fashion Retail Platforms & Inventory Management"
          description={`Powering fashion retailers and apparel brands across ${countryName} with AI-powered size recommendations, virtual try-on integrations, and multi-channel inventory synchronization. Pricing in ${currencySymbol}.`}
        />

        <EcommerceApparelFeature />
        <EcommerceFeaturesSection />
        <EcommerceHowItWorksSection />
        <EcommerceCaseStudiesSection />
        <EcommerceTestimonialsSection />
        <EcommerceFAQSection />
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
