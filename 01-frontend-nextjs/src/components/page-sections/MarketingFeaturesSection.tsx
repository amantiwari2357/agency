"use client";

import { motion } from 'framer-motion';
import { MessageSquare, Mail, Send, BarChart3, Users, Target, Zap, Smartphone } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Business API",
    description: "Direct messaging with 98% open rates for customer engagement and support."
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Drip campaigns, cold outreach sequences, and personalized email marketing."
  },
  {
    icon: Send,
    title: "Multi-Channel Broadcast",
    description: "Send campaigns across WhatsApp, email, SMS, and social media from one platform."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track campaign performance with detailed metrics and ROI reporting."
  },
  {
    icon: Users,
    title: "Lead Segmentation",
    description: "AI-powered customer segmentation for targeted marketing campaigns."
  },
  {
    icon: Target,
    title: "A/B Testing",
    description: "Test different messages, creatives, and timing to optimize conversions."
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description: "Build complex marketing automation with visual workflow builder."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Campaigns",
    description: "Optimized campaigns for mobile with push notifications and in-app messages."
  }
];

export default function MarketingFeaturesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Complete Marketing Automation</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to engage customers and drive conversions
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
