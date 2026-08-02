"use client";

import { motion } from 'framer-motion';
import { Building, ShoppingBag, Cloud, BarChart3, Search, GraduationCap, ArrowRight } from 'lucide-react';
import Link from "next/link";

interface ServicesOverviewSectionProps {
  countryCode: string;
}

const services = [
  {
    icon: Building,
    title: "Real Estate Solutions",
    description: "Property management, listings, and virtual tours for modern real estate businesses.",
    href: "/services/real-estate"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Platform",
    description: "Complete online stores with inventory management and payment processing.",
    href: "/services/ecommerce"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and SaaS solutions for growing businesses.",
    href: "/services/cloud"
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns that drive growth and ROI.",
    href: "/services/marketing"
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Technical SEO and content optimization to boost search rankings.",
    href: "/services/seo"
  },
  {
    icon: GraduationCap,
    title: "HR Placements",
    description: "Campus hiring and talent acquisition solutions for enterprises.",
    href: "/services/placements"
  }
];

export default function ServicesOverviewSection({ countryCode }: ServicesOverviewSectionProps) {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Our Services</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your industry needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Link href={`/${countryCode}${service.href}`} className="block h-full">
              <div className="h-full bg-white rounded-xl border border-[#4d7cf5]/30 p-6 hover:shadow-xl hover:shadow-[#4d7cf5]/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#4d7cf5]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#4d7cf5]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[#4d7cf5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1c1f26] mb-2">{service.title}</h3>
                <p className="text-sm text-[#4a5060] mb-4">{service.description}</p>
                <div className="flex items-center text-[#4d7cf5] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
