import React from 'react';
import { CountryConfig } from '../../config/countries';
import LocationCountryCard from './LocationCountryCard';

interface CountryGridProps {
  countries: CountryConfig[];
  variant?: 'default' | 'compact' | 'featured';
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  showRegion?: boolean;
  showTrendingBadge?: boolean;
}

export default function CountryGrid({
  countries,
  variant = 'default',
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  showRegion = true,
  showTrendingBadge = true,
}: CountryGridProps) {
  const gridCols = {
    mobile: `grid-cols-${columns.mobile || 1}`,
    tablet: `md:grid-cols-${columns.tablet || 2}`,
    desktop: `lg:grid-cols-${columns.desktop || 4}`,
  };

  return (
    <div className={`grid ${gridCols.mobile} ${gridCols.tablet} ${gridCols.desktop} gap-4`}>
      {countries.map((country) => (
        <LocationCountryCard
          key={country.code}
          country={country}
          variant={variant}
          showRegion={showRegion}
          showTrendingBadge={showTrendingBadge}
        />
      ))}
    </div>
  );
}
