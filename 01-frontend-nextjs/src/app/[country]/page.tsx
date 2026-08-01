import React from "react";
import Header from "@/components/layout/NavigationHeader";
import Footer from "@/components/layout/SiteFooter";
import ServicesFeature from "@/features/services-grid-feature";
import RealEstateFeature from "@/features/real-estate-feature";
import EcommerceApparelFeature from "@/features/ecommerce-apparel-feature";
import CloudServicesFeature from "@/features/cloud-services-feature";
import HiringPlacementsFeature from "@/features/hiring-placements-feature";
import MarketingAutomationFeature from "@/features/marketing-automation-feature";
import BusinessSolutionsFeature from "@/features/business-solutions-feature";
import DynamicPricingFeature from "@/features/dynamic-pricing-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SeoSchemaFeature from "@/features/seo-schema-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import CountryHeroSection from "@/components/page-sections/CountryHeroSection";
import CountryStatsSection from "@/components/page-sections/CountryStatsSection";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function CountryLandingPage({ params }: PageProps) {
  const { country } = await params;
  const countryCode = country || "us";

  return (
    <>
      <SchemaMarkup countryCode={countryCode} />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <CountryHeroSection countryCode={countryCode} />
        <CountryStatsSection />
        
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
      </main>

      <Footer />
    </>
  );
}
