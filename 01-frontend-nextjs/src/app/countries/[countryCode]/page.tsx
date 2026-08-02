import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import { getCountryByCode } from "../../../config/countries";
import { notFound } from "next/navigation";
import Link from "next/link";
import InsightsToggle from "@/components/insights/InsightsToggle";

interface PageProps {
  params: Promise<{ countryCode: string }>;
}

export default async function CountryDetailPage({ params }: PageProps) {
  const { countryCode } = await params;
  const country = getCountryByCode(countryCode);
  
  const countryData: Record<string, { name: string; currency: string; currencySymbol: string }> = {
    us: { name: "United States", currency: "USD", currencySymbol: "$" },
    uk: { name: "United Kingdom", currency: "GBP", currencySymbol: "£" },
    ae: { name: "United Arab Emirates", currency: "AED", currencySymbol: "د.إ" },
    in: { name: "India", currency: "INR", currencySymbol: "₹" },
  };
  
  const currentCountry = countryData[countryCode] || countryData.us;

  if (!country) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/countries"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Countries
        </Link>

        {/* Country Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <span className="text-8xl mr-6">{country.flag}</span>
            <div>
              <h1 className="text-5xl font-bold mb-2">{country.name}</h1>
              <p className="text-xl opacity-90">{country.region}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">Currency</span>
              <p className="font-semibold">{country.currency}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">Language</span>
              <p className="font-semibold">{country.language}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">Timezone</span>
              <p className="font-semibold">{country.timezone}</p>
            </div>
            {country.trending && (
              <div className="bg-yellow-400 text-yellow-900 rounded-lg px-4 py-2">
                <span className="text-sm font-semibold">🔥 Trending</span>
              </div>
            )}
          </div>
        </div>

        {/* Country-Specific Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Services Available in {country.name}</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-lg text-gray-700 mb-4">
              Explore our comprehensive range of services tailored specifically for the {country.name} market:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href={`/${country.code}/services/real-estate`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-600">Real Estate</h3>
                <p className="text-sm text-gray-600">Property solutions</p>
              </Link>
              <Link href={`/${country.code}/services/ecommerce`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-600">E-Commerce</h3>
                <p className="text-sm text-gray-600">Online retail solutions</p>
              </Link>
              <Link href={`/${country.code}/services/cloud`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-600">Cloud Services</h3>
                <p className="text-sm text-gray-600">Infrastructure & hosting</p>
              </Link>
              <Link href={`/${country.code}/services/placements`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-600">Placements</h3>
                <p className="text-sm text-gray-600">HR & staffing</p>
              </Link>
              <Link href={`/${country.code}/services/marketing`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-600">Marketing</h3>
                <p className="text-sm text-gray-600">Digital marketing</p>
              </Link>
              <Link href={`/${country.code}/services/seo`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-600">SEO Services</h3>
                <p className="text-sm text-gray-600">Search optimization</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Local Landing Page Link */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Visit {country.name} Landing Page</h2>
            <p className="text-gray-700 mb-6">
              Access the full localized experience with country-specific pricing, content, and features.
            </p>
            <Link 
              href={`/${country.code}`}
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Go to {country.name} Homepage
            </Link>
          </div>
        </section>
      </main>

      <AdvancedFooter 
        countryCode={countryCode}
        countryName={currentCountry.name}
        currency={currentCountry.currency}
        currencySymbol={currentCountry.currencySymbol}
      />

      <InsightsToggle />
    </div>
  );
}
