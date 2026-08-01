import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    data: [
      { id: "app-1", name: "Performance Tech Blazer", category: "Corporate Apparel", price: "$280" },
      { id: "app-2", name: "Minimalist Urban Hoodie", category: "Streetwear & Merch", price: "$110" },
    ],
  });
});

export default router;
