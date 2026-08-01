import React from "react";
import Header from "@/components/layout/NavigationHeader";
import Footer from "@/components/layout/SiteFooter";
import DynamicPricingFeature from "@/features/dynamic-pricing-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function SeoServicePage({ params }: PageProps) {
  const { country } = await params;
  const countryCode = country || "us";

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="service" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <ServiceBackLink countryCode={countryCode} />

        <ServiceHeroSection
          iconName="Search"
          badge="Dedicated Feature Page: SEO Optimization"
          title="Enterprise Technical SEO & Speed Engineering"
          description={`Boost organic visibility in regional search results across ${countryCode.toUpperCase()}. Featuring automated Schema markup, JSON-LD structured data, and Core Web Vitals optimization.`}
          features={[
            { title: "JSON-LD Injection", description: "Automatic structured schemas for local search indexers." },
            { title: "Adaptive Desktop/Mobile", description: "Lightweight carousels for mobile, full grid for desktop." },
            { title: "Geo-IP Pricing", description: "Regional pricing auto-converted to local currencies." }
          ]}
        />

        <DynamicPricingFeature countryCode={countryCode} />
        <LeadCaptureFeature />
      </main>

      <Footer />
    </>
  );
}
