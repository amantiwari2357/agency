import { Request, Response } from "express";
import { analyticsService } from "./analytics.service";

export async function getAnalyticsHandler(req: Request, res: Response) {
  const metrics = await analyticsService.getLiveMetrics();
  res.json({ success: true, data: metrics });
}
