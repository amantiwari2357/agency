import { Router } from 'express';
import {
  getAllBlogs,
  getPublishedBlogs,
  getBlogBySlug,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  addComment,
  likeBlog,
  getBlogStats,
} from './blog.controller';

const router = Router();

// Public routes
router.get('/', getAllBlogs);
router.get('/published', getPublishedBlogs);
router.get('/stats', getBlogStats);
router.get('/slug/:slug', getBlogBySlug);
router.get('/:id', getBlogById);

// Admin routes (should be protected with auth middleware in production)
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);
router.post('/:id/comments', addComment);
router.post('/:id/like', likeBlog);

export default router;
