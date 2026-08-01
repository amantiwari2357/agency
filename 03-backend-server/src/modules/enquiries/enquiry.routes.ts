import { Router } from 'express';
import {
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  updateEnquiryStatus,
  getEnquiryStats,
} from './enquiry.controller';

const router = Router();

// Public routes
router.get('/', getAllEnquiries);
router.get('/stats', getEnquiryStats);
router.get('/:id', getEnquiryById);

// Admin routes (should be protected with auth middleware in production)
router.post('/', createEnquiry);
router.put('/:id', updateEnquiry);
router.patch('/:id/status', updateEnquiryStatus);
router.delete('/:id', deleteEnquiry);

export default router;
