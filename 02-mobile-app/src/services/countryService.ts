import apiClient from './apiClient';
import { CountryConfig } from '../config/countries';

export interface CountryServiceConfig {
  countryCode: string;
  currency: string;
  language: string;
  timezone: string;
  taxRate: number;
  shippingCost: number;
  support: {
    phone: string;
    email: string;
  };
}

export interface CountryAvailableServices {
  countryCode: string;
  countryName: string;
  services: {
    [key: string]: boolean;
  };
}

class CountryService {
  private baseUrl = '/api/v1';

  async getAllCountries(): Promise<CountryConfig[]> {
    const response = await apiClient.get(`${this.baseUrl}/countries`);
    return response.data.data;
  }

  async getTrendingCountries(): Promise<CountryConfig[]> {
    const response = await apiClient.get(`${this.baseUrl}/countries/trending`);
    return response.data.data;
  }

  async getCountryByCode(code: string): Promise<CountryConfig> {
    const response = await apiClient.get(`${this.baseUrl}/countries/${code}`);
    return response.data.data;
  }

  async getCountriesByRegion(region: string): Promise<CountryConfig[]> {
    const response = await apiClient.get(`${this.baseUrl}/countries/region/${region}`);
    return response.data.data;
  }

  async getAllRegions(): Promise<string[]> {
    const response = await apiClient.get(`${this.baseUrl}/countries/regions`);
    return response.data.data;
  }

  async getCountryServiceConfig(countryCode: string): Promise<CountryServiceConfig> {
    const response = await apiClient.get(
      `${this.baseUrl}/country-services/${countryCode}/config`
    );
    return response.data.data;
  }

  async getCountryAvailableServices(countryCode: string): Promise<CountryAvailableServices> {
    const response = await apiClient.get(
      `${this.baseUrl}/country-services/${countryCode}/services`
    );
    return response.data.data;
  }

  async updateCountryServiceSettings(
    countryCode: string,
    settings: Partial<CountryServiceConfig>
  ): Promise<CountryConfig> {
    const response = await apiClient.put(
      `${this.baseUrl}/country-services/${countryCode}/settings`,
      settings
    );
    return response.data.data;
  }
}

export default new CountryService();
