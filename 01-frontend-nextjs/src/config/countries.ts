export interface CountryConfig {
  code: string;
  name: string;
  flag: string;
  currency: string;
  language: string;
  timezone: string;
  trending: boolean;
  region: string;
}

export const COUNTRIES: CountryConfig[] = [
  { code: 'in', name: 'India', flag: '🇮🇳', currency: 'INR', language: 'en-IN', timezone: 'Asia/Kolkata', trending: true, region: 'Asia' },
  { code: 'us', name: 'United States', flag: '🇺🇸', currency: 'USD', language: 'en-US', timezone: 'America/New_York', trending: true, region: 'North America' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', language: 'en-GB', timezone: 'Europe/London', trending: true, region: 'Europe' },
  { code: 'ae', name: 'United Arab Emirates', flag: '🇦🇪', currency: 'AED', language: 'en-AE', timezone: 'Asia/Dubai', trending: true, region: 'Middle East' },
  { code: 'bd', name: 'Bangladesh', flag: '🇧🇩', currency: 'BDT', language: 'en-BD', timezone: 'Asia/Dhaka', trending: true, region: 'Asia' },
  { code: 'pk', name: 'Pakistan', flag: '🇵🇰', currency: 'PKR', language: 'en-PK', timezone: 'Asia/Karachi', trending: true, region: 'Asia' },
  { code: 'ru', name: 'Russia', flag: '🇷🇺', currency: 'RUB', language: 'ru-RU', timezone: 'Europe/Moscow', trending: true, region: 'Europe' },
  { code: 'au', name: 'Australia', flag: '🇦🇺', currency: 'AUD', language: 'en-AU', timezone: 'Australia/Sydney', trending: true, region: 'Oceania' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩', currency: 'IDR', language: 'id-ID', timezone: 'Asia/Jakarta', trending: true, region: 'Asia' },
  { code: 'th', name: 'Thailand', flag: '🇹🇭', currency: 'THB', language: 'th-TH', timezone: 'Asia/Bangkok', trending: true, region: 'Asia' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦', currency: 'CAD', language: 'en-CA', timezone: 'America/Toronto', trending: true, region: 'North America' },
  { code: 'de', name: 'Germany', flag: '🇩🇪', currency: 'EUR', language: 'de-DE', timezone: 'Europe/Berlin', trending: true, region: 'Europe' },
  { code: 'fr', name: 'France', flag: '🇫🇷', currency: 'EUR', language: 'fr-FR', timezone: 'Europe/Paris', trending: true, region: 'Europe' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵', currency: 'JPY', language: 'ja-JP', timezone: 'Asia/Tokyo', trending: true, region: 'Asia' },
  { code: 'kr', name: 'South Korea', flag: '🇰🇷', currency: 'KRW', language: 'ko-KR', timezone: 'Asia/Seoul', trending: true, region: 'Asia' },
  { code: 'sg', name: 'Singapore', flag: '🇸🇬', currency: 'SGD', language: 'en-SG', timezone: 'Asia/Singapore', trending: true, region: 'Asia' },
  { code: 'my', name: 'Malaysia', flag: '🇲🇾', currency: 'MYR', language: 'en-MY', timezone: 'Asia/Kuala_Lumpur', trending: true, region: 'Asia' },
  { code: 'br', name: 'Brazil', flag: '🇧🇷', currency: 'BRL', language: 'pt-BR', timezone: 'America/Sao_Paulo', trending: true, region: 'South America' },
  { code: 'mx', name: 'Mexico', flag: '🇲🇽', currency: 'MXN', language: 'es-MX', timezone: 'America/Mexico_City', trending: true, region: 'North America' },
  { code: 'za', name: 'South Africa', flag: '🇿🇦', currency: 'ZAR', language: 'en-ZA', timezone: 'Africa/Johannesburg', trending: true, region: 'Africa' },
  { code: 'ph', name: 'Philippines', flag: '🇵🇭', currency: 'PHP', language: 'en-PH', timezone: 'Asia/Manila', trending: true, region: 'Asia' },
  { code: 'vn', name: 'Vietnam', flag: '🇻🇳', currency: 'VND', language: 'vi-VN', timezone: 'Asia/Ho_Chi_Minh', trending: true, region: 'Asia' },
  { code: 'nl', name: 'Netherlands', flag: '🇳🇱', currency: 'EUR', language: 'nl-NL', timezone: 'Europe/Amsterdam', trending: true, region: 'Europe' },
  { code: 'it', name: 'Italy', flag: '🇮🇹', currency: 'EUR', language: 'it-IT', timezone: 'Europe/Rome', trending: true, region: 'Europe' },
];

export const getCountryByCode = (code: string): CountryConfig | undefined => {
  return COUNTRIES.find(country => country.code === code);
};

export const getTrendingCountries = (): CountryConfig[] => {
  return COUNTRIES.filter(country => country.trending);
};

export const getCountriesByRegion = (region: string): CountryConfig[] => {
  return COUNTRIES.filter(country => country.region === region);
};

export const getAllRegions = (): string[] => {
  return Array.from(new Set(COUNTRIES.map(country => country.region)));
};
