"use client";

import { motion } from 'framer-motion';
import { Home, Key, Building, MapPin, Calculator, ShieldCheck, Zap, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: "IDX/MLS Integration",
    description: "Real-time property data synchronization with major MLS providers ensuring accurate listings across all platforms."
  },
  {
    icon: Key,
    title: "Virtual 3D Tours",
    description: "Immersive 3D property walkthroughs with Matterport integration for remote viewing and virtual open houses."
  },
  {
    icon: Calculator,
    title: "Smart Mortgage Calculator",
    description: "Dynamic mortgage estimation with real-time interest rates, down payment options, and affordability analysis."
  },
  {
    icon: MapPin,
    title: "Interactive Property Maps",
    description: "Advanced mapping with neighborhood data, school zones, amenities, and commute time calculations."
  },
  {
    icon: ShieldCheck,
    title: "Secure Document Management",
    description: "Encrypted document storage for contracts, deeds, and legal paperwork with role-based access control."
  },
  {
    icon: Zap,
    title: "Instant Lead Alerts",
    description: "Real-time notifications for property inquiries, showing requests, and booking confirmations."
  },
  {
    icon: Users,
    title: "Agent Collaboration Tools",
    description: "Team management features for brokerages with shared calendars, task assignments, and performance tracking."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Localized property listings in 30+ languages to serve international buyers and investors."
  }
];

export default function RealEstateFeaturesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Comprehensive Real Estate Solutions</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to modernize your real estate business and close deals faster
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
