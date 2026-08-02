import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CloudServicesFeature from "@/features/cloud-services-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";
import InsightsToggle from "@/components/insights/InsightsToggle";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function CloudServicePage({ params }: PageProps) {
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
          iconName="Server"
          badge="Dedicated Service Portal: Managed Cloud Infrastructure"
          title="Enterprise Cloud Hosting & Server SLA Guarantee"
          description="Multi-datacenter hosting with edge clusters, 99.99% uptime guarantees, RAM/CPU cost configurators, and real-time network telemetry."
        />

        <CloudServicesFeature />
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
