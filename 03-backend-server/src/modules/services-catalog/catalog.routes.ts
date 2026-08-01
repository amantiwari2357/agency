import { Router } from "express";
import { getCatalogHandler } from "./catalog.controller";

const router = Router();

router.get("/", getCatalogHandler);

export default router;
