import { Request, Response } from 'express';
import Country from './country.model';
import { COUNTRIES, getCountryByCode, getTrendingCountries, getCountriesByRegion, getAllRegions } from '../../config/countries';

// Get all countries
export const getAllCountries = async (req: Request, res: Response) => {
  try {
    const countries = await Country.find({ isActive: true }).sort({ name: 1 });
    res.json({
      success: true,
      data: countries,
      count: countries.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch countries',
    });
  }
};

// Get trending countries
export const getTrendingCountriesList = async (req: Request, res: Response) => {
  try {
    const trendingCountries = await Country.find({ 
      isActive: true, 
      trending: true 
    }).sort({ name: 1 });
    
    res.json({
      success: true,
      data: trendingCountries,
      count: trendingCountries.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch trending countries',
    });
  }
};

// Get country by code
export const getCountryByCodeController = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const countryCode = Array.isArray(code) ? code[0] : code;
    const country = await Country.findOne({ 
      code: countryCode.toUpperCase(), 
      isActive: true 
    });
    
    if (!country) {
      return res.status(404).json({
        success: false,
        error: 'Country not found',
      });
    }
    
    res.json({
      success: true,
      data: country,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch country',
    });
  }
};

// Get countries by region
export const getCountriesByRegionController = async (req: Request, res: Response) => {
  try {
    const { region } = req.params;
    const countries = await Country.find({ 
      region,
      isActive: true 
    }).sort({ name: 1 });
    
    res.json({
      success: true,
      data: countries,
      count: countries.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch countries by region',
    });
  }
};

// Get all regions
export const getAllRegionsController = async (req: Request, res: Response) => {
  try {
    const regions = await Country.distinct('region');
    res.json({
      success: true,
      data: regions,
      count: regions.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch regions',
    });
  }
};

// Create/update country (admin only)
export const upsertCountry = async (req: Request, res: Response) => {
  try {
    const { code, ...countryData } = req.body;
    
    const country = await Country.findOneAndUpdate(
      { code: code.toUpperCase() },
      { ...countryData, code: code.toUpperCase() },
      { upsert: true, new: true, runValidators: true }
    );
    
    res.json({
      success: true,
      data: country,
      message: countryData.isNew ? 'Country created successfully' : 'Country updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to upsert country',
    });
  }
};

// Delete country (admin only)
export const deleteCountry = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const countryCode = Array.isArray(code) ? code[0] : code;
    const country = await Country.findOneAndUpdate(
      { code: countryCode.toUpperCase() },
      { isActive: false },
      { new: true }
    );
    
    if (!country) {
      return res.status(404).json({
        success: false,
        error: 'Country not found',
      });
    }
    
    res.json({
      success: true,
      message: 'Country deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete country',
    });
  }
};

// Initialize countries from config
export const initializeCountries = async (req: Request, res: Response) => {
  try {
    const initializedCountries = [];
    
    for (const countryConfig of COUNTRIES) {
      const country = await Country.findOneAndUpdate(
        { code: countryConfig.code },
        {
          code: countryConfig.code,
          name: countryConfig.name,
          flag: countryConfig.flag,
          currency: countryConfig.currency,
          language: countryConfig.language,
          timezone: countryConfig.timezone,
          trending: countryConfig.trending,
          region: countryConfig.region,
          isActive: true,
        },
        { upsert: true, new: true }
      );
      initializedCountries.push(country);
    }
    
    res.json({
      success: true,
      data: initializedCountries,
      count: initializedCountries.length,
      message: 'Countries initialized successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to initialize countries',
    });
  }
};
