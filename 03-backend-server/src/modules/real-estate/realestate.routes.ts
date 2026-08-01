import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    data: [
      { id: "prop-1", title: "Luxurious Glass Villa", location: "Beverly Hills / Palm Jumeirah", price: "$4,250,000", beds: 5 },
      { id: "prop-2", title: "Skyline Penthouse Suites", location: "Downtown Commercial District", price: "$1,890,000", beds: 3 },
    ],
  });
});

export default router;
