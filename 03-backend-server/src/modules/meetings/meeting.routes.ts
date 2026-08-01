import { Router } from 'express';
import {
  getAllMeetings,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  getUpcomingMeetings,
  updateMeetingStatus,
} from './meeting.controller';

const router = Router();

// Public routes
router.get('/', getAllMeetings);
router.get('/upcoming', getUpcomingMeetings);
router.get('/:id', getMeetingById);

// Admin routes (should be protected with auth middleware in production)
router.post('/', createMeeting);
router.put('/:id', updateMeeting);
router.patch('/:id/status', updateMeetingStatus);
router.delete('/:id', deleteMeeting);

export default router;
