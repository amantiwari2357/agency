"use client";

import { motion } from 'framer-motion';
import { Server, Cloud, Shield, Activity, Database, Globe, Zap, Lock } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: "Auto-Scaling Infrastructure",
    description: "Automatically scale resources up or down based on traffic patterns to optimize costs and performance."
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Deployment",
    description: "Deploy across AWS, Azure, and Google Cloud with unified management and failover capabilities."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade security with DDoS protection, WAF, and automated security patching."
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "24/7 monitoring with instant alerts, performance metrics, and predictive failure detection."
  },
  {
    icon: Database,
    title: "Managed Databases",
    description: "Fully managed PostgreSQL, MongoDB, and Redis with automatic backups and point-in-time recovery."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivery network with 200+ edge locations for lightning-fast content delivery worldwide."
  },
  {
    icon: Zap,
    title: "CI/CD Pipelines",
    description: "Automated deployment pipelines with GitHub integration, testing, and rollback capabilities."
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "GDPR, HIPAA, SOC 2 compliant infrastructure with audit logs and data encryption."
  }
];

export default function CloudFeaturesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Complete Cloud Infrastructure</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to build, deploy, and scale your applications
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
