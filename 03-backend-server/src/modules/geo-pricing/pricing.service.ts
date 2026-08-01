export class PricingService {
  private basePlans = [
    { id: "starter", name: "Growth Starter", baseUsdPrice: 499 },
    { id: "pro", name: "Scale Pro", baseUsdPrice: 1299 },
    { id: "enterprise", name: "Enterprise Dominance", baseUsdPrice: 2999 },
  ];

  calculateRegionalPricing(countryCode: string) {
    const code = countryCode.toLowerCase();
    let multiplier = 1;
    let currency = "USD";
    let symbol = "$";

    if (code === "uk" || code === "gb") {
      multiplier = 0.79;
      currency = "GBP";
      symbol = "£";
    } else if (code === "ae" || code === "uae") {
      multiplier = 3.67;
      currency = "AED";
      symbol = "AED ";
    } else if (code === "in" || code === "india") {
      multiplier = 83;
      currency = "INR";
      symbol = "₹";
    }

    return this.basePlans.map((plan) => ({
      ...plan,
      currency,
      symbol,
      price: Math.round(plan.baseUsdPrice * multiplier),
    }));
  }
}

export const pricingService = new PricingService();
