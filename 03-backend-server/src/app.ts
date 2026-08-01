import express, { Express } from "express";
import cors from "cors";
import { geoIpMiddleware } from "./middlewares/geoIp";
import { rateLimiterMiddleware } from "./middlewares/rateLimiter";

import catalogRoutes from "./modules/services-catalog/catalog.routes";
import pricingRoutes from "./modules/geo-pricing/pricing.routes";
import leadRoutes from "./modules/leads-management/lead.routes";
import analyticsRoutes from "./modules/analytics-engine/analytics.routes";
import analyticsDashboardRoutes from "./modules/analytics-dashboard/analytics.routes";
import countryRoutes from "./modules/countries/country.routes";
import countryServiceRoutes from "./modules/countries/services/country-service.routes";
import meetingRoutes from "./modules/meetings/meeting.routes";
import enquiryRoutes from "./modules/enquiries/enquiry.routes";
import blogRoutes from "./modules/blogs/blog.routes";
import seoRoutes from "./modules/seo/seo.routes";
import realestateRoutes from "./modules/real-estate/realestate.routes";
import ecommerceRoutes from "./modules/ecommerce/ecommerce.routes";
import cloudRoutes from "./modules/cloud/cloud.routes";
import placementsRoutes from "./modules/placements/placements.routes";
import marketingRoutes from "./modules/marketing/marketing.routes";
const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(geoIpMiddleware);
app.use(rateLimiterMiddleware);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString(), architecture: "Multi-Industry Modular Feature Domain API" });
});

// Domain Feature API Routes
app.use("/api/v1/services", catalogRoutes);
app.use("/api/v1/pricing", pricingRoutes);
app.use("/api/v1/leads", leadRoutes);
app.use("/api/v1/analytics-engine", analyticsRoutes);
app.use("/api/v1/analytics", analyticsDashboardRoutes);
app.use("/api/v1/countries", countryRoutes);
app.use("/api/v1/country-services", countryServiceRoutes);
app.use("/api/v1/meetings", meetingRoutes);
app.use("/api/v1/enquiries", enquiryRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/seo", seoRoutes);

app.use("/api/v1/real-estate", realestateRoutes);
app.use("/api/v1/ecommerce", ecommerceRoutes);
app.use("/api/v1/cloud", cloudRoutes);
app.use("/api/v1/placements", placementsRoutes);
app.use("/api/v1/marketing", marketingRoutes);

export default app;
