import { Router } from 'express';
import {
  getAllAnalytics,
  getAnalyticsByDateRange,
  getDashboardSummary,
  getCountryWiseAnalytics,
  getServiceWiseAnalytics,
  upsertAnalytics,
} from './analytics.controller';

const router = Router();

// Public routes
router.get('/', getAllAnalytics);
router.get('/summary', getDashboardSummary);
router.get('/date-range', getAnalyticsByDateRange);
router.get('/country-wise', getCountryWiseAnalytics);
router.get('/service-wise', getServiceWiseAnalytics);

// Admin routes (should be protected with auth middleware in production)
router.post('/', upsertAnalytics);

export default router;
