import { Router } from "express";

const router = Router();

router.get("/stats", (req, res) => {
  res.json({
    success: true,
    studentsPlaced: 14800,
    hiringPartners: 650,
    highestPackage: "$180,000",
    placementRate: "96.4%",
  });
});

export default router;
