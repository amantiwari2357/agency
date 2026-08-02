"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Mitchell",
    role: "CEO, Prime Properties",
    content: "The virtual 3D tour feature alone doubled our property viewings. Our agents can now show properties to international buyers without them ever stepping foot in the country.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Director, Urban Living Realty",
    content: "Automated lead nurturing has transformed our follow-up process. We're closing deals 40% faster because our agents spend less time on admin and more time selling.",
    rating: 5
  },
  {
    name: "Michael Roberts",
    role: "Broker, Elite Homes Group",
    content: "The MLS integration is seamless. All our listings sync automatically across our website, social media, and partner portals. It's like having an extra team member working 24/7.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white rounded-3xl border border-[#4d7cf5]/30 p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">What Our Clients Say</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Trusted by leading real estate professionals worldwide
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
