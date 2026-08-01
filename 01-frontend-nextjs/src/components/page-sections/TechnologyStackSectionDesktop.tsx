"use client";

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Zap } from 'lucide-react';

const techStack = [
  { icon: Code, name: "Next.js 15", description: "Latest App Router with Server Components", color: "from-gray-800 to-gray-900" },
  { icon: Smartphone, name: "React Native", description: "Cross-platform mobile applications", color: "from-blue-500 to-blue-600" },
  { icon: Database, name: "Express Backend", description: "Modular domain-driven architecture", color: "from-green-500 to-green-600" },
  { icon: Zap, name: "Real-time", description: "WebSocket integration for live updates", color: "from-yellow-500 to-orange-500" },
];

export default function TechnologyStackSectionDesktop() {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
            Technologies We Use
          </span>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Our Tech Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Built with modern, production-ready technologies for optimal performance.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{tech.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
