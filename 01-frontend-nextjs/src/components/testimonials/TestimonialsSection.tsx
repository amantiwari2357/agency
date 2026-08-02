"use client";

import { motion } from 'framer-motion';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  country: string;
  content: string;
  rating: number;
  avatar: string;
  image?: string;
}

interface TestimonialsSectionProps {
  countryCode: string;
  countryName: string;
}

export default function TestimonialsSection({ countryCode, countryName }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = {
    us: [
      {
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
        country: "United States",
        content: "AEX Agency transformed our digital presence completely. Their real estate technology solution increased our property inquiries by 300% in just 3 months. The team's understanding of the US market is exceptional.",
        rating: 5,
        avatar: "SJ"
      },
      {
        name: "Michael Chen",
        role: "CTO",
        company: "CloudScale Technologies",
        country: "United States",
        content: "The cloud infrastructure solutions provided by AEX Agency helped us scale our operations across the US with 99.9% uptime. Their local support team is incredibly responsive and knowledgeable.",
        rating: 5,
        avatar: "MC"
      },
      {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "RetailMax Group",
        country: "United States",
        content: "Their SEO and digital marketing services drove a 450% increase in organic traffic. The ROI on our marketing spend has been phenomenal. Highly recommend their services!",
        rating: 5,
        avatar: "ER"
      },
      {
        name: "David Thompson",
        role: "Founder",
        company: "E-Commerce Ventures",
        country: "United States",
        content: "AEX Agency built our entire e-commerce platform from scratch. The user experience is seamless, and the integration with our existing systems was flawless. Best decision we made.",
        rating: 5,
        avatar: "DT"
      }
    ],
    uk: [
      {
        name: "James Wilson",
        role: "Managing Director",
        company: "London Properties Ltd",
        country: "United Kingdom",
        content: "The real estate technology solutions provided by AEX Agency have revolutionized how we manage property listings. Their understanding of the UK market regulations is impressive.",
        rating: 5,
        avatar: "JW"
      },
      {
        name: "Sarah Mitchell",
        role: "Head of Digital",
        company: "British Retail Group",
        country: "United Kingdom",
        content: "Their e-commerce solutions helped us increase online sales by 200% in 6 months. The team's expertise in UK consumer behavior is unmatched.",
        rating: 5,
        avatar: "SM"
      },
      {
        name: "Robert Clarke",
        role: "CEO",
        company: "Tech Innovators UK",
        country: "United Kingdom",
        content: "AEX Agency's cloud migration services were seamless. They handled our complex legacy systems with expertise and delivered ahead of schedule.",
        rating: 5,
        avatar: "RC"
      },
      {
        name: "Patricia Evans",
        role: "Marketing Manager",
        company: "Growth Partners",
        country: "United Kingdom",
        content: "Their digital marketing strategies have been instrumental in our growth. The local team understands the nuances of the UK market perfectly.",
        rating: 5,
        avatar: "PE"
      }
    ],
    ae: [
      {
        name: "Ahmed Al-Farsi",
        role: "Director",
        company: "Dubai Properties",
        country: "United Arab Emirates",
        content: "AEX Agency delivered exceptional real estate technology solutions for our Dubai operations. Their understanding of the Middle East market and local regulations is outstanding.",
        rating: 5,
        avatar: "AA"
      },
      {
        name: "Fatima Hassan",
        role: "CEO",
        company: "Gulf E-Commerce",
        country: "United Arab Emirates",
        content: "Their e-commerce platform helped us expand across the GCC region. The multilingual support and local payment integrations were exactly what we needed.",
        rating: 5,
        avatar: "FH"
      },
      {
        name: "Omar Khalil",
        role: "CTO",
        company: "MENA Cloud Solutions",
        country: "United Arab Emirates",
        content: "The cloud infrastructure provided by AEX Agency scaled our operations seamlessly across the UAE. Their 24/7 support team is exceptional.",
        rating: 5,
        avatar: "OK"
      },
      {
        name: "Layla Mohammed",
        role: "Marketing Director",
        company: "Gulf Marketing Partners",
        country: "United Arab Emirates",
        content: "Their digital marketing expertise in the GCC market is unmatched. We've seen a 300% increase in qualified leads since partnering with them.",
        rating: 5,
        avatar: "LM"
      }
    ],
    in: [
      {
        name: "Priya Sharma",
        role: "Founder",
        company: "E-Commerce India",
        country: "India",
        content: "AEX Agency's SEO and marketing services drove a 450% increase in organic traffic. The team's understanding of the Indian market and consumer behavior is exceptional.",
        rating: 5,
        avatar: "PS"
      },
      {
        name: "Rajesh Kumar",
        role: "CEO",
        company: "Tech India Solutions",
        country: "India",
        content: "Their cloud infrastructure solutions helped us scale across India with 99.9% uptime. The local support team is incredibly responsive and knowledgeable.",
        rating: 5,
        avatar: "RK"
      },
      {
        name: "Anita Patel",
        role: "HR Director",
        company: "Campus Placements India",
        country: "India",
        content: "Their HR placement platform transformed our campus recruitment process. We've seen a 200% increase in successful placements across top engineering colleges.",
        rating: 5,
        avatar: "AP"
      },
      {
        name: "Vikram Singh",
        role: "Managing Director",
        company: "Real Estate India",
        country: "India",
        content: "The real estate technology solutions provided by AEX Agency have revolutionized how we manage property listings. Their understanding of the Indian market is impressive.",
        rating: 5,
        avatar: "VS"
      }
    ]
  };

  const countryTestimonials = testimonials[countryCode as keyof typeof testimonials] || testimonials.us;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % countryTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + countryTestimonials.length) % countryTestimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#eef0f4] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-[#e8f5e9] text-[#2e9e5b] text-sm font-semibold rounded-full mb-4">
            Client Success Stories
          </span>
          <h2 className="text-5xl font-bold mb-4 text-[#1c1f26]">
            What Our Clients Say
          </h2>
          <p className="text-[#8a90a2] max-w-2xl mx-auto text-lg">
            Trusted by industry leaders across {countryName}
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4d7cf5]/10 to-transparent rounded-bl-full" />
          <Quote className="absolute top-8 left-8 w-12 h-12 text-[#4d7cf5]/20" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4d7cf5] to-[#3660e0] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {countryTestimonials[activeIndex].avatar}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1c1f26]">{countryTestimonials[activeIndex].name}</h3>
                <p className="text-[#4a5060]">{countryTestimonials[activeIndex].role} at {countryTestimonials[activeIndex].company}</p>
                <p className="text-sm text-[#4d7cf5]">{countryTestimonials[activeIndex].country}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(countryTestimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-xl text-[#4a5060] leading-relaxed mb-8 italic">
              "{countryTestimonials[activeIndex].content}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="px-4 py-2 bg-[#eef0f4] rounded-full text-[#4d7cf5] hover:bg-[#4d7cf5] hover:text-white transition-all"
                >
                  Previous
                </button>
                <button
                  onClick={nextTestimonial}
                  className="px-4 py-2 bg-[#4d7cf5] rounded-full text-white hover:bg-[#3660e0] transition-all"
                >
                  Next
                </button>
              </div>
              <div className="flex gap-2">
                {countryTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? 'bg-[#4d7cf5]' : 'bg-[#eef0f4]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countryTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer ${
                index === activeIndex ? 'ring-2 ring-[#4d7cf5]' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4d7cf5] to-[#3660e0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-[#1c1f26]">{testimonial.name}</h4>
                  <p className="text-sm text-[#8a90a2]">{testimonial.role}</p>
                  <p className="text-xs text-[#4d7cf5]">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#4a5060] leading-relaxed text-sm line-clamp-3">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#4d7cf5] to-[#3660e0] text-white rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2 mx-auto">
            Share Your Experience
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}