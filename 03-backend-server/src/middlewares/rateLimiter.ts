import { Request, Response, NextFunction } from "express";

export function rateLimiterMiddleware(req: Request, res: Response, next: NextFunction) {
  // Simple rate limiter middleware
  next();
}
