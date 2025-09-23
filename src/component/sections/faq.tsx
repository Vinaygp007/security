"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What types of security services do you offer?",
    answer:
      "We provide physical guarding, electronic surveillance, risk analysis, and facility management services for homes, businesses, and communities.",
  },
  {
    question: "Are your security personnel trained and certified?",
    answer:
      "Yes, all our security staff undergo rigorous background checks, professional training, and hold relevant certifications.",
  },
  {
    question: "Can I get a customized security solution for my business?",
    answer:
      "Absolutely! We assess your unique needs and design tailored security solutions to ensure maximum protection.",
  },
  {
    question: "How do you ensure rapid response in emergencies?",
    answer:
      "Our teams are equipped with advanced communication tools and operate 24/7 to respond quickly to any incident.",
  },
  {
    question: "How can I request a quote or consultation?",
    answer:
      "Simply click the Contact Us button on our homepage or visit the Contact page to get started.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`bg-blue-900/40 rounded-xl shadow p-4 transition-all duration-300 group ${
                isOpen
                  ? "ring-2 ring-blue-400"
                  : "hover:bg-blue-800/60 hover:shadow-lg hover:scale-[1.02] hover:ring-2 hover:ring-blue-300"
              }`}
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-blue-200 focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="group-hover:text-blue-300 transition-colors duration-200">{faq.question}</span>
                <span
                  className={`ml-4 text-blue-400 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  } group-hover:text-blue-300`}
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={
                  isOpen
                    ? { maxHeight: 200, opacity: 1, marginTop: 8 }
                    : { maxHeight: 0, opacity: 0, marginTop: 0 }
                }
              >
                <div className="text-gray-200 text-base py-2 px-1">{faq.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}