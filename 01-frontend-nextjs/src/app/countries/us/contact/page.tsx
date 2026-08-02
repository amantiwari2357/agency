"use client";

import React from "react";
import Header from "@/components/layout/NavigationHeader";
import AdvancedFooter from "@/components/footer/AdvancedFooter";
import SchemaMarkup from "@/features/seo-schema-feature";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function USContactPage() {
  const countryCode = "us";
  const countryName = "United States";
  const currency = "USD";
  const currencySymbol = "$";

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@aexagency.com",
      link: "mailto:hello@aexagency.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (650) 555-0123",
      link: "tel:+16505550123"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Innovation Drive, Tech Valley, CA 94025",
      link: null
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri: 9AM - 6PM PST",
      link: null
    },
  ];

  return (
    <>
      <SchemaMarkup countryCode={countryCode} pageType="landing" />
      <Header currentCountry={countryCode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1c1f26] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#4a5060] max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl border border-[#4d7cf5]/30 p-8">
              <h2 className="text-2xl font-bold text-[#1c1f26] mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#4a5060] mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#eef0f4] border border-[#4d7cf5]/20 rounded-xl px-4 py-3 text-[#1c1f26] focus:outline-none focus:border-[#4d7cf5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#4a5060] mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#eef0f4] border border-[#4d7cf5]/20 rounded-xl px-4 py-3 text-[#1c1f26] focus:outline-none focus:border-[#4d7cf5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#4a5060] mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full bg-[#eef0f4] border border-[#4d7cf5]/20 rounded-xl px-4 py-3 text-[#1c1f26] focus:outline-none focus:border-[#4d7cf5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#4a5060] mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#eef0f4] border border-[#4d7cf5]/20 rounded-xl px-4 py-3 text-[#1c1f26] focus:outline-none focus:border-[#4d7cf5] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4d7cf5] text-white rounded-xl px-6 py-4 font-semibold hover:bg-[#3660e0] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#eef0f4] rounded-2xl p-6 border border-[#4d7cf5]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4d7cf5] rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1c1f26] mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-[#4a5060] hover:text-[#4d7cf5] transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#4a5060]">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-[#4d7cf5] via-[#4366d8] to-[#3660e0] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Need Immediate Help?</h3>
              <p className="text-white/90 mb-4">
                For urgent inquiries, call our support line directly.
              </p>
              <a href="tel:+16505550123" className="inline-block px-6 py-3 bg-white text-[#4d7cf5] rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <AdvancedFooter 
        countryCode={countryCode}
        countryName={countryName}
        currency={currency}
        currencySymbol={currencySymbol}
      />
    </>
  );
}
