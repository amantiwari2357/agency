import { Router } from "express";

const router = Router();

router.get("/status", (req, res) => {
  res.json({
    success: true,
    uptime: "99.99%",
    nodes: [
      { region: "us-east-1", status: "ACTIVE", latencyMs: 12 },
      { region: "eu-west-2", status: "ACTIVE", latencyMs: 18 },
      { region: "ap-south-1", status: "ACTIVE", latencyMs: 24 },
    ],
  });
});

export default router;
