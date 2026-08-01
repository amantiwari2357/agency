import { Router } from "express";
import { createLeadHandler, getLeadsHandler } from "./lead.controller";

const router = Router();

router.get("/", getLeadsHandler);
router.post("/", createLeadHandler);

export default router;
