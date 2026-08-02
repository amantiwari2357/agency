import { Metadata } from "next";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CountryHomeDesktop from "@/components/countries/CountryHomeDesktop";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import InsightsToggle from "@/components/insights/InsightsToggle";

export const metadata: Metadata = {
  title: "AEX Agency India | Digital Solutions & Services",
  description: "Leading digital agency in India providing web development, mobile apps, SEO, cloud services, and digital marketing solutions. Pricing in INR.",
  alternates: {
    canonical: "https://aexagency.com/in",
  },
  openGraph: {
    title: "AEX Agency India | Digital Solutions & Services",
    description: "Leading digital agency in India providing web development, mobile apps, SEO, cloud services, and digital marketing solutions.",
    url: "https://aexagency.com/in",
  },
};

export default function INLandingPage() {
  const countryCode = "in";
  const countryName = "India";
  const currency = "INR";
  const currencySymbol = "₹";

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
