"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the AI candidate matching work?",
    answer: "Our AI analyzes student profiles including skills, experience, education, and preferences, then matches them with job requirements from partner companies. The system considers technical skills, soft skills, location preferences, and salary expectations to provide the best matches."
  },
  {
    question: "Can students apply to multiple companies?",
    answer: "Yes, students can apply to multiple companies and track all their applications in one dashboard. They can also set preferences and let our AI suggest the most suitable opportunities based on their profile."
  },
  {
    question: "How do companies partner with universities?",
    answer: "Companies can register on our platform, post job openings, and specify their requirements. Our system automatically matches them with suitable students. Companies can also participate in campus recruitment drives and virtual job fairs."
  },
  {
    question: "What types of assessments are supported?",
    answer: "We support various assessment types including coding tests, aptitude tests, technical interviews, psychometric assessments, and video interviews. Assessments can be customized by company and integrated into the hiring workflow."
  },
  {
    question: "How is student data protected?",
    answer: "We take data security seriously. All student data is encrypted at rest and in transit. We comply with GDPR and other data protection regulations. Role-based access control ensures only authorized personnel can access sensitive information."
  },
  {
    question: "What analytics and reporting are available?",
    answer: "We provide comprehensive analytics including placement rates, average salary packages, company partnership metrics, time-to-hire statistics, and student engagement metrics. Custom reports can be generated for university leadership and accreditation requirements."
  }
];

export default function PlacementsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c1f26] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[#4a5060] max-w-2xl mx-auto">
          Everything you need to know about our campus recruitment platform
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
