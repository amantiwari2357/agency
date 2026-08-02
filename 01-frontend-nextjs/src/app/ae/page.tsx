import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CountryHomeDesktop from "@/components/countries/CountryHomeDesktop";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import InsightsToggle from "@/components/insights/InsightsToggle";

export const metadata: Metadata = {
  title: "AEX Agency United Arab Emirates | Digital Solutions & Services",
  description: "Leading digital agency in United Arab Emirates providing web development, mobile apps, SEO, cloud services, and digital marketing solutions. Pricing in AED.",
  alternates: {
    canonical: "https://aexagency.com/ae",
  },
  openGraph: {
    title: "AEX Agency United Arab Emirates | Digital Solutions & Services",
    description: "Leading digital agency in United Arab Emirates providing web development, mobile apps, SEO, cloud services, and digital marketing solutions.",
    url: "https://aexagency.com/ae",
  },
};

export default function AELandingPage() {
  const countryCode = "ae";
  const countryName = "United Arab Emirates";
  const currency = "AED";
  const currencySymbol = "د.إ";

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
