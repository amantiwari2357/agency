"use client";

import { motion } from 'framer-motion';
import { Globe, TrendingUp, Shield, Users } from 'lucide-react';

const features = [
  { icon: Globe, title: "Global Reach", description: "Multi-region support with localized solutions for US, UK, and UAE markets." },
  { icon: TrendingUp, title: "Scalable Growth", description: "Architecture designed to scale from startup to enterprise seamlessly." },
  { icon: Shield, title: "Enterprise Security", description: "Production-grade security with modern authentication and data protection." },
  { icon: Users, title: "User-Centric Design", description: "Beautiful, intuitive interfaces built with modern design principles." },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Our Advantages
              </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Why Choose AEX Agency?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine cutting-edge technology with industry expertise to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/30">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
