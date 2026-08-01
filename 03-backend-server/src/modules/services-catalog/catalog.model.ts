export interface CatalogItem {
  id: string;
  title: string;
  category: "Shop" | "Library" | "Enterprise" | "SEO";
  description: string;
  deliverables: string[];
}

export const catalogModel = {
  findAll: async (): Promise<CatalogItem[]> => {
    return [
      {
        id: "srv-1",
        title: "Enterprise Technical SEO",
        category: "SEO",
        description: "Full audit, schema injection, speed optimization & keyword indexing.",
        deliverables: ["Core Web Vitals 95+", "Schema markup", "Weekly keyword tracker"],
      },
      {
        id: "srv-2",
        title: "Local Shops POS & Digital Catalog",
        category: "Shop",
        description: "Turnkey local inventory sync with Google Maps & POS.",
        deliverables: ["Google Local 3-Pack", "WhatsApp Direct Order", "POS Inventory Webhook"],
      },
      {
        id: "srv-3",
        title: "Library Archival OPAC Schema",
        category: "Library",
        description: "High-speed book reservation and archival indexing.",
        deliverables: ["MARC21 / OPAC Schema", "Member Portal", "Digital Book Reservation"],
      },
    ];
  },
};
