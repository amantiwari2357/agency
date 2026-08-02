"use client";

import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CountryHomeDesktop from "@/components/countries/CountryHomeDesktop";
import CountryHomeMobile from "@/components/countries/CountryHomeMobile";
import InsightsToggle from "@/components/insights/InsightsToggle";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function INLandingPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const countryCode = "in";
  const countryName = "India";
  const currency = "INR";
  const currencySymbol = "₹";

  return (
    <>
      <Header currentCountry={countryCode} />

      <main className="flex-1">
        {isMobile ? (
          <CountryHomeMobile 
            countryCode={countryCode}
            countryName={countryName}
            currency={currency}
            currencySymbol={currencySymbol}
          />
        ) : (
          <CountryHomeDesktop 
            countryCode={countryCode}
            countryName={countryName}
            currency={currency}
            currencySymbol={currencySymbol}
          />
        )}
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
