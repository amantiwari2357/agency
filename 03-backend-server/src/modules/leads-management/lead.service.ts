export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
}

export class LeadService {
  private leads: (LeadPayload & { id: string; createdAt: Date })[] = [
    { id: "lead-1", name: "Metro Retail Shop", email: "contact@metro.com", phone: "+1 555-0192", service: "Shop POS", createdAt: new Date() },
    { id: "lead-2", name: "City Library Archive", email: "info@citylib.org", phone: "+44 20 7946", service: "Library OPAC", createdAt: new Date() },
  ];

  async createLead(data: LeadPayload) {
    const newLead = {
      id: `lead-${Date.now()}`,
      ...data,
      createdAt: new Date(),
    };
    this.leads.unshift(newLead);
    return newLead;
  }

  async getAllLeads() {
    return this.leads;
  }
}

export const leadService = new LeadService();
