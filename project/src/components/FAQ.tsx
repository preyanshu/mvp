import React, { useState, useCallback } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = React.memo(({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none active:bg-gray-800/30"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <span className="text-base md:text-lg font-medium text-white pr-4">
          {question}
        </span>
        <div 
          className="text-blue-400 flex-shrink-0 transition-transform duration-200 ease-out"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <div 
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ 
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="pb-4 pr-8">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
});

const FAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const faqs = [
    {
      question: "How does ChainPay ensure payment security?",
      answer: "ChainPay leverages blockchain technology for secure, transparent transactions. Our smart contracts are audited and tested to ensure maximum security for all parties involved in the payment process."
    },
    {
      question: "What cryptocurrencies are supported?",
      answer: "We support a wide range of cryptocurrencies including Bitcoin, Ethereum, USDC, USDT, and many other popular tokens across multiple blockchain networks."
    },
    {
      question: "How are payment disputes handled?",
      answer: "Our platform includes built-in dispute resolution mechanisms with automated arbitration and manual review processes to ensure fair outcomes for all parties."
    },
    {
      question: "Can I customize payment terms and conditions?",
      answer: "Yes! You can set custom payment schedules, milestone-based releases, and define specific terms that work best for your business needs."
    },
    {
      question: "What happens if a client misses a payment deadline?",
      answer: "ChainPay automatically sends reminder notifications and can trigger predefined actions like late fees or contract modifications based on your settings."
    }
  ];

  const handleToggle = useCallback((index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-800 text-blue-300 font-medium text-xs md:text-sm mb-3">
            FAQ
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Everything you need to know about ChainPay and how it works.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-gray-800/80 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-700/50">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndexes.includes(index)}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;