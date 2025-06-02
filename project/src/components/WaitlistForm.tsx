import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Send, Check } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section 
      id="waitlist"
      ref={sectionRef} 
      className="py-24 px-6 relative overflow-hidden"
      aria-label="Join the waitlist section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
          className="bg-dark-200 rounded-2xl p-8 md:p-12 border border-dark-300 shadow-2xl"
        >
          <div className="text-center mb-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-dark-300 text-primary-300 font-medium text-sm mb-4"
            >
              Early Access
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Join the Waitlist
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Tired of chasing payments or feeling awkward about follow-ups?
              We're building the first peer-to-peer Web3 freelance payment solution that automates everything.
            </motion.p>
          </div>

          <motion.form 
            initial={{  y: 20 }}
            animate={isInView ? {  y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            noValidate
          >
            <div className="relative">
              {!isSubmitted ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-full bg-dark-300 border border-dark-400 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all duration-300"
                    disabled={isLoading}
                    aria-label="Email address"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading || !email}
                    className="absolute right-2 top-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Join waitlist"
                  >
                    {isLoading ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Send size={16} />
                      </motion.span>
                    ) : (
                      <>
                        Join <ArrowRight size={16} className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full px-6 py-4 rounded-full bg-dark-300 border border-primary-500 text-white flex items-center justify-center"
                  role="alert"
                >
                  <Check size={18} className="text-primary-500 mr-2" />
                  <span>Thank you! You're on the waitlist.</span>
                </motion.div>
              )}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              We'll send you updates on our launch and exclusive early access.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;
