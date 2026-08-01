"use client";

import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CountryHomeDesktop from "@/components/countries/CountryHomeDesktop";
import CountryHomeMobile from "@/components/countries/CountryHomeMobile";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function UKLandingPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const countryCode = "uk";
  const countryName = "United Kingdom";
  const currency = "GBP";
  const currencySymbol = "£";

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
    </>
  );
}
