import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CountryHomeDesktop from "@/components/countries/CountryHomeDesktop";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import InsightsToggle from "@/components/insights/InsightsToggle";

export const metadata: Metadata = {
  title: "AEX Agency United Kingdom | Digital Solutions & Services",
  description: "Leading digital agency in United Kingdom providing web development, mobile apps, SEO, cloud services, and digital marketing solutions. Pricing in GBP.",
  alternates: {
    canonical: "https://aexagency.com/uk",
  },
  openGraph: {
    title: "AEX Agency United Kingdom | Digital Solutions & Services",
    description: "Leading digital agency in United Kingdom providing web development, mobile apps, SEO, cloud services, and digital marketing solutions.",
    url: "https://aexagency.com/uk",
  },
};

export default function UKLandingPage() {
  const countryCode = "uk";
  const countryName = "United Kingdom";
  const currency = "GBP";
  const currencySymbol = "£";

  return (
    <>
      <Header currentCountry={countryCode} />

      <main className="flex-1">
        <CountryHomeDesktop 
          countryCode={countryCode}
          countryName={countryName}
          currency={currency}
          currencySymbol={currencySymbol}
        />
        <TestimonialsSection 
          countryCode={countryCode}
          countryName={countryName}
        />
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
