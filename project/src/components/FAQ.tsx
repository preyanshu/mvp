'use client';

import React, { useRef } from 'react';
// @ts-expect-error   lodfkgoirtigrfjbg
import Faq from 'react-faq-component';
import { motion, useInView } from 'framer-motion';

const data = {
  title: "",
  rows: [
    {
      title: "How does ChainPay ensure payment security?",
      content:
        "ChainPay leverages blockchain technology for secure, transparent transactions. Our smart contracts are audited and tested to ensure maximum security for all parties involved in the payment process.",
    },
    {
      title: "What cryptocurrencies are supported?",
      content:
        "We support a wide range of cryptocurrencies including Bitcoin, Ethereum, USDC, USDT, and many other popular tokens across multiple blockchain networks.",
    },
    {
      title: "How are payment disputes handled?",
      content:
        "Our platform includes built-in dispute resolution mechanisms with automated arbitration and manual review processes to ensure fair outcomes for all parties.",
    },
    {
      title: "Can I customize payment terms and conditions?",
      content:
        "Yes! You can set custom payment schedules, milestone-based releases, and define specific terms that work best for your business needs.",
    },
    {
      title: "What happens if a client misses a payment deadline?",
      content:
        "ChainPay automatically sends reminder notifications and can trigger predefined actions like late fees or contract modifications based on your settings.",
    },
  ],
};

const styles = {
  bgColor: "transparent",
  rowTitleColor: "#d1d5db", 
  rowTitleTextSize: "18px",
  rowContentColor: "#d1d5db",
  rowContentTextSize: "16px",
  arrowColor: "#3b82f6", // blue-500
  transitionDuration: "0.3s",
  rowTitlePadding: "18px 0",
  rowContentPadding: "200px 20px 20px",
};

const config = {
  animate: true,
  arrowIcon: "⌄", // Chevron-down style
  tabFocus: true,
};



const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 px-6 relative overflow-hidden "
    >
      {/* Soft background blur effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800 text-blue-400 font-semibold text-sm mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about ChainPay and how it works.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" bg-dark-200 rounded-3xl p-8 md:p-10 border border-white/10 shadow-xl transition-all duration-300"
        >
          <Faq data={data} styles={styles} config={config} />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
