"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does MLS/IDX integration work?",
    answer: "Our platform connects directly to your MLS provider's API to sync property data in real-time. This ensures your listings are always up-to-date across your website, mobile app, and partner portals. We support all major MLS providers including MLS PIN, CRMLS, and others."
  },
  {
    question: "Can I customize the property portal with my branding?",
    answer: "Absolutely. You can fully customize colors, logos, fonts, and layouts to match your brand identity. Our white-label solution allows you to create a completely branded experience while leveraging our powerful backend technology."
  },
  {
    question: "How do virtual 3D tours integrate with the platform?",
    answer: "We support integration with Matterport, Zillow 3D Home, and other 3D tour providers. Tours can be embedded directly into property listings, and we provide analytics on viewer engagement and tour completion rates."
  },
  {
    question: "Is the platform mobile-friendly?",
    answer: "Yes, our platform is fully responsive and optimized for all devices. We also offer native mobile apps for iOS and Android with features like push notifications, offline property viewing, and GPS-based property search."
  },
  {
    question: "How does lead capture and nurturing work?",
    answer: "Our smart forms capture lead information and automatically segment based on property preferences. Leads can be routed to specific agents, and our automated nurturing system sends personalized follow-ups via email, SMS, and WhatsApp."
  },
  {
    question: "What security measures are in place for document management?",
    answer: "All documents are encrypted at rest and in transit using AES-256 encryption. We provide role-based access control, audit trails, and comply with GDPR, CCPA, and other data protection regulations."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to know about our real estate platform
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
