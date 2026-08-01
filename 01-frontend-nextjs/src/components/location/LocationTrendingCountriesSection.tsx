import React from 'react';
import { getTrendingCountries } from '../../config/countries';
import Link from 'next/link';

export default function TrendingCountriesSection() {
  const trendingCountries = getTrendingCountries();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="mr-2">🌍</span> 
            Explore Our Global Presence
          </h2>
          <p className="text-xl text-gray-600">
            Select your country to discover tailored services and solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {trendingCountries.slice(0, 8).map((country) => (
            <Link
              key={country.code}
              href={`/${country.code}`}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <span className="text-5xl mb-3 block group-hover:scale-110 transition-transform">
                  {country.flag}
                </span>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  {country.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{country.region}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {country.currency}
                  </span>
                  {country.trending && (
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      🔥 Hot
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/countries"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Countries
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
