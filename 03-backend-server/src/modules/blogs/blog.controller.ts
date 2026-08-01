import { Request, Response } from 'express';
import Blog from './blog.model';

// Get all blogs
export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const { country, category, status, author } = req.query;
    
    const filter: any = {};
    
    if (country) filter.country = country;
    if (category) filter.category = category;
    if (status) filter.status = status;
    if (author) filter.author = author;

    const blogs = await Blog.find(filter).sort({ publishedAt: -1 });
    res.json({
      success: true,
      data: blogs,
      count: blogs.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blogs',
    });
  }
};

// Get published blogs (for frontend)
export const getPublishedBlogs = async (req: Request, res: Response) => {
  try {
    const { country, category, limit } = req.query;
    
    const filter: any = { status: 'published' };
    
    if (country) filter.country = country;
    if (category) filter.category = category;

    const query = Blog.find(filter).sort({ publishedAt: -1 });
    
    if (limit) {
      query.limit(parseInt(limit as string));
    }

    const blogs = await query;
    res.json({
      success: true,
      data: blogs,
      count: blogs.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch published blogs',
    });
  }
};

// Get blog by slug
export const getBlogBySlug = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }
    
    // Increment view count
    blog.views += 1;
    await blog.save();
    
    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog',
    });
  }
};

// Get blog by ID
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }
    
    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog',
    });
  }
};

// Create new blog
export const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = new Blog(req.body);
    
    if (blog.status === 'published' && !blog.publishedAt) {
      blog.publishedAt = new Date();
    }
    
    await blog.save();
    
    res.status(201).json({
      success: true,
      data: blog,
      message: 'Blog created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create blog',
    });
  }
};

// Update blog
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }
    
    res.json({
      success: true,
      data: blog,
      message: 'Blog updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update blog',
    });
  }
};

// Delete blog
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }
    
    res.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete blog',
    });
  }
};

// Add comment to blog
export const addComment = async (req: Request, res: Response) => {
  try {
    const { author, content } = req.body;
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }
    
    blog.comments.push({ author, content, date: new Date() });
    await blog.save();
    
    res.json({
      success: true,
      data: blog,
      message: 'Comment added successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to add comment',
    });
  }
};

// Like blog
export const likeBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
      });
    }
    
    blog.likes += 1;
    await blog.save();
    
    res.json({
      success: true,
      data: blog,
      message: 'Blog liked successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to like blog',
    });
  }
};

// Get blog statistics
export const getBlogStats = async (req: Request, res: Response) => {
  try {
    const total = await Blog.countDocuments();
    const published = await Blog.countDocuments({ status: 'published' });
    const draft = await Blog.countDocuments({ status: 'draft' });
    const totalViews = await Blog.aggregate([
      { $group: { _id: null, total: { $sum: '$views' } } }
    ]);
    const totalLikes = await Blog.aggregate([
      { $group: { _id: null, total: { $sum: '$likes' } } }
    ]);
    
    res.json({
      success: true,
      data: {
        total,
        published,
        draft,
        totalViews: totalViews[0]?.total || 0,
        totalLikes: totalLikes[0]?.total || 0
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog statistics',
    });
  }
};
