import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smooth the scroll value for smooth background and blur
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  const backgroundColor = useTransform(
    smoothScrollY,
    [0, 100],
    ['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, 0.8)']
  );
  
  const backdropFilter = useTransform(
    smoothScrollY,
    [0, 100],
    ['blur(0px)', 'blur(8px)']
  );

  // Close mobile menu on resize if desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const menuItems = ['Features', 'Comparison', 'FAQ']; // Pricing removed

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{ backgroundColor, backdropFilter }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            ChainPay
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {menuItems.map((item, index) => (
            <NavLink key={item} href={`#${item.toLowerCase()}`} delay={index * 0.1}>
              {item}
            </NavLink>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium"
          >
            Join Waitlist
          </motion.button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-200 mt-4 rounded-lg overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  delay?: number;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, delay = 0 }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300"
      />
    </motion.a>
  );
};

export default Header;
