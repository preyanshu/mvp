import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-dark-300 border-t border-dark-400 pt-12 pb-8 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-accent-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            ChainPay
          </span>
          <p className="text-gray-400 mt-1 max-w-xs">
            Seamlessly pay freelancers in crypto — no escrow, no hassle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-6"
        >
          {socialLinks.map(({ Icon, href, label }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-10 text-center text-gray-500 text-sm select-none"
      >
        © {currentYear} ChainPay. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
