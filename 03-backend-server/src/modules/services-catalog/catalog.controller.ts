import { Request, Response } from "express";
import { catalogService } from "./catalog.service";

export async function getCatalogHandler(req: Request, res: Response) {
  try {
    const category = req.query.category as string | undefined;
    const items = await catalogService.getCatalog(category);
    res.json({ success: true, count: items.length, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
