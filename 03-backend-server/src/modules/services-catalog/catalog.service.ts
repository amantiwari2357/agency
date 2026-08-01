import { catalogModel, CatalogItem } from "./catalog.model";

export class CatalogService {
  async getCatalog(categoryFilter?: string): Promise<CatalogItem[]> {
    const all = await catalogModel.findAll();
    if (categoryFilter) {
      return all.filter(
        (item) => item.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    return all;
  }
}

export const catalogService = new CatalogService();
