import React, { useRef } from 'react';
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-dark-400 last:border-none"
    >
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-white group-hover:text-primary-400 transition-colors">
          {question}
        </span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-primary-400 flex-shrink-0 ml-4"
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "How does ChainPay ensure payment security?",
      answer: "ChainPay leverages blockchain technology for secure, transparent transactions. All payments are verified on-chain, and smart contracts ensure automatic code/service release only after payment confirmation."
    },
    {
      question: "What cryptocurrencies are supported?",
      answer: "We support a wide range of cryptocurrencies, including major stablecoins (USDC, USDT, DAI) and native tokens (ETH, BNB, MATIC). The platform automatically handles currency conversion and verification."
    },
    {
      question: "How are payment disputes handled?",
      answer: "Our platform includes built-in dispute resolution mechanisms. While we promote direct peer-to-peer transactions, we maintain optional escrow services for high-value deals and provide detailed transaction tracking for transparency."
    },
    {
      question: "Can I customize payment terms and conditions?",
      answer: "Yes! You can set custom payment schedules, milestone-based releases, and specific terms for each client. Our platform supports flexible payment structures while maintaining automated tracking and notifications."
    },
    {
      question: "What happens if a client misses a payment deadline?",
      answer: "ChainPay automatically sends reminder notifications based on your custom schedule. You can set up escalating reminder frequencies and customize the messaging tone. The system also provides payment status tracking and analytics."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="py-24 px-6 relative overflow-hidden"
    >
   
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-dark-300 text-primary-300 font-medium text-sm mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to know about ChainPay and how it works.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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