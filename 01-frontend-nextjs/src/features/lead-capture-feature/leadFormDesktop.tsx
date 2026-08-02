"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function LeadFormDesktop() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "SEO Optimization" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 my-8 bg-white rounded-3xl p-10 border border-[#4d7cf5]/30 shadow-xl shadow-[#4d7cf5]/10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Testimonials & Stats */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider bg-[#4d7cf5]/10 text-[#4d7cf5] px-3 py-1 rounded-full border border-[#4d7cf5]/30">
            Desktop Split Lead Feature
          </span>
          <h2 className="text-3xl font-extrabold text-[#1c1f26]">
            Schedule a Free Technical Consultation
          </h2>
          <p className="text-[#4a5060] text-sm leading-relaxed">
            Our enterprise architects will review your SEO, digital footprint, and micro-frontend architecture to deliver a tailored scaling plan within 24 hours.
          </p>

          <div className="space-y-4 pt-4 border-t border-[#4d7cf5]/20">
            <div className="flex items-center space-x-3 bg-[#eef0f4] p-4 rounded-xl border border-[#4d7cf5]/20">
              <div className="w-10 h-10 rounded-full bg-[#4d7cf5] flex items-center justify-center font-bold text-white text-sm">
                JD
              </div>
              <div>
                <div className="flex text-[#4d7cf5] mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#1c1f26] font-medium">
                  "The feature-driven architecture improved our team's deployment speed by 300%."
                </p>
                <span className="text-[10px] text-[#4a5060] block">— Tech Lead, Retail Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-6 bg-[#eef0f4] p-8 rounded-2xl border border-[#4d7cf5]/20">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#4d7cf5] mx-auto animate-bounce" />
              <h3 className="text-xl font-bold text-[#1c1f26]">Consultation Requested!</h3>
              <p className="text-xs text-[#4a5060]">
                Our backend lead engine has logged your entry. An architect will contact you shortly.
              </p>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-[#1c1f26] mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 text-[#4d7cf5] mr-2" /> Request Consultation
              </h3>

              <div>
                <label className="block text-xs font-semibold text-[#4a5060] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-[#4d7cf5]/20 rounded-xl px-4 py-2.5 text-sm text-[#1c1f26] focus:outline-none focus:border-[#4d7cf5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4a5060] mb-1">Business Email</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[#4d7cf5]/20 rounded-xl px-4 py-2.5 text-sm text-[#1c1f26] focus:outline-none focus:border-[#4d7cf5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4a5060] mb-1">Primary Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-[#4d7cf5]/20 rounded-xl px-4 py-2.5 text-sm text-[#1c1f26] focus:outline-none focus:border-[#4d7cf5]"
                >
                  <option>SEO Optimization</option>
                  <option>Next.js Web App</option>
                  <option>React Native Expo App</option>
                  <option>Enterprise Backend Architecture</option>
                </select>
              </div>

              <Button variant="primary" size="lg" className="w-full mt-2">
                <Send className="w-4 h-4 mr-2" /> Submit Request
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
