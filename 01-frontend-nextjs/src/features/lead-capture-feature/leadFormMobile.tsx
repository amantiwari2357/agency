"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function LeadFormMobile() {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else setSubmitted(true);
  };

  return (
    <section className="py-6">
      <div className="glass-card rounded-2xl p-5 border border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
            Mobile Step Form ({step}/2)
          </span>
          <span className="text-xs text-slate-400">Fast Consultation</span>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-base font-bold text-white">Request Sent!</h4>
            <p className="text-xs text-slate-300">We will reach out to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleNext} className="space-y-3">
            {step === 1 ? (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-sm font-bold text-white">Step 1: Your Info</h3>
                <div>
                  <label className="block text-[11px] text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <Button variant="primary" size="sm" className="w-full">
                  Next Step <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-sm font-bold text-white">Step 2: Contact Detail</h3>
                <div>
                  <label className="block text-[11px] text-slate-300 mb-1">Business Email</label>
                  <input
                    type="email"
                    required
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button variant="secondary" size="sm" onClick={() => setStep(1)} type="button">
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="accent" size="sm" className="w-full">
                    Submit Request <Send className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
