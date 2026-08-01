import mongoose, { Schema, Document } from 'mongoose';

export interface IMeeting extends Document {
  title: string;
  description: string;
  date: Date;
  duration: number;
  attendees: string[];
  country: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  meetingLink: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const MeetingSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      default: 60,
    },
    attendees: [{
      type: String,
      required: true,
    }],
    country: {
      type: String,
      required: true,
      uppercase: true,
    },
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    meetingLink: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

MeetingSchema.index({ date: 1 });
MeetingSchema.index({ country: 1 });
MeetingSchema.index({ status: 1 });

export default mongoose.models.Meeting || mongoose.model<IMeeting>('Meeting', MeetingSchema);
