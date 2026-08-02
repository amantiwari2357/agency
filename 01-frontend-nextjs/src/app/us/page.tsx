import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CountryHomeDesktop from "@/components/countries/CountryHomeDesktop";
import CountryHomeMobile from "@/components/countries/CountryHomeMobile";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import InsightsToggle from "@/components/insights/InsightsToggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEX Agency United States | Digital Solutions & Services",
  description: "Leading digital agency in United States providing web development, mobile apps, SEO, cloud services, and digital marketing solutions. Pricing in USD.",
  alternates: {
    canonical: "https://aexagency.com/us",
  },
  openGraph: {
    title: "AEX Agency United States | Digital Solutions & Services",
    description: "Leading digital agency in United States providing web development, mobile apps, SEO, cloud services, and digital marketing solutions.",
    url: "https://aexagency.com/us",
  },
};

export default function USLandingPage() {
  const countryCode = "us";
  const countryName = "United States";
  const currency = "USD";
  const currencySymbol = "$";

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
