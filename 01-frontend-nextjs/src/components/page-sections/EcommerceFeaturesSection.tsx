"use client";

import { motion } from 'framer-motion';
import { ShoppingBag, Package, Truck, CreditCard, BarChart3, Users, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: "Multi-Channel Inventory Sync",
    description: "Real-time inventory synchronization across your website, marketplaces, and physical stores to prevent overselling."
  },
  {
    icon: Package,
    title: "Smart Size Recommendations",
    description: "AI-powered size suggestions based on customer data and return patterns to reduce returns by up to 40%."
  },
  {
    icon: Truck,
    title: "Automated Shipping Management",
    description: "Integration with major carriers for real-time rates, label generation, and shipment tracking."
  },
  {
    icon: CreditCard,
    title: "Multi-Currency Payments",
    description: "Accept payments in 50+ currencies with automatic conversion and localized checkout experience."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Real-time insights on sales, inventory, customer behavior, and conversion funnels."
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description: "AI-driven customer segmentation for personalized marketing and targeted promotions."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive design optimized for mobile shopping with progressive web app capabilities."
  },
  {
    icon: Zap,
    title: "Lightning Fast Checkout",
    description: "One-page checkout with saved addresses, express payment options, and guest checkout."
  }
];

export default function EcommerceFeaturesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Complete E-Commerce Solution</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to run a successful online fashion retail business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="h-full bg-white rounded-xl border border-[#4d7cf5]/30 p-6 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#4d7cf5]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#4d7cf5]" />
              </div>
              <h3 className="text-lg font-bold text-[#1c1f26] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#4a5060] leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
