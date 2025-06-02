'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const tableData = [
    {
      feature: 'Branded Payment Pages',
      ourPlatform: { value: 'Yes (fully customizable)', highlight: true },
      traditional: { value: 'No', highlight: false },
      web3Escrow: { value: 'No', highlight: false },
    },
    {
      feature: 'Auto Invoice Generation',
      ourPlatform: { value: 'Yes', highlight: true },
      traditional: { value: 'No (manual or 3rd party)', highlight: false },
      web3Escrow: { value: 'Sometimes', highlight: false },
    },
    {
      feature: 'Email Payment Reminders',
      ourPlatform: { value: 'Yes (automated)', highlight: true },
      traditional: { value: 'No (manual follow-up)', highlight: false },
      web3Escrow: { value: 'Rare', highlight: false },
    },
    {
      feature: 'On-Chain Payment Detection',
      ourPlatform: { value: 'Yes (real-time alerts)', highlight: true },
      traditional: { value: 'Not applicable', highlight: false },
      web3Escrow: { value: 'Yes', highlight: false },
    },
    {
      feature: 'Auto Code/Service Release',
      ourPlatform: { value: 'Yes (on confirmation)', highlight: true },
      traditional: { value: 'No (manual handover)', highlight: false },
      web3Escrow: { value: 'Yes (via escrow)', highlight: false },
    },
    {
      feature: 'Stablecoin + Native Token Support',
      ourPlatform: { value: 'Yes', highlight: true },
      traditional: { value: 'No (mostly fiat)', highlight: false },
      web3Escrow: { value: 'Yes', highlight: false },
    },
    {
      feature: 'Escrow-Free Peer-to-Peer',
      ourPlatform: { value: 'Yes', highlight: true },
      traditional: { value: 'Yes', highlight: false },
      web3Escrow: { value: 'No (requires locking funds)', highlight: false },
    },
    {
      feature: 'Custom Expiry & Alerts',
      ourPlatform: { value: 'Yes (fully configurable)', highlight: true },
      traditional: { value: 'No', highlight: false },
      web3Escrow: { value: 'Limited', highlight: false },
    },
    {
      feature: 'Freelancer Experience',
      ourPlatform: { value: 'Seamless, modern, and Web3-native', highlight: true },
      traditional: { value: 'Outdated and effort-heavy', highlight: false },
      web3Escrow: { value: 'Complicated and dev-focused', highlight: false },
    },
  ];

  const containerVariants = {
    hidden: {  scale: 0.98 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const rowVariants = {
    hidden: {  y: 30 },
    visible: {
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const getIcon = (value: string) => {
    if (value.toLowerCase().includes('yes')) {
      return (
        <motion.span whileHover={{ scale: 1.2 }}>
          <Check size={18} className="mr-2 text-primary-400 flex-shrink-0" />
        </motion.span>
      );
    } else if (value.toLowerCase().includes('no')) {
      return (
        <motion.span whileHover={{ scale: 1.2 }}>
          <X size={18} className="mr-2 text-gray-500 flex-shrink-0" />
        </motion.span>
      );
    }
    return null;
  };

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Blur Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-2 rounded-full bg-dark-300 text-primary-300 font-medium text-sm mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            How We Compare
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            See how our platform stacks up against traditional freelance tools and other Web3 solutions.
          </motion.p>
        </motion.div>

        {/* Table */}
        <div className="overflow-x-auto">
          <motion.div
            variants={containerVariants}
            // initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="min-w-max"

            initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  // className="min-w-max"
            // className="min-w-max"
          >
            <div className="bg-dark-200 rounded-xl overflow-hidden border border-dark-300 shadow-2xl relative">
              {/* Table Header */}
              <div className="grid grid-cols-4 border-b border-dark-400 bg-dark-300/50 backdrop-blur-md">
                <div className="p-4 font-medium text-gray-400">Feature</div>
                <div className="p-4 font-semibold text-primary-300 border-l border-dark-400">Our Platform</div>
                <div className="p-4 font-medium text-gray-400 border-l border-dark-400">Traditional</div>
                <div className="p-4 font-medium text-gray-400 border-l border-dark-400">Web3 Escrow</div>
              </div>

              {/* Table Rows */}
              {tableData.map((row, index) => (
  <motion.div
    key={index}
    variants={rowVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`grid grid-cols-4 ${index !== tableData.length - 1 ? 'border-b border-dark-400' : ''} bg-dark-200 hover:bg-dark-300`}
  >
    <div className="p-4 font-medium text-white">{row.feature}</div>

    <div className="p-4 border-l border-dark-400">
      <div className={`flex items-center ${row.ourPlatform.highlight ? 'text-primary-300' : 'text-gray-300'}`}>
        {typeof row.ourPlatform.value === 'string' && row.ourPlatform.value.toLowerCase().includes('yes') ? (
          <Check size={18} className="mr-2 text-primary-400 flex-shrink-0" />
        ) : row.ourPlatform.value.toLowerCase().includes('no') ? (
          <X size={18} className="mr-2 text-gray-500 flex-shrink-0" />
        ) : null}
        <span>{row.ourPlatform.value}</span>
      </div>
    </div>

    <div className="p-4 border-l border-dark-400">
      <div className="flex items-center text-gray-300">
        {typeof row.traditional.value === 'string' && row.traditional.value.toLowerCase().includes('yes') ? (
          <Check size={18} className="mr-2 text-primary-400 flex-shrink-0" />
        ) : row.traditional.value.toLowerCase().includes('no') ? (
          <X size={18} className="mr-2 text-gray-500 flex-shrink-0" />
        ) : null}
        <span>{row.traditional.value}</span>
      </div>
    </div>

    <div className="p-4 border-l border-dark-400">
      <div className="flex items-center text-gray-300">
        {typeof row.web3Escrow.value === 'string' && row.web3Escrow.value.toLowerCase().includes('yes') ? (
          <Check size={18} className="mr-2 text-primary-400 flex-shrink-0" />
        ) : row.web3Escrow.value.toLowerCase().includes('no') ? (
          <X size={18} className="mr-2 text-gray-500 flex-shrink-0" />
        ) : null}
        <span>{row.web3Escrow.value}</span>
      </div>
    </div>
  </motion.div>
))}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
