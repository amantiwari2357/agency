import { Request, Response } from 'express';
import Analytics from './analytics.model';

// Get all analytics data
export const getAllAnalytics = async (req: Request, res: Response) => {
  try {
    const { country, startDate, endDate } = req.query;
    
    const filter: any = {};
    
    if (country) filter.country = country;
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string)
      };
    }

    const analytics = await Analytics.find(filter).sort({ date: -1 });
    res.json({
      success: true,
      data: analytics,
      count: analytics.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch analytics',
    });
  }
};

// Get analytics by date range
export const getAnalyticsByDateRange = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate, country } = req.query;
    
    const filter: any = {};
    
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string)
      };
    }
    
    if (country) filter.country = country;

    const analytics = await Analytics.find(filter).sort({ date: 1 });
    
    // Aggregate metrics
    const aggregatedMetrics = analytics.reduce((acc, curr) => {
      acc.visitors += curr.metrics.visitors;
      acc.pageViews += curr.metrics.pageViews;
      acc.enquiries += curr.metrics.enquiries;
      acc.meetings += curr.metrics.meetings;
      acc.conversions += curr.metrics.conversions;
      acc.revenue += curr.metrics.revenue;
      return acc;
    }, {
      visitors: 0,
      pageViews: 0,
      enquiries: 0,
      meetings: 0,
      conversions: 0,
      revenue: 0
    });

    res.json({
      success: true,
      data: {
        dailyData: analytics,
        aggregated: aggregatedMetrics,
        count: analytics.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch analytics by date range',
    });
  }
};

// Get dashboard summary
export const getDashboardSummary = async (req: Request, res: Response) => {
  try {
    const { country } = req.query;
    
    const filter: any = {};
    if (country) filter.country = country;

    // Get today's metrics
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayAnalytics = await Analytics.findOne({
      date: today,
      ...filter
    });

    // Get this week's metrics
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const weekAnalytics = await Analytics.find({
      date: { $gte: weekAgo },
      ...filter
    });

    const weekMetrics = weekAnalytics.reduce((acc, curr) => {
      acc.visitors += curr.metrics.visitors;
      acc.pageViews += curr.metrics.pageViews;
      acc.enquiries += curr.metrics.enquiries;
      acc.meetings += curr.metrics.meetings;
      acc.conversions += curr.metrics.conversions;
      acc.revenue += curr.metrics.revenue;
      return acc;
    }, {
      visitors: 0,
      pageViews: 0,
      enquiries: 0,
      meetings: 0,
      conversions: 0,
      revenue: 0
    });

    // Get this month's metrics
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    
    const monthAnalytics = await Analytics.find({
      date: { $gte: monthAgo },
      ...filter
    });

    const monthMetrics = monthAnalytics.reduce((acc, curr) => {
      acc.visitors += curr.metrics.visitors;
      acc.pageViews += curr.metrics.pageViews;
      acc.enquiries += curr.metrics.enquiries;
      acc.meetings += curr.metrics.meetings;
      acc.conversions += curr.metrics.conversions;
      acc.revenue += curr.metrics.revenue;
      return acc;
    }, {
      visitors: 0,
      pageViews: 0,
      enquiries: 0,
      meetings: 0,
      conversions: 0,
      revenue: 0
    });

    res.json({
      success: true,
      data: {
        today: todayAnalytics?.metrics || {
          visitors: 0,
          pageViews: 0,
          enquiries: 0,
          meetings: 0,
          conversions: 0,
          revenue: 0
        },
        thisWeek: weekMetrics,
        thisMonth: monthMetrics
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch dashboard summary',
    });
  }
};

// Get country-wise analytics
export const getCountryWiseAnalytics = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;
    
    const filter: any = {};
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string)
      };
    }

    const countryAnalytics = await Analytics.aggregate([
      { $match: filter },
      {
        $group: {
          _id: '$country',
          visitors: { $sum: '$metrics.visitors' },
          pageViews: { $sum: '$metrics.pageViews' },
          enquiries: { $sum: '$metrics.enquiries' },
          meetings: { $sum: '$metrics.meetings' },
          conversions: { $sum: '$metrics.conversions' },
          revenue: { $sum: '$metrics.revenue' }
        }
      },
      { $sort: { revenue: -1 } }
    ]);

    res.json({
      success: true,
      data: countryAnalytics,
      count: countryAnalytics.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch country-wise analytics',
    });
  }
};

// Get service-wise analytics
export const getServiceWiseAnalytics = async (req: Request, res: Response) => {
  try {
    const { country, startDate, endDate } = req.query;
    
    const filter: any = {};
    if (country) filter.country = country;
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string)
      };
    }

    const analytics = await Analytics.find(filter);
    
    // Aggregate service metrics
    const serviceMetrics = analytics.reduce((acc, curr) => {
      curr.serviceMetrics.forEach((serviceMetric: any) => {
        if (!acc[serviceMetric.service]) {
          acc[serviceMetric.service] = {
            views: 0,
            enquiries: 0,
            conversions: 0
          };
        }
        acc[serviceMetric.service].views += serviceMetric.views;
        acc[serviceMetric.service].enquiries += serviceMetric.enquiries;
        acc[serviceMetric.service].conversions += serviceMetric.conversions;
      });
      return acc;
    }, {} as Record<string, { views: number; enquiries: number; conversions: number }>);

    const formattedMetrics = Object.entries(serviceMetrics).map(([service, metrics]) => ({
      service,
      views: (metrics as any).views,
      enquiries: (metrics as any).enquiries,
      conversions: (metrics as any).conversions
    }));

    res.json({
      success: true,
      data: formattedMetrics,
      count: formattedMetrics.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch service-wise analytics',
    });
  }
};

// Create/update analytics record
export const upsertAnalytics = async (req: Request, res: Response) => {
  try {
    const { date, country } = req.body;
    
    const analytics = await Analytics.findOneAndUpdate(
      { date: new Date(date), country: country.toUpperCase() },
      req.body,
      { upsert: true, new: true, runValidators: true }
    );
    
    res.json({
      success: true,
      data: analytics,
      message: 'Analytics updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update analytics',
    });
  }
};
