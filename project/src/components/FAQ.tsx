import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How does ChainPay ensure payment security?",
      answer: "ChainPay leverages blockchain technology for secure, transparent transactions. Our smart contracts are audited and tested to ensure maximum security for all parties involved in the payment process.",
    },
    {
      question: "What cryptocurrencies are supported?",
      answer: "We support a wide range of cryptocurrencies including Bitcoin, Ethereum, USDC, USDT, and many other popular tokens across multiple blockchain networks.",
    },
    {
      question: "How are payment disputes handled?",
      answer: "Our platform includes built-in dispute resolution mechanisms with automated arbitration and manual review processes to ensure fair outcomes for all parties.",
    },
    {
      question: "Can I customize payment terms and conditions?",
      answer: "Yes! You can set custom payment schedules, milestone-based releases, and define specific terms that work best for your business needs.",
    },
    {
      question: "What happens if a client misses a payment deadline?",
      answer: "ChainPay automatically sends reminder notifications and can trigger predefined actions like late fees or contract modifications based on your settings.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-dark-300 text-primary-300 font-medium text-sm mb-3">
            FAQ
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Everything you need to know about ChainPay and how it works.
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-dark-200 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-700/50 divide-y divide-gray-700/50">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-2 text-white text-left focus:outline-none"
              >
                <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
                <span className="transition-transform duration-300 text-primary-300">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-gray-400 text-sm md:text-base leading-relaxed pr-8 ${
                  openIndex === index ? 'max-h-[500px] mt-2 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
