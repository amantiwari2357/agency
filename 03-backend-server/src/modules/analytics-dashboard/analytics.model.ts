import mongoose, { Schema, Document } from 'mongoose';

export interface IAnalytics extends Document {
  date: Date;
  country: string;
  metrics: {
    visitors: number;
    pageViews: number;
    enquiries: number;
    meetings: number;
    conversions: number;
    revenue: number;
  };
  serviceMetrics: Array<{
    service: string;
    views: number;
    enquiries: number;
    conversions: number;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const AnalyticsSchema: Schema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    country: {
      type: String,
      required: true,
      uppercase: true,
    },
    metrics: {
      visitors: { type: Number, default: 0 },
      pageViews: { type: Number, default: 0 },
      enquiries: { type: Number, default: 0 },
      meetings: { type: Number, default: 0 },
      conversions: { type: Number, default: 0 },
      revenue: { type: Number, default: 0 },
    },
    serviceMetrics: [{
      service: { type: String, required: true },
      views: { type: Number, default: 0 },
      enquiries: { type: Number, default: 0 },
      conversions: { type: Number, default: 0 },
    }],
  },
  {
    timestamps: true,
  }
);

AnalyticsSchema.index({ date: 1 });
AnalyticsSchema.index({ country: 1 });
AnalyticsSchema.index({ date: 1, country: 1 });

export default mongoose.models.Analytics || mongoose.model<IAnalytics>('Analytics', AnalyticsSchema);
