import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import ServicesFeature from "@/features/services-grid-feature";
import RealEstateFeature from "@/features/real-estate-feature";
import EcommerceApparelFeature from "@/features/ecommerce-apparel-feature";
import CloudServicesFeature from "@/features/cloud-services-feature";
import HiringPlacementsFeature from "@/features/hiring-placements-feature";
import MarketingAutomationFeature from "@/features/marketing-automation-feature";
import BusinessSolutionsFeature from "@/features/business-solutions-feature";
import DynamicPricingFeature from "@/features/dynamic-pricing-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import CountryHeroSection from "@/components/page-sections/CountryHeroSection";
import CountryStatsSection from "@/components/page-sections/CountryStatsSection";
import ServicesOverviewSection from "@/components/page-sections/ServicesOverviewSection";
import TrustSection from "@/components/page-sections/TrustSection";
import CTASection from "@/components/page-sections/CTASection";
import InsightsToggle from "@/components/insights/InsightsToggle";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function CountryLandingPage({ params }: PageProps) {
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
      <SchemaMarkup countryCode={countryCode} />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <CountryHeroSection countryCode={countryCode} />
        <CountryStatsSection />
        <ServicesOverviewSection countryCode={countryCode} />
        <TrustSection />
        
        {/* Dedicated Industry Features */}
        <RealEstateFeature />
        <EcommerceApparelFeature />
        <CloudServicesFeature />
        <HiringPlacementsFeature />
        <MarketingAutomationFeature />
        <ServicesFeature />
        <BusinessSolutionsFeature />
        <DynamicPricingFeature countryCode={countryCode} />
        <LeadCaptureFeature />
        <CTASection countryCode={countryCode} />
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
