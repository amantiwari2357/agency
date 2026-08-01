// src/routes/services.ts
import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';

// Simple Service schema (matches seed data)
const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
});
const Service = mongoose.model('Service', serviceSchema);

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error('Error fetching services', err);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

export default router;
