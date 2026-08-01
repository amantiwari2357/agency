import { Request, Response, NextFunction } from "express";

export interface GeoRequest extends Request {
  country?: string;
}

export function geoIpMiddleware(req: GeoRequest, res: Response, next: NextFunction) {
  const countryHeader = req.headers["x-country"] || "us";
  req.country = String(countryHeader).toLowerCase();
  next();
}
