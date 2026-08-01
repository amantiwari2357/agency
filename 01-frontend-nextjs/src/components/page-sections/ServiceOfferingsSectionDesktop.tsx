"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  { name: "Real Estate", href: "/us/services/real-estate", icon: "🏠", description: "Property management and listing platforms", color: "from-blue-500 to-cyan-500" },
  { name: "E-Commerce", href: "/us/services/ecommerce", icon: "🛒", description: "Online stores with payment integration", color: "from-purple-500 to-pink-500" },
  { name: "Cloud Solutions", href: "/us/services/cloud", icon: "☁️", description: "Scalable cloud infrastructure and DevOps", color: "from-indigo-500 to-blue-500" },
  { name: "Digital Marketing", href: "/us/services/marketing", icon: "📈", description: "SEO, PPC, and social media marketing", color: "from-green-500 to-emerald-500" },
  { name: "SEO Services", href: "/us/services/seo", icon: "🔍", description: "Search engine optimization strategies", color: "from-orange-500 to-red-500" },
  { name: "HR Placements", href: "/us/services/placements", icon: "👥", description: "Talent acquisition and management", color: "from-teal-500 to-cyan-500" },
];

export default function ServiceOfferingsSectionDesktop() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to your industry needs.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.a
              key={service.name}
              href={service.href}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 block"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
