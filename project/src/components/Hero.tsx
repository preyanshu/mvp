import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Wallet, Clock, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  const titleY = useTransform(textScrollProgress, [0, 1], [100, -100]);
  const titleOpacity = useTransform(textScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatingIcons = [
    { Icon: Wallet, x: -5, y: -10, delay: 0 },
    { Icon: Clock, x: 5, y: 10, delay: 1 },
    { Icon: Shield, x: 15, y: -5, delay: 1.8 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
      id="home"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={textRef}
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center md:text-left"
            style={{ scale }}
          >
            <motion.div variants={item} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-dark-300 text-primary-300 font-medium text-sm mb-8">
                The Future of Freelance Payments
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              style={{ y: titleY, opacity: titleOpacity }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent leading-tight"
            >
              Get Paid Faster. Smarter. On-Chain.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
            >
              The first Web3-native freelance payment platform — no escrow, no awkward follow-ups, just seamless crypto payments.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: "anticipate" }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium flex items-center justify-center gap-2 group"
              >
                Join Waitlist
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: "anticipate" }}
                className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:bg-dark-200 transition-colors"
              >
                How It Works
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            style={{ scale }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                className="bg-gradient-to-b from-dark-300 to-dark-100 rounded-2xl p-1"
              >
                <div className="bg-dark-300 rounded-2xl overflow-hidden border border-dark-500 shadow-2xl">
                  <div className="px-6 py-4 border-b border-dark-500 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-accent-500" />
                      <div className="w-3 h-3 rounded-full bg-secondary-500" />
                      <div className="w-3 h-3 rounded-full bg-primary-500" />
                    </div>
                    <div className="ml-4 text-sm text-gray-400">Invoice for client: Acme Inc</div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Web Application Redesign</h3>
                        <p className="text-gray-400 text-sm">Due date: 30 days from now</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">5,000 USDC</p>
                        <p className="text-gray-400 text-sm">~$5,000.00 USD</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="h-2 w-full bg-dark-400 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                        />
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-gray-400">Invoice Created</span>
                        <span className="text-xs text-gray-400">Payment Received</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-full py-3 rounded-lg bg-primary-500 text-white font-medium"
                    >
                      Pay Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              {/* {floatingIcons.map(({ Icon, x, y, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: [y, y - 10, y],
                    x: [x, x + 6, x],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay },
                    y: {
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 4,
                      delay,
                      ease: "easeInOut",
                    },
                    x: {
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 5,
                      delay: delay + 0.3,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute text-primary-400"
                  style={{
                    top: `${20 + index * 25}%`,
                    [index % 2 === 0 ? "left" : "right"]: `${10 + index * 5}%`,
                  }}
                >
                  <Icon size={index % 2 === 0 ? 32 : 24} />
                </motion.div>
              ))} */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
