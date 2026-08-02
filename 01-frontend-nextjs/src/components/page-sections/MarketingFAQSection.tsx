"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does WhatsApp Business API integration work?",
    answer: "We integrate directly with WhatsApp Business API to enable two-way messaging, broadcast campaigns, and automated responses. You can send promotional messages, provide customer support, and use WhatsApp for transactional notifications. Our platform handles message templates, rate limits, and compliance."
  },
  {
    question: "Can I automate email marketing campaigns?",
    answer: "Yes, our visual workflow builder lets you create complex email automation. Set up drip campaigns, welcome sequences, abandoned cart emails, and customer journeys. You can trigger emails based on user behavior, time delays, or custom events. A/B testing is built-in for optimization."
  },
  {
    question: "What channels do you support?",
    answer: "We support WhatsApp Business, email (SMTP/API), SMS, Facebook Messenger, Instagram Direct, and web push notifications. You can create unified campaigns that reach customers across all channels from a single platform with consistent messaging."
  },
  {
    question: "How do you handle compliance and opt-outs?",
    answer: "We're fully compliant with GDPR, CAN-SPAM, and other marketing regulations. Our platform includes opt-in management, unsubscribe handling, consent tracking, and double opt-in workflows. All communications include mandatory opt-out links and we maintain suppression lists."
  },
  {
    question: "Can I segment my audience?",
    answer: "Absolutely. Import customer data and create segments based on demographics, purchase history, engagement levels, custom attributes, and behavioral data. Our AI can also suggest segments based on patterns in your data. Segments update automatically as customer data changes."
  },
  {
    question: "What analytics and reporting do you provide?",
    answer: "We provide comprehensive analytics including open rates, click rates, conversion tracking, revenue attribution, and ROI calculations. Real-time dashboards show campaign performance, audience growth, and engagement trends. Custom reports can be scheduled and exported."
  }
];

export default function MarketingFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to know about our marketing platform
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-[#4d7cf5]/30 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#eef0f4] transition-colors"
            >
              <span className="font-semibold text-[#1c1f26]">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#4d7cf5]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#4d7cf5]" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-2">
                <p className="text-[#4a5060] leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
