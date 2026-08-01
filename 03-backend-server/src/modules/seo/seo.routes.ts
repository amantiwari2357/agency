import express from 'express';
import {
  getAllSEO,
  getSEOBySlug,
  getSEOByPage,
  createSEO,
  updateSEO,
  deleteSEO,
  bulkUpdateStatus
} from './seo.controller';

const router = express.Router();

// Get all SEO records with optional filters
router.get('/', getAllSEO);

// Get SEO by page and country
router.get('/page/:page/:country?', getSEOByPage);

// Get SEO by slug
router.get('/slug/:slug', getSEOBySlug);

// Create new SEO record
router.post('/', createSEO);

// Update SEO record
router.put('/:id', updateSEO);

// Delete SEO record
router.delete('/:id', deleteSEO);

// Bulk update status
router.patch('/bulk/status', bulkUpdateStatus);

export default router;
