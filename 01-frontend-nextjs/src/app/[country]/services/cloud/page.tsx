import React from "react";
import Header from "@/components/layout/NavigationHeader";
import { CloudFooter } from "@/components/layout/ServiceSpecificFooters/CloudFooter";
import CloudServicesFeature from "@/features/cloud-services-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function CloudServicePage({ params }: PageProps) {
  const { country } = await params;
  const countryCode = country || "us";

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

      <CloudFooter />
    </>
  );
}
