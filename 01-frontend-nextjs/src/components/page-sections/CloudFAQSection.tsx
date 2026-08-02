"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What cloud providers do you support?",
    answer: "We support all major cloud providers including AWS, Azure, Google Cloud Platform, and DigitalOcean. Our multi-cloud approach allows you to leverage the best features of each provider while maintaining unified management."
  },
  {
    question: "How does auto-scaling work?",
    answer: "Our platform monitors your application metrics in real-time and automatically adjusts resources based on predefined rules. You can scale based on CPU usage, memory, network traffic, or custom metrics. Scaling can be configured to be cost-optimized or performance-optimized."
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We implement encryption at rest and in transit, DDoS protection, web application firewalls, and regular security audits. We're compliant with GDPR, HIPAA, SOC 2, and other major security standards."
  },
  {
    question: "How do you handle backups and disaster recovery?",
    answer: "We provide automated daily backups with point-in-time recovery. For critical applications, we offer multi-region replication with automatic failover. Your data is stored in geo-redundant storage with 99.999999999% durability."
  },
  {
    question: "Can I migrate my existing infrastructure?",
    answer: "Yes, we provide comprehensive migration services. Our team will assess your current infrastructure, design a migration strategy, and execute the migration with minimal downtime. We support migrations from on-premise, other cloud providers, and legacy systems."
  },
  {
    question: "What monitoring and alerting options are available?",
    answer: "We provide 24/7 monitoring with real-time dashboards, custom alerting via email, SMS, Slack, and PagerDuty. You can monitor infrastructure metrics, application performance, logs, and custom business metrics. Predictive analytics help identify issues before they impact users."
  }
];

export default function CloudFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to know about our cloud platform
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
