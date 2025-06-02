import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      style={{ willChange: 'transform, opacity' }}
      initial={{ opacity: 1, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-dark-400 last:border-none"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group transition-transform duration-200"
      >
        <span className="text-lg font-medium text-white group-hover:text-primary-400 transition-colors">
          {question}
        </span>
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="text-primary-400 flex-shrink-0 ml-4"
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden will-change-transform"
          >
            <p className="pb-5 text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "How does ChainPay ensure payment security?",
      answer: "ChainPay leverages blockchain technology for secure, transparent transactions..."
    },
    {
      question: "What cryptocurrencies are supported?",
      answer: "We support a wide range of cryptocurrencies..."
    },
    {
      question: "How are payment disputes handled?",
      answer: "Our platform includes built-in dispute resolution mechanisms..."
    },
    {
      question: "Can I customize payment terms and conditions?",
      answer: "Yes! You can set custom payment schedules and milestone-based releases..."
    },
    {
      question: "What happens if a client misses a payment deadline?",
      answer: "ChainPay automatically sends reminder notifications..."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background blur lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-dark-300 text-primary-300 font-medium text-sm mb-3">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about ChainPay and how it works.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          style={{ willChange: 'transform, opacity' }}
        
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-dark-200 rounded-2xl p-8 border border-dark-300"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
