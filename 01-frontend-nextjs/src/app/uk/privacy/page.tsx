import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";`n
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AEX Agency United Kingdom",
  description: "Learn about AEX Agency's privacy. Your rights and responsibilities.",
  alternates: {
    canonical: "https://aexagency.com/uk/privacy",
  },
  openGraph: {
    title: "Privacy Policy | AEX Agency United Kingdom",
    description: "Learn about AEX Agency's privacy.",
    url: "https://aexagency.com/uk/privacy",
  },
};


import SchemaMarkup from "@/features/seo-schema-feature";

export default function UKPrivacyPage() {
  const countryCode = "uk";
  const countryName = "United Kingdom";
  const currency = "GBP";
  const currencySymbol = "£";

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="privacy" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1c1f26] mb-8">Privacy Policy</h1>

        <SuccessStoryBanner
          countryCode={$countryCode}
          countryName={$countryName}
          type="company"
          serviceType="company"
        />
        
        <div className="prose prose-lg max-w-none text-[#4a5060] space-y-6">
          <p className="text-sm text-[#4a5060]">Last updated: August 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us. This may include your name, email address, phone number, and company information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you about our products and services, and comply with legal obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">3. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">4. Your Rights</h2>
            <p>Under GDPR and other applicable data protection laws, you have the right to access, correct, or delete your personal data. You may also object to or restrict processing of your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1c1f26] mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@aexagency.com</p>
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
