import { Request, Response } from "express";
import { pricingService } from "./pricing.service";

export function getPricingHandler(req: Request, res: Response) {
  const countryParam = req.params.country || "us";
  const country = Array.isArray(countryParam) ? countryParam[0] : countryParam;
  const plans = pricingService.calculateRegionalPricing(country);
  res.json({ success: true, country: country.toUpperCase(), plans });
}
