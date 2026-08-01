import { useState, useContext, createContext, ReactNode } from 'react';
import { CountryConfig, getCountryByCode } from '../../config/countries';

interface CountryContextType {
  selectedCountry: CountryConfig | null;
  setSelectedCountry: (country: CountryConfig | null) => void;
  initializeCountry: (code?: string) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [selectedCountry, setSelectedCountryState] = useState<CountryConfig | null>(null);

  const setSelectedCountry = (country: CountryConfig | null) => {
    setSelectedCountryState(country);
    // Note: In production, you would use AsyncStorage for persistence
    // For now, this is session-based storage
  };

  const initializeCountry = (code?: string) => {
    // If code provided, use it
    if (code) {
      const country = getCountryByCode(code);
      if (country) {
        setSelectedCountryState(country);
        return;
      }
    }

    // Default to US if nothing else
    const defaultCountry = getCountryByCode('us');
    if (defaultCountry) {
      setSelectedCountryState(defaultCountry);
    }
  };

  return React.createElement(
    CountryContext.Provider,
    { value: { selectedCountry, setSelectedCountry, initializeCountry } },
    children
  );
}

export function useCountrySelection() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountrySelection must be used within a CountryProvider');
  }
  return context;
}
