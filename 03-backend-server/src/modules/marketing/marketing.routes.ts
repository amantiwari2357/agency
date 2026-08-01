import { Router } from "express";

const router = Router();

router.post("/trigger", (req, res) => {
  const { channel, targetCount } = req.body;
  res.json({
    success: true,
    message: `${channel?.toUpperCase() || "CAMPAIGN"} blast executed to ${targetCount || 5000} targets`,
    reachRate: "99.2%",
    timestamp: new Date().toISOString(),
  });
});

export default router;
