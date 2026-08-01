import { Request, Response } from 'express';
import Country from '../country.model';

// Get country-specific service configuration
export const getCountryServiceConfig = async (req: Request, res: Response) => {
  try {
    const { countryCode } = req.params;
    const { serviceType } = req.query;
    const code = Array.isArray(countryCode) ? countryCode[0] : countryCode;
    
    const country = await Country.findOne({ 
      code: code.toUpperCase(), 
      isActive: true 
    });
    
    if (!country) {
      return res.status(404).json({
        success: false,
        error: 'Country not found',
      });
    }
    
    // Return country-specific configuration based on service type
    const serviceConfig = {
      countryCode: country.code,
      currency: country.currency,
      language: country.language,
      timezone: country.timezone,
      taxRate: country.settings.taxRate,
      shippingCost: country.settings.shippingCost,
      support: {
        phone: country.settings.supportPhone,
        email: country.settings.supportEmail,
      },
    };
    
    res.json({
      success: true,
      data: serviceConfig,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch country service configuration',
    });
  }
};

// Update country service settings (admin only)
export const updateCountryServiceSettings = async (req: Request, res: Response) => {
  try {
    const { countryCode } = req.params;
    const settings = req.body;
    const code = Array.isArray(countryCode) ? countryCode[0] : countryCode;
    
    const country = await Country.findOneAndUpdate(
      { code: code.toUpperCase() },
      { $set: { settings } },
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
      message: 'Country service settings updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update country service settings',
    });
  }
};

// Get available service types for a country
export const getCountryAvailableServices = async (req: Request, res: Response) => {
  try {
    const { countryCode } = req.params;
    const code = Array.isArray(countryCode) ? countryCode[0] : countryCode;
    
    const country = await Country.findOne({ 
      code: code.toUpperCase(), 
      isActive: true 
    });
    
    if (!country) {
      return res.status(404).json({
        success: false,
        error: 'Country not found',
      });
    }
    
    // Define available services per country (can be extended)
    const availableServices = {
      'real-estate': true,
      'ecommerce': true,
      'cloud': true,
      'placements': true,
      'marketing': true,
      'seo': true,
    };
    
    res.json({
      success: true,
      data: {
        countryCode: country.code,
        countryName: country.name,
        services: availableServices,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch available services',
    });
  }
};
