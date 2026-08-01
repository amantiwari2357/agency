import React from 'react';
import Link from 'next/link';
import { CountryConfig } from '../../config/countries';

interface CountryCardProps {
  country: CountryConfig;
  variant?: 'default' | 'compact' | 'featured';
  showRegion?: boolean;
  showTrendingBadge?: boolean;
}

export default function CountryCard({
  country,
  variant = 'default',
  showRegion = true,
  showTrendingBadge = true,
}: CountryCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={`/${country.code}`}
        className="flex items-center p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:shadow-sm group"
      >
        <span className="text-2xl mr-3">{country.flag}</span>
        <div className="flex-1">
          <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
            {country.name}
          </p>
          <p className="text-xs text-gray-500">{country.code.toUpperCase()}</p>
        </div>
        {showTrendingBadge && country.trending && (
          <span className="text-xs">🔥</span>
        )}
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/${country.code}`}
        className="group bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1"
      >
        <div className="flex items-center mb-4">
          <span className="text-5xl mr-4 group-hover:scale-110 transition-transform">{country.flag}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {country.name}
            </h3>
            {showRegion && (
              <p className="text-sm text-gray-500">{country.region}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700 shadow-sm">
              {country.currency}
            </span>
            <span className="text-sm text-gray-500">{country.language}</span>
          </div>
          {showTrendingBadge && country.trending && (
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
              🔥 Trending
            </span>
          )}
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={`/${country.code}`}
      className="group bg-white hover:bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md border border-gray-200"
    >
      <div className="flex items-center">
        <span className="text-3xl mr-4">{country.flag}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {country.name}
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            {showRegion && (
              <span className="text-xs text-gray-500">{country.region}</span>
            )}
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-500">{country.currency}</span>
          </div>
        </div>
        {showTrendingBadge && country.trending && (
          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
            🔥
          </span>
        )}
      </div>
    </Link>
  );
}
