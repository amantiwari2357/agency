import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import SuccessStoryBanner from "@/components/advertisements/SuccessStoryBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AEX Agency United States",
  description: "Read AEX Agency's terms of service. Understand your rights and responsibilities when using our services.",
  alternates: {
    canonical: "https://aexagency.com/us/terms",
  },
  openGraph: {
    title: "Terms of Service | AEX Agency United States",
    description: "Read AEX Agency's terms of service. Understand your rights and responsibilities.",
    url: "https://aexagency.com/us/terms",
  },
};

export default function USTermsPage() {
  const countryCode = "us";
  const countryName = "United States";
  const currency = "USD";
  const currencySymbol = "$";

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="landing" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1c1f26] mb-8">Terms of Service</h1>

        <SuccessStoryBanner
          countryCode={countryCode}
          countryName={countryName}
          type="company"
          serviceType="company"
        />
        
        <div className="prose prose-lg max-w-none text-[#4a5060] space-y-6">
          <p className="text-sm text-[#4a5060]">Last updated: August 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using AEX Agency's services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">2. Services</h2>
            <p>We provide various digital services including cloud infrastructure, marketing automation, SEO optimization, and recruitment solutions. Specific service terms may apply to individual services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">3. User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">4. Payment Terms</h2>
            <p>Payment for services is due as specified in your service agreement. Late payments may incur interest charges. All prices are in the currency specified in your agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">5. Limitation of Liability</h2>
            <p>AEX Agency shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">6. Contact Us</h2>
            <p>For questions about these Terms of Service, please contact us at legal@aexagency.com</p>
          </section>
        </div>
      </main>

      <AdvancedFooter 
        countryCode={countryCode}
        countryName={countryName}
        currency={currency}
        currencySymbol={currencySymbol}
      />
    </>
  );
}
