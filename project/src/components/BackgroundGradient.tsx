import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BackgroundGradient: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  const moveGradient = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Normalize coordinates to percentage of window
    mouseX.set(clientX / windowWidth);
    mouseY.set(clientY / windowHeight);
  };
  
  useEffect(() => {
    window.addEventListener('mousemove', moveGradient);
    return () => {
      window.removeEventListener('mousemove', moveGradient);
    };
  }, []);
  
  // Transform normalized mouse coordinates to percentages for the gradient positions
  const gradientX1 = useTransform(smoothMouseX, [0, 1], ['20%', '80%']);
  const gradientY1 = useTransform(smoothMouseY, [0, 1], ['20%', '80%']);
  const gradientX2 = useTransform(smoothMouseX, [0, 1], ['80%', '20%']);
  const gradientY2 = useTransform(smoothMouseY, [0, 1], ['80%', '20%']);

  return (
    <div className="fixed inset-0 pointer-events-none opacity-50 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-dark"
        style={{
          background: `radial-gradient(circle at ${gradientX1} ${gradientY1}, rgba(99, 102, 241, 0.15), transparent 40%),
                      radial-gradient(circle at ${gradientX2} ${gradientY2}, rgba(236, 72, 153, 0.15), transparent 40%)`
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-[0.03]" />
    </div>
  );
};

export default BackgroundGradient;