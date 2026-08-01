import { Request, Response } from 'express';
import Meeting from './meeting.model';

// Get all meetings
export const getAllMeetings = async (req: Request, res: Response) => {
  try {
    const { country, status, startDate, endDate } = req.query;
    
    const filter: any = {};
    
    if (country) filter.country = country;
    if (status) filter.status = status;
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string)
      };
    }

    const meetings = await Meeting.find(filter).sort({ date: 1 });
    res.json({
      success: true,
      data: meetings,
      count: meetings.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch meetings',
    });
  }
};

// Get meeting by ID
export const getMeetingById = async (req: Request, res: Response) => {
  try {
    const meeting = await Meeting.findById(req.params.id);
    
    if (!meeting) {
      return res.status(404).json({
        success: false,
        error: 'Meeting not found',
      });
    }
    
    res.json({
      success: true,
      data: meeting,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch meeting',
    });
  }
};

// Create new meeting
export const createMeeting = async (req: Request, res: Response) => {
  try {
    const meeting = new Meeting(req.body);
    await meeting.save();
    
    res.status(201).json({
      success: true,
      data: meeting,
      message: 'Meeting created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create meeting',
    });
  }
};

// Update meeting
export const updateMeeting = async (req: Request, res: Response) => {
  try {
    const meeting = await Meeting.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!meeting) {
      return res.status(404).json({
        success: false,
        error: 'Meeting not found',
      });
    }
    
    res.json({
      success: true,
      data: meeting,
      message: 'Meeting updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update meeting',
    });
  }
};

// Delete meeting
export const deleteMeeting = async (req: Request, res: Response) => {
  try {
    const meeting = await Meeting.findByIdAndDelete(req.params.id);
    
    if (!meeting) {
      return res.status(404).json({
        success: false,
        error: 'Meeting not found',
      });
    }
    
    res.json({
      success: true,
      message: 'Meeting deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete meeting',
    });
  }
};

// Get upcoming meetings
export const getUpcomingMeetings = async (req: Request, res: Response) => {
  try {
    const { country } = req.query;
    const filter: any = {
      date: { $gte: new Date() },
      status: 'scheduled'
    };
    
    if (country) filter.country = country;

    const meetings = await Meeting.find(filter).sort({ date: 1 }).limit(10);
    res.json({
      success: true,
      data: meetings,
      count: meetings.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch upcoming meetings',
    });
  }
};

// Update meeting status
export const updateMeetingStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const meeting = await Meeting.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!meeting) {
      return res.status(404).json({
        success: false,
        error: 'Meeting not found',
      });
    }
    
    res.json({
      success: true,
      data: meeting,
      message: 'Meeting status updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update meeting status',
    });
  }
};
