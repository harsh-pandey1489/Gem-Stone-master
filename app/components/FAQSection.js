"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is your design process like?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl felis, blandit in laoreet sed, malesuada id elit. Duis sed odio blandit tortor maximus euismod. Phasellus convallis dolor vel suscipit sagittis. Donec aliquam leo suscipit, semper dui a, condimentum sem.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl felis, blandit in laoreet sed, malesuada id elit.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl felis, blandit in laoreet sed, malesuada id elit.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl felis, blandit in laoreet sed, malesuada id elit.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-sm font-semibold text-[#E57661] uppercase tracking-wide">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-[#0A2540]">
          Most asked questions
        </h2>

        {/* FAQ List */}
        <div className="mt-10 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[16px] font-medium text-[#0A2540]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0A2540]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0A2540]" />
                  )}
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
