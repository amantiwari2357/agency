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
    <section className="py-12 my-8 glass-card rounded-3xl p-10 border border-slate-800 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Testimonials & Stats */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50">
            Desktop Split Lead Feature
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Schedule a Free Technical Consultation
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our enterprise architects will review your SEO, digital footprint, and micro-frontend architecture to deliver a tailored scaling plan within 24 hours.
          </p>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center space-x-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                JD
              </div>
              <div>
                <div className="flex text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-200 font-medium">
                  "The feature-driven architecture improved our team's deployment speed by 300%."
                </p>
                <span className="text-[10px] text-slate-400 block">— Tech Lead, Retail Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-6 bg-slate-950/80 p-8 rounded-2xl border border-slate-800">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="text-xl font-bold text-white">Consultation Requested!</h3>
              <p className="text-xs text-slate-300">
                Our backend lead engine has logged your entry. An architect will contact you shortly.
              </p>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 text-emerald-400 mr-2" /> Request Consultation
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Business Email</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
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
