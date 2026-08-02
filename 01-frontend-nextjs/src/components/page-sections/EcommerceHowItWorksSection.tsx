"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Package, ShoppingCart, CreditCard, Truck, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: "1. Product Catalog Setup",
    description: "Upload your product inventory with images, variants, sizes, and pricing. Our AI will auto-generate descriptions and tags."
  },
  {
    icon: ShoppingCart,
    title: "2. Store Configuration",
    description: "Customize your storefront with your branding, set up payment gateways, and configure shipping rules."
  },
  {
    icon: CreditCard,
    title: "3. Payment Integration",
    description: "Connect multiple payment providers including Stripe, PayPal, and local payment methods for seamless checkout."
  },
  {
    icon: Truck,
    title: "4. Shipping Setup",
    description: "Configure shipping zones, rates, and carrier integrations. Enable real-time shipping calculations at checkout."
  },
  {
    icon: BarChart3,
    title: "5. Analytics & Marketing",
    description: "Set up tracking pixels, email marketing automation, and customer segmentation for targeted campaigns."
  },
  {
    icon: CheckCircle,
    title: "6. Go Live & Scale",
    description: "Launch your store with confidence. Monitor performance, optimize conversions, and scale your operations."
  }
];

export default function EcommerceHowItWorksSection() {
  return (
    <section className="py-16 bg-[#eef0f4] rounded-3xl border border-[#4d7cf5]/30 p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">How It Works</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Launch your fashion e-commerce store in 6 simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="bg-white rounded-xl p-6 border border-[#4d7cf5]/20 hover:border-[#4d7cf5] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4d7cf5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1c1f26] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4a5060] leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[#4d7cf5]" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
