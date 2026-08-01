"use client";

import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import CountryHomeDesktop from "@/components/countries/CountryHomeDesktop";
import CountryHomeMobile from "@/components/countries/CountryHomeMobile";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function AELandingPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const countryCode = "ae";
  const countryName = "United Arab Emirates";
  const currency = "AED";
  const currencySymbol = "د.إ";

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
