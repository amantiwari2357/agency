"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, MessageSquare, BarChart3, Target, Zap } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: "1. Audience Setup",
    description: "Import your customer data and create segmented audiences based on behavior, demographics, and preferences."
  },
  {
    icon: MessageSquare,
    title: "2. Channel Integration",
    description: "Connect WhatsApp Business, email, SMS, and social media channels for unified communication."
  },
  {
    icon: Target,
    title: "3. Campaign Design",
    description: "Create multi-channel campaigns with our visual builder and A/B test different variations."
  },
  {
    icon: BarChart3,
    title: "4. Launch & Monitor",
    description: "Deploy campaigns and monitor performance in real-time with detailed analytics dashboards."
  },
  {
    icon: Zap,
    title: "5. Automation Setup",
    description: "Configure automated workflows for lead nurturing, follow-ups, and customer journeys."
  },
  {
    icon: CheckCircle,
    title: "6. Optimize & Scale",
    description: "Analyze results, optimize campaigns, and scale successful strategies across channels."
  }
];

export default function MarketingHowItWorksSection() {
  return (
    <section className="py-16 bg-[#eef0f4] rounded-3xl border border-[#4d7cf5]/30 p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">How It Works</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Launch marketing campaigns in 6 simple steps
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
