"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Richard Evans",
    role: "SEO Manager, ShopSmart UK",
    content: "The automated schema markup alone increased our rich results by 300%. Our product pages now show up in Google Shopping with zero manual effort.",
    rating: 5
  },
  {
    name: "Sarah Mitchell",
    role: "Digital Marketing Lead, City Plumbers",
    content: "Local SEO optimization got us to the top of Google Maps for all our service areas. Our phone hasn't stopped ringing since.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Founder, CloudFlow Solutions",
    content: "Technical SEO audits identified issues we didn't even know existed. Fixing them doubled our organic traffic in just 3 months.",
    rating: 5
  }
];

export default function SEOTestimonialsSection() {
  return (
    <section className="py-16 bg-white rounded-3xl border border-[#4d7cf5]/30 p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">What Our Clients Say</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Trusted by SEO professionals across the UK
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
