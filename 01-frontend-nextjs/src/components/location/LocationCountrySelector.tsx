'use client';

import React, { useState } from 'react';
import { COUNTRIES, getTrendingCountries } from '../../config/countries';
import Link from 'next/link';

interface CountrySelectorProps {
  currentCountry?: string;
  onSelect?: (countryCode: string) => void;
}

export default function CountrySelector({ currentCountry, onSelect }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const trendingCountries = getTrendingCountries();

  const filteredCountries = COUNTRIES.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCountryData = COUNTRIES.find(c => c.code === currentCountry);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        {currentCountryData ? (
          <>
            <span className="text-xl">{currentCountryData.flag}</span>
            <span className="font-medium">{currentCountryData.code.toUpperCase()}</span>
          </>
        ) : (
          <span className="font-medium">Select Country</span>
        )}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {/* Search Input */}
          <div className="p-3 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Trending Countries */}
          {searchTerm === '' && (
            <div className="p-3 border-b border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Trending</p>
              <div className="space-y-1">
                {trendingCountries.map((country) => (
                  <Link
                    key={country.code}
                    href={`/${country.code}`}
                    onClick={() => {
                      setIsOpen(false);
                      onSelect?.(country.code);
                    }}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors ${
                      currentCountry === country.code ? 'bg-blue-100' : ''
                    }`}
                  >
                    <span className="text-xl">{country.flag}</span>
                    <div className="flex-1">
                      <p className="font-medium">{country.name}</p>
                      <p className="text-xs text-gray-500">{country.region}</p>
                    </div>
                    {country.trending && (
                      <span className="text-xs">🔥</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Countries */}
          <div className="p-3">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">All Countries</p>
            <div className="space-y-1">
              {filteredCountries.map((country) => (
                <Link
                  key={country.code}
                  href={`/${country.code}`}
                  onClick={() => {
                    setIsOpen(false);
                    onSelect?.(country.code);
                  }}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors ${
                    currentCountry === country.code ? 'bg-blue-100' : ''
                  }`}
                >
                  <span className="text-xl">{country.flag}</span>
                  <div className="flex-1">
                    <p className="font-medium">{country.name}</p>
                    <p className="text-xs text-gray-500">{country.code.toUpperCase()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
