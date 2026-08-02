import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import { COUNTRIES, getTrendingCountries, getCountriesByRegion, getAllRegions } from "../config/countries";
import { LocationCountryGrid as CountryGrid } from "../components/location";
import { TrendingUp, BarChart3, DollarSign, Users, Building, ShoppingBag, Zap, Target, Search, GraduationCap, ArrowRight, Globe, Activity, Star, Eye, MousePointer, ShoppingCart, CreditCard, ChevronRight } from 'lucide-react';
import Link from "next/link";
import InsightsToggle from "@/components/insights/InsightsToggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Presence | AEX Agency - Available Countries & Regions",
  description: "AEX Agency operates in 24+ countries including United States, United Kingdom, UAE, India, and more. Find your country for localized digital solutions and services.",
  alternates: {
    canonical: "https://aexagency.com/countries-list",
  },
  openGraph: {
    title: "Global Presence | AEX Agency - Available Countries & Regions",
    description: "AEX Agency operates in 24+ countries including United States, United Kingdom, UAE, India, and more. Find your country for localized digital solutions.",
    url: "https://aexagency.com/countries-list",
  },
};

export default function CountriesPage() {
  const trendingCountries = getTrendingCountries();
  const regions = getAllRegions();
  const currentCountry = "us"; // Default to US for countries list page

  const countryInsights = [
    {
      code: "us",
      name: "United States",
      flag: "🇺🇸",
      marketGrowth: "+12%",
      activeProjects: "456",
      revenue: "$1.2M",
      clientSatisfaction: "96%",
      topServices: ["Real Estate", "E-Commerce", "Cloud"],
      trends: [
        { metric: "Real Estate Listings", value: "+15%", icon: Building },
        { metric: "E-Commerce Sales", value: "+22%", icon: ShoppingBag },
        { metric: "Cloud Adoption", value: "+18%", icon: Zap },
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      code: "uk",
      name: "United Kingdom",
      flag: "🇬🇧",
      marketGrowth: "+8%",
      activeProjects: "234",
      revenue: "$890K",
      clientSatisfaction: "94%",
      topServices: ["Digital Marketing", "SEO", "Real Estate"],
      trends: [
        { metric: "Marketing ROI", value: "+28%", icon: Target },
        { metric: "SEO Rankings", value: "+35%", icon: Search },
        { metric: "Property Inquiries", value: "+12%", icon: Building },
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      code: "ae",
      name: "United Arab Emirates",
      flag: "🇦🇪",
      marketGrowth: "+25%",
      activeProjects: "123",
      revenue: "$450K",
      clientSatisfaction: "97%",
      topServices: ["Real Estate", "Cloud", "HR Placements"],
      trends: [
        { metric: "Luxury Property", value: "+32%", icon: Building },
        { metric: "Cloud Infrastructure", value: "+45%", icon: Zap },
        { metric: "Campus Hiring", value: "+18%", icon: GraduationCap },
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      code: "in",
      name: "India",
      flag: "🇮🇳",
      marketGrowth: "+18%",
      activeProjects: "434",
      revenue: "$670K",
      clientSatisfaction: "95%",
      topServices: ["E-Commerce", "SEO", "HR Placements"],
      trends: [
        { metric: "Online Retail", value: "+28%", icon: ShoppingBag },
        { metric: "Organic Traffic", value: "+42%", icon: Search },
        { metric: "Tech Hiring", value: "+35%", icon: GraduationCap },
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header currentCountry={currentCountry} />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Global Presence</h1>
          <p className="text-xl text-gray-600">Select your country to discover tailored services and solutions</p>
        </div>

        {/* Market Insights Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-[#4d7cf5]" />
              Market Insights by Country
            </h2>
            <Link href="/insights">
              <button className="px-6 py-3 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] hover:from-[#3660e0] hover:to-[#4d7cf5] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                View Detailed Analytics
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {countryInsights.map((country, index) => (
              <div
                key={country.code}
                className="bg-white rounded-2xl border border-[#eef0f4] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${country.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                        <p className="text-blue-100 text-sm">Market Growth: {country.marketGrowth}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">{country.revenue}</div>
                      <div className="text-blue-100 text-sm">Revenue</div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-[#eef0f4] rounded-xl">
                      <div className="text-2xl font-bold text-[#1c1f26]">{country.activeProjects}</div>
                      <div className="text-xs text-[#8a90a2]">Active Projects</div>
                    </div>
                    <div className="text-center p-3 bg-[#eef0f4] rounded-xl">
                      <div className="text-2xl font-bold text-[#1c1f26]">{country.clientSatisfaction}</div>
                      <div className="text-xs text-[#8a90a2]">Satisfaction</div>
                    </div>
                    <div className="text-center p-3 bg-[#eef0f4] rounded-xl">
                      <div className="text-2xl font-bold text-[#1c1f26]">{country.topServices.length}</div>
                      <div className="text-xs text-[#8a90a2]">Services</div>
                    </div>
                  </div>

                  {/* Trends */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1c1f26] mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#4d7cf5]" />
                      Market Trends
                    </h4>
                    <div className="space-y-2">
                      {country.trends.map((trend) => (
                        <div key={trend.metric} className="flex items-center justify-between p-2 bg-[#eef0f4] rounded-lg">
                          <div className="flex items-center gap-2">
                            <trend.icon className="w-4 h-4 text-[#4d7cf5]" />
                            <span className="text-sm text-[#4a5060]">{trend.metric}</span>
                          </div>
                          <span className="text-sm font-bold text-[#2e9e5b]">{trend.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1c1f26] mb-3">Top Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {country.topServices.map((service) => (
                        <span key={service} className="px-3 py-1 bg-[#eef0f4] rounded-full text-xs font-semibold text-[#4a5060]">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/${country.code}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] hover:from-[#3660e0] hover:to-[#4d7cf5] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                      Explore {country.name}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

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

      <AdvancedFooter 
        countryCode={currentCountry}
        countryName="Global"
        currency="USD"
        currencySymbol="$"
      />

      <InsightsToggle />
    </div>
  );
}
