// Comprehensive Seed script for MongoDB - Modular Architecture
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';

// ==================== SCHEMAS ====================

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ['admin', 'manager', 'user'], default: 'user' },
  country: String,
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

// Meeting Schema
const meetingSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  duration: Number,
  attendees: [String],
  country: String,
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' },
  meetingLink: String,
  createdBy: String,
  createdAt: { type: Date, default: Date.now }
});

// Enquiry Schema
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  country: String,
  service: String,
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'converted', 'lost'], default: 'new' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  assignedTo: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// SEO Schema
const seoSchema = new mongoose.Schema({
  page: String,
  slug: String,
  pageTitle: String,
  metaTitle: String,
  metaDescription: String,
  metaKeywords: [String],
  ogTitle: String,
  ogDescription: String,
  ogImage: String,
  twitterTitle: String,
  twitterDescription: String,
  twitterImage: String,
  canonicalUrl: String,
  seoContent: String,
  pageContent: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  country: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  excerpt: String,
  author: String,
  category: String,
  tags: [String],
  country: String,
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: [{ author: String, content: String, date: Date }],
  publishedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

// Analytics Schema
const analyticsSchema = new mongoose.Schema({
  date: Date,
  country: String,
  metrics: {
    visitors: Number,
    pageViews: Number,
    enquiries: Number,
    meetings: Number,
    conversions: Number,
    revenue: Number
  },
  serviceMetrics: [{
    service: String,
    views: Number,
    enquiries: Number,
    conversions: Number
  }]
});

// Service Schema (expanded)
const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  countries: [String],
  pricing: {
    base: Number,
    currency: String
  },
  status: { type: String, enum: ['active', 'inactive', 'maintenance'], default: 'active' }
});

// Create Models
const User = mongoose.model('User', userSchema);
const Meeting = mongoose.model('Meeting', meetingSchema);
const Enquiry = mongoose.model('Enquiry', enquirySchema);
const Blog = mongoose.model('Blog', blogSchema);
const Analytics = mongoose.model('Analytics', analyticsSchema);
const Service = mongoose.model('Service', serviceSchema);
const SEO = mongoose.model('SEO', seoSchema);

// ==================== MOCK DATA ====================

const users = [
  { name: 'Admin User', email: 'admin@agency.com', role: 'admin', country: 'us', status: 'active' },
  { name: 'John Manager', email: 'john@agency.com', role: 'manager', country: 'uk', status: 'active' },
  { name: 'Sarah User', email: 'sarah@agency.com', role: 'user', country: 'in', status: 'active' },
  { name: 'Mike User', email: 'mike@agency.com', role: 'user', country: 'ae', status: 'active' },
  { name: 'Emma Manager', email: 'emma@agency.com', role: 'manager', country: 'de', status: 'active' }
];

const meetings = [
  {
    title: 'Q4 Strategy Meeting',
    description: 'Discuss Q4 marketing strategy and targets',
    date: new Date('2024-02-15T10:00:00Z'),
    duration: 60,
    attendees: ['admin@agency.com', 'john@agency.com', 'sarah@agency.com'],
    country: 'us',
    status: 'scheduled',
    meetingLink: 'https://meet.google.com/abc-defg-hij',
    createdBy: 'admin@agency.com'
  },
  {
    title: 'Client Onboarding - TechCorp',
    description: 'Onboarding meeting for new enterprise client',
    date: new Date('2024-02-18T14:00:00Z'),
    duration: 45,
    attendees: ['john@agency.com', 'emma@agency.com'],
    country: 'uk',
    status: 'scheduled',
    meetingLink: 'https://zoom.us/j/123456789',
    createdBy: 'john@agency.com'
  },
  {
    title: 'Product Launch Review',
    description: 'Review of new product launch performance',
    date: new Date('2024-02-10T11:00:00Z'),
    duration: 90,
    attendees: ['admin@agency.com', 'emma@agency.com', 'mike@agency.com'],
    country: 'de',
    status: 'completed',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/xyz',
    createdBy: 'admin@agency.com'
  },
  {
    title: 'Sales Team Weekly',
    description: 'Weekly sales performance review',
    date: new Date('2024-02-20T09:00:00Z'),
    duration: 30,
    attendees: ['john@agency.com', 'sarah@agency.com'],
    country: 'in',
    status: 'scheduled',
    meetingLink: 'https://meet.google.com/xyz-abcd-efg',
    createdBy: 'john@agency.com'
  }
];

const enquiries = [
  {
    name: 'Rahul Sharma',
    email: 'rahul@company.com',
    phone: '+91 9876543210',
    subject: 'Web Development Inquiry',
    message: 'We need a comprehensive e-commerce website for our business. Looking for full-stack development services.',
    country: 'in',
    service: 'Web Development',
    status: 'new',
    priority: 'high',
    assignedTo: 'john@agency.com'
  },
  {
    name: 'Emily Johnson',
    email: 'emily@techcorp.com',
    phone: '+1 2345678901',
    subject: 'Mobile App Development',
    message: 'Interested in developing a cross-platform mobile app for our startup.',
    country: 'us',
    service: 'Mobile App',
    status: 'contacted',
    priority: 'medium',
    assignedTo: 'sarah@agency.com'
  },
  {
    name: 'Ahmed Al-Rashid',
    email: 'ahmed@business.ae',
    phone: '+971 501234567',
    subject: 'SEO Services',
    message: 'Need SEO optimization for our UAE-based e-commerce platform.',
    country: 'ae',
    service: 'SEO Optimization',
    status: 'qualified',
    priority: 'high',
    assignedTo: 'emma@agency.com'
  },
  {
    name: 'Hans Mueller',
    email: 'hans@company.de',
    phone: '+49 1234567890',
    subject: 'Cloud Infrastructure',
    message: 'Looking for cloud migration services for our enterprise systems.',
    country: 'de',
    service: 'Cloud Services',
    status: 'new',
    priority: 'medium',
    assignedTo: 'john@agency.com'
  },
  {
    name: 'Priya Patel',
    email: 'priya@startup.in',
    phone: '+91 8765432109',
    subject: 'Digital Marketing',
    message: 'Need comprehensive digital marketing strategy for our new product launch.',
    country: 'in',
    service: 'Digital Marketing',
    status: 'converted',
    priority: 'high',
    assignedTo: 'sarah@agency.com'
  }
];

const blogs = [
  {
    title: '10 Web Development Trends for 2024',
    slug: 'web-development-trends-2024',
    content: 'The web development landscape is constantly evolving. Here are the top trends to watch in 2024...',
    excerpt: 'Discover the latest web development trends that will shape the industry in 2024.',
    author: 'Sarah User',
    category: 'Technology',
    tags: ['Web Development', 'Technology', 'Trends'],
    country: 'us',
    status: 'published',
    views: 1250,
    likes: 89,
    comments: [
      { author: 'John Manager', content: 'Great insights on AI integration!', date: new Date('2024-01-20') },
      { author: 'Mike User', content: 'Very helpful for our team planning.', date: new Date('2024-01-21') }
    ],
    publishedAt: new Date('2024-01-15')
  },
  {
    title: 'Mobile App UX Best Practices',
    slug: 'mobile-app-ux-best-practices',
    content: 'User experience is crucial for mobile app success. Learn the best practices for creating intuitive mobile interfaces...',
    excerpt: 'Essential UX principles for creating successful mobile applications.',
    author: 'Emma Manager',
    category: 'Mobile',
    tags: ['UX', 'Mobile App', 'Design'],
    country: 'uk',
    status: 'published',
    views: 890,
    likes: 67,
    comments: [
      { author: 'Sarah User', content: 'These tips are exactly what we needed!', date: new Date('2024-01-18') }
    ],
    publishedAt: new Date('2024-01-12')
  },
  {
    title: 'Cloud Migration Strategy Guide',
    slug: 'cloud-migration-strategy-guide',
    content: 'Planning to migrate to the cloud? This comprehensive guide covers everything you need to know...',
    excerpt: 'A step-by-step guide for successful cloud migration for enterprises.',
    author: 'John Manager',
    category: 'Cloud',
    tags: ['Cloud', 'Migration', 'Enterprise'],
    country: 'de',
    status: 'published',
    views: 1567,
    likes: 124,
    comments: [],
    publishedAt: new Date('2024-01-10')
  },
  {
    title: 'SEO Tips for Local Businesses',
    slug: 'seo-tips-local-businesses',
    content: 'Local SEO is essential for businesses targeting specific geographic areas...',
    excerpt: 'Boost your local visibility with these proven SEO strategies.',
    author: 'Sarah User',
    category: 'Marketing',
    tags: ['SEO', 'Local Business', 'Marketing'],
    country: 'in',
    status: 'draft',
    views: 0,
    likes: 0,
    comments: [],
    publishedAt: null
  },
  {
    title: 'AI in Web Development',
    slug: 'ai-in-web-development',
    content: 'Artificial Intelligence is revolutionizing web development. Learn how to leverage AI tools...',
    excerpt: 'Explore how AI is transforming the web development landscape.',
    author: 'Mike User',
    category: 'Technology',
    tags: ['AI', 'Web Development', 'Innovation'],
    country: 'ae',
    status: 'published',
    views: 2100,
    likes: 189,
    comments: [
      { author: 'Emma Manager', content: 'Fascinating look at AI integration!', date: new Date('2024-01-22') },
      { author: 'John Manager', content: 'We should implement some of these tools.', date: new Date('2024-01-23') }
    ],
    publishedAt: new Date('2024-01-08')
  }
];

const analyticsData: any[] = [];
const countries = ['us', 'uk', 'in', 'ae', 'de'];
const serviceTypes = ['Web Development', 'Mobile App', 'SEO Optimization', 'Cloud Services', 'Digital Marketing'];

// Generate analytics data for last 30 days
for (let i = 0; i < 30; i++) {
  const date = new Date();
  date.setDate(date.getDate() - i);

  countries.forEach(country => {
    analyticsData.push({
      date: new Date(date),
      country: country,
      metrics: {
        visitors: Math.floor(Math.random() * 500) + 100,
        pageViews: Math.floor(Math.random() * 2000) + 500,
        enquiries: Math.floor(Math.random() * 20) + 1,
        meetings: Math.floor(Math.random() * 5),
        conversions: Math.floor(Math.random() * 10) + 1,
        revenue: Math.floor(Math.random() * 5000) + 1000
      },
      serviceMetrics: serviceTypes.map(service => ({
        service: service,
        views: Math.floor(Math.random() * 500) + 50,
        enquiries: Math.floor(Math.random() * 10),
        conversions: Math.floor(Math.random() * 5)
      }))
    });
  });
}

const serviceList = [
  {
    name: 'Web Development',
    description: 'Full-stack web application development with modern frameworks',
    category: 'Development',
    countries: ['us', 'uk', 'in', 'ae', 'de'],
    pricing: { base: 2999, currency: 'USD' },
    status: 'active'
  },
  {
    name: 'Mobile App',
    description: 'Cross-platform mobile application development',
    category: 'Mobile',
    countries: ['us', 'uk', 'in'],
    pricing: { base: 4999, currency: 'USD' },
    status: 'active'
  },
  {
    name: 'SEO Optimization',
    description: 'Search engine optimization to boost organic traffic',
    category: 'Marketing',
    countries: ['us', 'uk', 'in', 'ae'],
    pricing: { base: 999, currency: 'USD' },
    status: 'active'
  },
  {
    name: 'Cloud Services',
    description: 'Cloud infrastructure setup and management',
    category: 'Cloud',
    countries: ['us', 'de', 'ae'],
    pricing: { base: 1999, currency: 'USD' },
    status: 'active'
  },
  {
    name: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies',
    category: 'Marketing',
    countries: ['us', 'uk', 'in', 'de'],
    pricing: { base: 1499, currency: 'USD' },
    status: 'active'
  }
];

const seoData = [
  {
    page: 'home',
    slug: 'home',
    pageTitle: 'Home - Aexagenvcy Agency',
    metaTitle: 'Aexagenvcy Agency - Digital Solutions for Your Business',
    metaDescription: 'Transform your business with our comprehensive digital solutions including web development, mobile apps, SEO, and cloud services.',
    metaKeywords: ['web development', 'mobile apps', 'SEO', 'cloud services', 'digital marketing', 'agency'],
    ogTitle: 'Aexagenvcy Agency - Digital Solutions',
    ogDescription: 'Leading digital agency providing comprehensive solutions for businesses worldwide.',
    ogImage: '/images/og-home.jpg',
    twitterTitle: 'Aexagenvcy Agency',
    twitterDescription: 'Transform your business with our digital solutions.',
    twitterImage: '/images/twitter-home.jpg',
    canonicalUrl: 'https://aexagenvcy.com',
    seoContent: 'We are a leading digital agency specializing in web development, mobile applications, SEO optimization, cloud services, and digital marketing strategies. Our team of experts delivers customized solutions to help businesses grow and succeed in the digital landscape.',
    pageContent: 'Welcome to Aexagenvcy Agency - Your trusted partner for digital transformation. We offer comprehensive services including web development, mobile app development, SEO optimization, cloud infrastructure, and digital marketing.',
    status: 'active',
    country: 'global'
  },
  {
    page: 'countries',
    slug: 'countries',
    pageTitle: 'Countries We Serve - Aexagenvcy Agency',
    metaTitle: 'Global Services - Aexagenvcy Agency',
    metaDescription: 'We serve clients across 24+ countries worldwide. Find our presence in your region and connect with our local teams.',
    metaKeywords: ['global services', 'international agency', 'worldwide digital solutions', 'country presence'],
    ogTitle: 'Global Services - Aexagenvcy Agency',
    ogDescription: 'Serving clients across 24+ countries worldwide.',
    ogImage: '/images/og-countries.jpg',
    twitterTitle: 'Global Services',
    twitterDescription: 'We serve clients across 24+ countries worldwide.',
    twitterImage: '/images/twitter-countries.jpg',
    canonicalUrl: 'https://aexagenvcy.com/countries',
    seoContent: 'Aexagenvcy Agency has a strong global presence with operations in 24+ countries including USA, UK, India, UAE, Germany, and more. Our local teams understand regional markets and deliver customized solutions.',
    pageContent: 'We serve clients across 24+ countries with local teams providing region-specific digital solutions.',
    status: 'active',
    country: 'global'
  },
  {
    page: 'services',
    slug: 'services',
    pageTitle: 'Our Services - Aexagenvcy Agency',
    metaTitle: 'Digital Services - Web Development, Mobile Apps, SEO | Aexagenvcy',
    metaDescription: 'Comprehensive digital services including web development, mobile app development, SEO optimization, cloud services, and digital marketing.',
    metaKeywords: ['web development', 'mobile apps', 'SEO', 'cloud services', 'digital marketing', 'IT consulting'],
    ogTitle: 'Our Services - Aexagenvcy Agency',
    ogDescription: 'Comprehensive digital services for your business needs.',
    ogImage: '/images/og-services.jpg',
    twitterTitle: 'Our Services',
    twitterDescription: 'Web development, mobile apps, SEO, cloud services, and more.',
    twitterImage: '/images/twitter-services.jpg',
    canonicalUrl: 'https://aexagenvcy.com/services',
    seoContent: 'We offer a complete range of digital services including web development (React, Angular, Node.js), mobile app development (iOS, Android, React Native), SEO optimization, cloud infrastructure (AWS, Azure, GCP), and digital marketing strategies.',
    pageContent: 'Our comprehensive services include web development, mobile app development, SEO optimization, cloud services, and digital marketing.',
    status: 'active',
    country: 'global'
  },
  {
    page: 'crm',
    slug: 'crm',
    pageTitle: 'CRM Solutions - Aexagenvcy Agency',
    metaTitle: 'CRM Management System - Aexagenvcy Agency',
    metaDescription: 'Powerful CRM solutions to manage your customer relationships, track leads, and optimize your sales pipeline.',
    metaKeywords: ['CRM', 'customer relationship management', 'sales automation', 'lead management', 'business software'],
    ogTitle: 'CRM Solutions - Aexagenvcy Agency',
    ogDescription: 'Powerful CRM solutions for your business.',
    ogImage: '/images/og-crm.jpg',
    twitterTitle: 'CRM Solutions',
    twitterDescription: 'Manage customer relationships effectively.',
    twitterImage: '/images/twitter-crm.jpg',
    canonicalUrl: 'https://aexagenvcy.com/crm',
    seoContent: 'Our CRM solutions help businesses manage customer relationships, track leads, automate sales processes, and improve customer satisfaction. Features include contact management, sales pipeline tracking, analytics, and integrations.',
    pageContent: 'Comprehensive CRM solutions for managing customer relationships and optimizing sales processes.',
    status: 'active',
    country: 'global'
  },
  {
    page: 'contact',
    slug: 'contact',
    pageTitle: 'Contact Us - Aexagenvcy Agency',
    metaTitle: 'Get in Touch - Aexagenvcy Agency',
    metaDescription: 'Contact Aexagenvcy Agency for your digital transformation needs. Reach out to our team for consultations and inquiries.',
    metaKeywords: ['contact', 'get in touch', 'consultation', 'support', 'customer service'],
    ogTitle: 'Contact Us - Aexagenvcy Agency',
    ogDescription: 'Get in touch with our team for consultations.',
    ogImage: '/images/og-contact.jpg',
    twitterTitle: 'Contact Us',
    twitterDescription: 'Reach out to our team for your digital needs.',
    twitterImage: '/images/twitter-contact.jpg',
    canonicalUrl: 'https://aexagenvcy.com/contact',
    seoContent: 'Contact Aexagenvcy Agency for professional digital services. Our team is available 24/7 to assist with your web development, mobile app, SEO, and digital marketing needs. Multiple contact options available.',
    pageContent: 'Get in touch with our team for professional digital services and consultations.',
    status: 'active',
    country: 'global'
  },
  {
    page: 'about',
    slug: 'about',
    pageTitle: 'About Us - Aexagenvcy Agency',
    metaTitle: 'About Aexagenvcy Agency - Digital Excellence',
    metaDescription: 'Learn about Aexagenvcy Agency, our mission, team, and commitment to delivering exceptional digital solutions.',
    metaKeywords: ['about us', 'company profile', 'our team', 'mission', 'vision', 'values'],
    ogTitle: 'About Us - Aexagenvcy Agency',
    ogDescription: 'Learn about our mission and commitment to excellence.',
    ogImage: '/images/og-about.jpg',
    twitterTitle: 'About Us',
    twitterDescription: 'Digital excellence delivered by our expert team.',
    twitterImage: '/images/twitter-about.jpg',
    canonicalUrl: 'https://aexagenvcy.com/about',
    seoContent: 'Aexagenvcy Agency is a leading digital solutions provider with a mission to transform businesses through innovative technology. Our team of experts brings years of experience in web development, mobile apps, SEO, and digital marketing.',
    pageContent: 'Learn about our mission, vision, and the team behind Aexagenvcy Agency.',
    status: 'active',
    country: 'global'
  },
  {
    page: 'blog',
    slug: 'blog',
    pageTitle: 'Blog - Aexagenvcy Agency',
    metaTitle: 'Digital Insights & Trends - Aexagenvcy Agency Blog',
    metaDescription: 'Stay updated with the latest digital trends, insights, and best practices from our expert team at Aexagenvcy Agency.',
    metaKeywords: ['blog', 'digital trends', 'insights', 'technology news', 'best practices', 'tutorials'],
    ogTitle: 'Blog - Aexagenvcy Agency',
    ogDescription: 'Latest digital insights and trends from our experts.',
    ogImage: '/images/og-blog.jpg',
    twitterTitle: 'Blog',
    twitterDescription: 'Stay updated with digital trends and insights.',
    twitterImage: '/images/twitter-blog.jpg',
    canonicalUrl: 'https://aexagenvcy.com/blog',
    seoContent: 'Our blog features the latest insights on web development, mobile apps, SEO, cloud services, and digital marketing. Stay informed about industry trends, best practices, and emerging technologies.',
    pageContent: 'Explore our blog for the latest digital insights, trends, and expert opinions.',
    status: 'active',
    country: 'global'
  }
];

// ==================== SEED FUNCTION ====================

async function seed() {
  try {
    console.log('🌱 Starting database seed...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany({});
    await Meeting.deleteMany({});
    await Enquiry.deleteMany({});
    await Blog.deleteMany({});
    await Analytics.deleteMany({});
    await Service.deleteMany({});
    await SEO.deleteMany({});

    // Insert mock data
    console.log('📊 Inserting users...');
    await User.insertMany(users);
    console.log(`✅ Inserted ${users.length} users`);

    console.log('📅 Inserting meetings...');
    await Meeting.insertMany(meetings);
    console.log(`✅ Inserted ${meetings.length} meetings`);

    console.log('📧 Inserting enquiries...');
    await Enquiry.insertMany(enquiries);
    console.log(`✅ Inserted ${enquiries.length} enquiries`);

    console.log('📝 Inserting blogs...');
    await Blog.insertMany(blogs);
    console.log(`✅ Inserted ${blogs.length} blogs`);

    console.log('📈 Inserting analytics data...');
    await Analytics.insertMany(analyticsData);
    console.log(`✅ Inserted ${analyticsData.length} analytics records`);

    console.log('⚙️  Inserting services...');
    await Service.insertMany(serviceList);
    console.log(`✅ Inserted ${serviceList.length} services`);

    console.log('🔍 Inserting SEO data...');
    await SEO.insertMany(seoData);
    console.log(`✅ Inserted ${seoData.length} SEO records`);

    console.log('🎉 Seed data inserted successfully!');
    console.log('📊 Summary:');
    console.log(`   - Users: ${users.length}`);
    console.log(`   - Meetings: ${meetings.length}`);
    console.log(`   - Enquiries: ${enquiries.length}`);
    console.log(`   - Blogs: ${blogs.length}`);
    console.log(`   - Analytics records: ${analyticsData.length}`);
    console.log(`   - Services: ${serviceList.length}`);
    console.log(`   - SEO records: ${seoData.length}`);

    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ Seed error:', error);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seed();
