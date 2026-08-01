import React from "react";
import Header from "@/components/layout/NavigationHeader";
import { PlacementsFooter } from "@/components/layout/ServiceSpecificFooters/PlacementsFooter";
import HiringPlacementsFeature from "@/features/hiring-placements-feature";
import LeadCaptureFeature from "@/features/lead-capture-feature";
import SchemaMarkup from "@/features/seo-schema-feature";
import ServiceBackLink from "@/components/page-sections/ServiceBackLink";
import ServiceHeroSection from "@/components/page-sections/ServiceHeroSection";

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function PlacementsServicePage({ params }: PageProps) {
  const { country } = await params;
  const countryCode = country || "us";

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="service" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <ServiceBackLink countryCode={countryCode} />

        <ServiceHeroSection
          iconName="GraduationCap"
          badge="Dedicated Service Portal: Campus Placements & Recruitment"
          title="University Placement Cells & Recruiter Portals"
          description={`Automated candidate indexing connecting 14,800+ graduating students across ${countryCode.toUpperCase()} directly with 650+ enterprise tech recruiters.`}
        />

        <HiringPlacementsFeature />
        <LeadCaptureFeature />
      </main>

      <PlacementsFooter />
    </>
  );
}
