import React from "react";
import Header from "@/components/layout/NavigationHeader";
import Footer from "@/components/layout/SiteFooter";
import { COUNTRIES, getTrendingCountries, getCountriesByRegion, getAllRegions } from "../../config/countries";
import { LocationCountryGrid as CountryGrid } from "../../components/location";

export default function CountriesPage() {
  const trendingCountries = getTrendingCountries();
  const regions = getAllRegions();

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Global Presence</h1>
          <p className="text-xl text-gray-600">Select your country to discover tailored services and solutions</p>
        </div>

        {/* Trending Countries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="mr-3">🔥</span> Trending Countries
          </h2>
          <CountryGrid 
            countries={trendingCountries} 
            variant="featured"
            columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          />
        </section>

        {/* Countries by Region */}
        {regions.map((region) => (
          <section key={region} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{region}</h2>
            <CountryGrid 
              countries={getCountriesByRegion(region)} 
              variant="default"
              columns={{ mobile: 1, tablet: 2, desktop: 4 }}
            />
          </section>
        ))}

        {/* All Countries Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">All Countries</h2>
          <CountryGrid 
            countries={COUNTRIES} 
            variant="compact"
            columns={{ mobile: 2, tablet: 4, desktop: 6 }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
