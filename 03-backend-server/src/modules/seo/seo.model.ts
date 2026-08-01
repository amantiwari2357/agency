import mongoose, { Schema, Document } from 'mongoose';

export interface ISEO extends Document {
  page: string;
  slug: string;
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
  seoContent: string;
  pageContent: string;
  status: 'active' | 'inactive';
  country: string;
  createdAt: Date;
  updatedAt: Date;
}

const SEOSchema = new Schema<ISEO>(
  {
    page: {
      type: String,
      required: true,
      unique: true,
      enum: ['home', 'countries', 'services', 'crm', 'contact', 'about', 'blog', 'custom']
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    pageTitle: {
      type: String,
      required: true,
      default: ''
    },
    metaTitle: {
      type: String,
      required: true,
      default: ''
    },
    metaDescription: {
      type: String,
      required: true,
      default: ''
    },
    metaKeywords: [{
      type: String
    }],
    ogTitle: {
      type: String,
      default: ''
    },
    ogDescription: {
      type: String,
      default: ''
    },
    ogImage: {
      type: String,
      default: ''
    },
    twitterTitle: {
      type: String,
      default: ''
    },
    twitterDescription: {
      type: String,
      default: ''
    },
    twitterImage: {
      type: String,
      default: ''
    },
    canonicalUrl: {
      type: String,
      default: ''
    },
    seoContent: {
      type: String,
      default: ''
    },
    pageContent: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    country: {
      type: String,
      default: 'global'
    }
  },
  {
    timestamps: true
  }
);

// Index for faster queries
SEOSchema.index({ page: 1, country: 1 });
SEOSchema.index({ slug: 1 });

export default mongoose.model<ISEO>('SEO', SEOSchema);
