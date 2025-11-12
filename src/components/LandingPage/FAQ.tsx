import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does BrayorAI work?",
      answer:
        "BrayorAI uses advanced AI algorithms to analyze, format, and enhance resumes. Simply upload a resume in PDF or Word format, and our AI will automatically restructure it into a professional, ATS-friendly layout while improving the content quality.",
    },
    {
      question: "Is the beta really free?",
      answer:
        "Yes! During our beta period, you get full access to all features completely free. This helps us gather feedback and improve the product. Beta users will also receive exclusive early pricing when we launch.",
    },
    {
      question: "Can I use my own branded templates?",
      answer:
        "Custom template support is coming in Q1 2026. You'll be able to upload your agency's branded resume designs, and BrayorAI will apply them automatically to all formatted resumes.",
    },
    {
      question: "Will it integrate with our ATS or CRM?",
      answer:
        "We're building integrations with popular ATS and CRM systems. If you have specific integration needs, please let us know during the beta period so we can prioritize them in our development roadmap.",
    },
    {
      question: "When will premium plans be available?",
      answer:
        "Premium plans will be available after the beta period concludes. All beta users will receive special early pricing as a thank you for helping us shape the product.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F29224]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1A2F40]/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 mb-6">
            <span className="text-sm text-gray-700 uppercase tracking-wide">Your Questions, Answered!</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Questions? Answers!
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find quick answers to the most common questions about our platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:translate-x-2 transition-transform"
              >
                <span className="text-lg text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}