import { Router } from 'express';
import {
  getAllCountries,
  getTrendingCountriesList,
  getCountryByCodeController,
  getCountriesByRegionController,
  getAllRegionsController,
  upsertCountry,
  deleteCountry,
  initializeCountries,
} from './country.controller';

const router = Router();

// Public routes
router.get('/', getAllCountries);
router.get('/trending', getTrendingCountriesList);
router.get('/regions', getAllRegionsController);
router.get('/region/:region', getCountriesByRegionController);
router.get('/:code', getCountryByCodeController);

// Admin routes (should be protected with auth middleware in production)
router.post('/initialize', initializeCountries);
router.post('/', upsertCountry);
router.put('/:code', upsertCountry);
router.delete('/:code', deleteCountry);

export default router;
