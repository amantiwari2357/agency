"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "AEX Agency transformed our digital presence. Their multi-industry approach helped us scale across multiple markets seamlessly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Director, Global Retail",
    content: "The e-commerce platform they built increased our online sales by 300%. Exceptional technical expertise and support.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "VP Marketing, CloudCo",
    content: "Their digital marketing strategies delivered measurable ROI. A true partner in our growth journey.",
    rating: 5
  }
];

const trustBadges = [
  "ISO 27001 Certified",
  "GDPR Compliant",
  "SOC 2 Type II",
  "24/7 Support",
  "99.9% Uptime",
  "Enterprise SLA"
];

export default function TrustSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Trusted by Industry Leaders</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          See what our clients say about working with us
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="h-full bg-white rounded-xl border border-[#4d7cf5]/30 p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#4d7cf5] text-[#4d7cf5]" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#4d7cf5]/20 mb-4" />
              <p className="text-[#4a5060] mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-bold text-[#1c1f26]">{testimonial.name}</p>
                <p className="text-sm text-[#4a5060]">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="bg-white rounded-xl border border-[#4d7cf5]/30 p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              className="text-center p-4 bg-[#4d7cf5]/5 rounded-lg border border-[#4d7cf5]/20"
            >
              <p className="text-sm font-semibold text-[#4d7cf5]">{badge}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
