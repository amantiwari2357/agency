import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import EcommerceApparelFeature from "@/features/ecommerce-apparel-feature";
import DynamicPricingFeature from "@/features/dynamic-pricing-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import InsightsToggle from "@/components/insights/InsightsToggle";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function EcommerceServicePage({ params }: PageProps) {
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
          iconName="ShoppingBag"
          badge="Dedicated Service Portal: E-Commerce & Retail Apparel"
          title="High-Speed E-Commerce & Variant Storefronts"
          description={`Scalable retail storefronts optimized for regional currencies in ${countryCode.toUpperCase()} with size variant matrices, cart drawers, and instant payment gateway integration.`}
        />

        <EcommerceApparelFeature />
        <DynamicPricingFeature countryCode={countryCode} />
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
