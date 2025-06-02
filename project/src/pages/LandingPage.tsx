import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ComparisonTable from '../components/ComparisonTable';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';
import BackgroundGradient from '../components/BackgroundGradient';
import FAQ from '../components/FAQ';
import CustomCursor from '../components/CustomCursor';

export const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CustomCursor />
      <BackgroundGradient />
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Features />
            <ComparisonTable />
            <FAQ />
            <WaitlistForm />
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};