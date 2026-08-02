"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amanda Foster",
    role: "Marketing Director, StyleHub UK",
    content: "WhatsApp marketing changed everything for us. 98% open rates compared to 20% with email. Our customer engagement has never been higher.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Founder, TechFlow Solutions",
    content: "Multi-channel automation reduced our marketing workload by 70% while doubling our lead generation. The ROI has been incredible.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager, Tasty Bites",
    content: "Automated reminders via WhatsApp cut our no-show rate in half. Our booking system is now running at maximum efficiency.",
    rating: 5
  }
];

export default function MarketingTestimonialsSection() {
  return (
    <section className="py-16 bg-white rounded-3xl border border-[#4d7cf5]/30 p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">What Our Clients Say</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Trusted by marketing teams across the UK
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="h-full bg-[#eef0f4] rounded-xl p-6 border border-[#4d7cf5]/20">
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
    </section>
  );
}
