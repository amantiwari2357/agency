import { Router } from "express";
import { getPricingHandler } from "./pricing.controller";

const router = Router();

router.get("/:country?", getPricingHandler);

export default router;
