"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does multi-channel inventory sync work?",
    answer: "Our platform connects to your inventory management system and automatically syncs stock levels across all your sales channels - website, marketplaces like Amazon/eBay, and physical stores. This prevents overselling and ensures accurate stock availability in real-time."
  },
  {
    question: "Can I customize the storefront design?",
    answer: "Yes, you have full control over the design. Choose from our premium templates or build a completely custom design. Our drag-and-drop builder makes it easy to customize colors, fonts, layouts, and product displays without any coding knowledge."
  },
  {
    question: "What payment gateways do you support?",
    answer: "We integrate with all major payment providers including Stripe, PayPal, Square, Adyen, and local payment methods like Klarna, Afterpay, and Apple Pay. You can enable multiple payment options to give customers flexibility."
  },
  {
    question: "How do AI size recommendations work?",
    answer: "Our AI analyzes customer data including purchase history, returns, and size preferences to recommend the best fit for each customer. This reduces returns by up to 40% and increases customer satisfaction."
  },
  {
    question: "Is the platform mobile-optimized?",
    answer: "Absolutely. All our themes are mobile-first and fully responsive. We also offer a dedicated mobile app builder to create native iOS and Android apps with push notifications and offline browsing."
  },
  {
    question: "How do you handle shipping and fulfillment?",
    answer: "We integrate with major shipping carriers including Royal Mail, DHL, FedEx, and UPS. You can set up shipping zones, flat rates, or real-time carrier-calculated rates. We also support dropshipping and fulfillment center integrations."
  }
];

export default function EcommerceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to know about our e-commerce platform
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
