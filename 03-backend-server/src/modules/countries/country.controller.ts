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

// Get country statistics
export const getCountryStatistics = async (req: Request, res: Response) => {
  try {
    const totalCountries = await Country.countDocuments({ isActive: true });
    const trendingCountries = await Country.countDocuments({ isActive: true, trending: true });
    const regions = await Country.distinct('region');
    const countriesByRegion: Record<string, number> = {};
    
    for (const region of regions) {
      countriesByRegion[region] = await Country.countDocuments({ region, isActive: true });
    }
    
    const currencyDistribution = await Country.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: '$currency', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    
    res.json({
      success: true,
      data: {
        totalCountries,
        trendingCountries,
        totalRegions: regions.length,
        regions,
        countriesByRegion,
        currencyDistribution,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch country statistics',
    });
  }
};

// Bulk update countries
export const bulkUpdateCountries = async (req: Request, res: Response) => {
  try {
    const { updates } = req.body; // Array of { code, updates }
    
    const results = [];
    for (const { code, ...updateData } of updates) {
      const country = await Country.findOneAndUpdate(
        { code: code.toUpperCase() },
        updateData,
        { new: true, runValidators: true }
      );
      if (country) {
        results.push(country);
      }
    }
    
    res.json({
      success: true,
      data: results,
      count: results.length,
      message: `${results.length} countries updated successfully`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to bulk update countries',
    });
  }
};

// Bulk toggle trending
export const bulkToggleTrending = async (req: Request, res: Response) => {
  try {
    const { codes, trending } = req.body;
    
    const result = await Country.updateMany(
      { code: { $in: codes.map((c: string) => c.toUpperCase()) } },
      { trending }
    );
    
    res.json({
      success: true,
      message: `${result.modifiedCount} countries updated successfully`,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to bulk toggle trending',
    });
  }
};

// Advanced search with filters
export const advancedSearchCountries = async (req: Request, res: Response) => {
  try {
    const {
      search,
      region,
      trending,
      currency,
      language,
      isActive,
      page = 1,
      limit = 20,
      sortBy = 'name',
      sortOrder = 'asc'
    } = req.query as any;
    
    const filter: any = {};
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { code: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (region) filter.region = region;
    if (trending !== undefined) filter.trending = trending === 'true';
    if (currency) filter.currency = Array.isArray(currency) ? currency[0].toUpperCase() : currency.toUpperCase();
    if (language) filter.language = language;
    if (isActive !== undefined) filter.isActive = isActive === 'true';
    
    const skip = (Number(page) - 1) * Number(limit);
    const sort: any = {};
    sort[sortBy as string] = sortOrder === 'asc' ? 1 : -1;
    
    const [countries, total] = await Promise.all([
      Country.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(Number(limit)),
      Country.countDocuments(filter)
    ]);
    
    res.json({
      success: true,
      data: countries,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to search countries',
    });
  }
};

// Update country settings
export const updateCountrySettings = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const { settings } = req.body;
    const countryCode = Array.isArray(code) ? code[0] : code;
    
    const country = await Country.findOneAndUpdate(
      { code: countryCode.toUpperCase() },
      { settings },
      { new: true, runValidators: true }
    );
    
    if (!country) {
      return res.status(404).json({
        success: false,
        error: 'Country not found',
      });
    }
    
    res.json({
      success: true,
      data: country,
      message: 'Country settings updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update country settings',
    });
  }
};
