import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  CreditCard,
  FileText,
  Mail,
  DollarSign,
  Unlock,
  Wallet,
  PiggyBank,
  Bell
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      initial={{  y: 30 }}
      animate={isInView ? { y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="bg-dark-200 rounded-2xl p-6 border border-dark-300 hover:border-primary-500 transition-all duration-300 transform-gpu will-change-transform shadow-md"
    >
      <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-dark-300 to-dark-400 inline-block text-primary-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <CreditCard size={24} />,
      title: 'Branded Payment Links',
      description: 'Customizable payment links that match your brand and enhance client trust.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Auto-generated Invoices',
      description: 'Professional invoices created automatically with all payment details included.'
    },
    {
      icon: <Mail size={24} />,
      title: 'Automated Reminders',
      description: 'Set and forget email reminders sent to clients without awkward follow-ups.'
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Real-time Payment Detection',
      description: 'Instant on-chain payment detection with immediate notifications.'
    },
    {
      icon: <Unlock size={24} />,
      title: 'Automatic Code Release',
      description: 'Release your work automatically after payment confirmation.'
    },
    {
      icon: <Wallet size={24} />,
      title: 'Multiple Token Support',
      description: 'Accept native tokens and stablecoins for maximum flexibility.'
    },
    {
      icon: <PiggyBank size={24} />,
      title: 'No Third Parties',
      description: 'True peer-to-peer blockchain payments without intermediaries.'
    },
    {
      icon: <Bell size={24} />,
      title: 'Custom Notification Rules',
      description: 'Configure expiry dates and notification schedules to your needs.'
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-block px-4 py-2 rounded-full bg-dark-300 text-primary-300 font-medium text-sm mb-4"
          >
            Powerful Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Everything You Need for Seamless Payments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Our platform automates the entire payment process from invoicing to receipt, so you can
            focus on your work instead of chasing payments.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[50px]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
