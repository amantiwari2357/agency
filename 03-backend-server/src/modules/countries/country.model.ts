import mongoose, { Schema, Document } from 'mongoose';

export interface ICountry extends Document {
  code: string;
  name: string;
  flag: string;
  currency: string;
  language: string;
  timezone: string;
  trending: boolean;
  region: string;
  isActive: boolean;
  settings: {
    taxRate: number;
    shippingCost: number;
    supportPhone: string;
    supportEmail: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const CountrySchema: Schema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    flag: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      uppercase: true,
    },
    language: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    trending: {
      type: Boolean,
      default: false,
    },
    region: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    settings: {
      taxRate: {
        type: Number,
        default: 0,
      },
      shippingCost: {
        type: Number,
        default: 0,
      },
      supportPhone: {
        type: String,
        default: '',
      },
      supportEmail: {
        type: String,
        default: '',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
CountrySchema.index({ code: 1 });
CountrySchema.index({ region: 1 });
CountrySchema.index({ trending: 1 });

export default mongoose.models.Country || mongoose.model<ICountry>('Country', CountrySchema);
