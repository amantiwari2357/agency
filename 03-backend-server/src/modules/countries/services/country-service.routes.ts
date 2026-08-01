import { Router } from 'express';
import {
  getCountryServiceConfig,
  updateCountryServiceSettings,
  getCountryAvailableServices,
} from './country-service.controller';

const router = Router();

// Public routes
router.get('/:countryCode/config', getCountryServiceConfig);
router.get('/:countryCode/services', getCountryAvailableServices);

// Admin routes (should be protected with auth middleware in production)
router.put('/:countryCode/settings', updateCountryServiceSettings);

export default router;
