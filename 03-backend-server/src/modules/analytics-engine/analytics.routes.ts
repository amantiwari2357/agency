import { Router } from "express";
import { getAnalyticsHandler } from "./analytics.controller";

const router = Router();

router.get("/", getAnalyticsHandler);

export default router;
