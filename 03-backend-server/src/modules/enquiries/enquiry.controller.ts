import { Request, Response } from 'express';
import Enquiry from './enquiry.model';

// Get all enquiries
export const getAllEnquiries = async (req: Request, res: Response) => {
  try {
    const { country, status, priority, service } = req.query;
    
    const filter: any = {};
    
    if (country) filter.country = country;
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (service) filter.service = service;

    const enquiries = await Enquiry.find(filter).sort({ createdAt: -1 });
    res.json({
      success: true,
      data: enquiries,
      count: enquiries.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch enquiries',
    });
  }
};

// Get enquiry by ID
export const getEnquiryById = async (req: Request, res: Response) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        error: 'Enquiry not found',
      });
    }
    
    res.json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch enquiry',
    });
  }
};

// Create new enquiry
export const createEnquiry = async (req: Request, res: Response) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    
    res.status(201).json({
      success: true,
      data: enquiry,
      message: 'Enquiry submitted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create enquiry',
    });
  }
};

// Update enquiry
export const updateEnquiry = async (req: Request, res: Response) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        error: 'Enquiry not found',
      });
    }
    
    res.json({
      success: true,
      data: enquiry,
      message: 'Enquiry updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update enquiry',
    });
  }
};

// Delete enquiry
export const deleteEnquiry = async (req: Request, res: Response) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        error: 'Enquiry not found',
      });
    }
    
    res.json({
      success: true,
      message: 'Enquiry deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete enquiry',
    });
  }
};

// Update enquiry status
export const updateEnquiryStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        error: 'Enquiry not found',
      });
    }
    
    res.json({
      success: true,
      data: enquiry,
      message: 'Enquiry status updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update enquiry status',
    });
  }
};

// Get enquiry statistics
export const getEnquiryStats = async (req: Request, res: Response) => {
  try {
    const stats = await Enquiry.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const total = await Enquiry.countDocuments();
    const highPriority = await Enquiry.countDocuments({ priority: 'high' });
    
    res.json({
      success: true,
      data: {
        total,
        highPriority,
        byStatus: stats.reduce((acc, curr) => {
          acc[curr._id] = curr.count;
          return acc;
        }, {} as Record<string, number>)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch enquiry statistics',
    });
  }
};
