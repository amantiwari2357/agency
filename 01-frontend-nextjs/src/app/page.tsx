import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CountryHomeDesktop from "@/components/countries/CountryHomeDesktop";
import CountryHomeMobile from "@/components/countries/CountryHomeMobile";
import InsightsToggle from "@/components/insights/InsightsToggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEX Agency | Global Digital Solutions Agency",
  description: "Leading digital agency providing web development, mobile apps, SEO, cloud services, and digital marketing solutions across 24+ countries.",
  alternates: {
    canonical: "https://aexagency.com/",
  },
  openGraph: {
    title: "AEX Agency | Global Digital Solutions Agency",
    description: "Leading digital agency providing web development, mobile apps, SEO, cloud services, and digital marketing solutions across 24+ countries.",
    url: "https://aexagency.com/",
  },
};

export default function HomePage() {
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
