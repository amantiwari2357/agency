import { Request, Response } from "express";
import { leadService } from "./lead.service";

export async function createLeadHandler(req: Request, res: Response) {
  try {
    const { name, email, phone, service } = req.body;
    if (!name || !email) {
      return res.status(400).json({ success: false, message: "Name and Email are required" });
    }
    const lead = await leadService.createLead({ name, email, phone, service });
    res.status(201).json({ success: true, message: "Lead captured successfully", data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error handling lead" });
  }
}

export async function getLeadsHandler(req: Request, res: Response) {
  const leads = await leadService.getAllLeads();
  res.json({ success: true, count: leads.length, data: leads });
}
