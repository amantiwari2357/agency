import { Request, Response } from 'express';
import SEO from './seo.model';

// Get all SEO records
export const getAllSEO = async (req: Request, res: Response) => {
  try {
    const { page, country, status } = req.query;
    const filter: any = {};

    if (page) filter.page = page;
    if (country) filter.country = country;
    if (status) filter.status = status;

    const seoRecords = await SEO.find(filter).sort({ page: 1, country: 1 });
    res.json({
      success: true,
      data: seoRecords,
      count: seoRecords.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching SEO records',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get SEO by slug
export const getSEOBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const seoRecord = await SEO.findOne({ slug });

    if (!seoRecord) {
      return res.status(404).json({
        success: false,
        message: 'SEO record not found'
      });
    }

    res.json({
      success: true,
      data: seoRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching SEO record',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get SEO by page and country
export const getSEOByPage = async (req: Request, res: Response) => {
  try {
    const { page, country } = req.params;
    const seoRecord = await SEO.findOne({ page, country: country || 'global' });

    if (!seoRecord) {
      return res.status(404).json({
        success: false,
        message: 'SEO record not found'
      });
    }

    res.json({
      success: true,
      data: seoRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching SEO record',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create new SEO record
export const createSEO = async (req: Request, res: Response) => {
  try {
    const seoData = req.body;
    const seoRecord = new SEO(seoData);
    await seoRecord.save();

    res.status(201).json({
      success: true,
      message: 'SEO record created successfully',
      data: seoRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating SEO record',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Update SEO record
export const updateSEO = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const seoRecord = await SEO.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!seoRecord) {
      return res.status(404).json({
        success: false,
        message: 'SEO record not found'
      });
    }

    res.json({
      success: true,
      message: 'SEO record updated successfully',
      data: seoRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating SEO record',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete SEO record
export const deleteSEO = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const seoRecord = await SEO.findByIdAndDelete(id);

    if (!seoRecord) {
      return res.status(404).json({
        success: false,
        message: 'SEO record not found'
      });
    }

    res.json({
      success: true,
      message: 'SEO record deleted successfully',
      data: seoRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting SEO record',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Bulk update SEO status
export const bulkUpdateStatus = async (req: Request, res: Response) => {
  try {
    const { ids, status } = req.body;

    const result = await SEO.updateMany(
      { _id: { $in: ids } },
      { status, updatedAt: new Date() }
    );

    res.json({
      success: true,
      message: 'SEO records updated successfully',
      data: { modifiedCount: result.modifiedCount }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error bulk updating SEO records',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
