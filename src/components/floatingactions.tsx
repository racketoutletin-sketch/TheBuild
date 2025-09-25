import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const WhatsAppIcon: React.FC = () => (
  <img src="/whatsapp.webp" alt="WhatsApp" className="w-14 h-14" />
);

const ArrowUpIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
);

const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9491147433', '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Button - Left */}
      <div className="fixed bottom-6 left-6 flex flex-col items-center z-50">
        <motion.button
          onClick={handleWhatsAppClick}
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: [0, -10, 10, -10, 10, 0], // shake effect
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 6, // shakes every 6s
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <WhatsAppIcon />
        </motion.button>
      </div>

      {/* Scroll to Top Button - Right */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="bg-primary text-white rounded-full p-3 shadow-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-all duration-300 ease-in-out"
            aria-label="Scroll to top"
            title="Scroll to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpIcon />
          </motion.button>
        )}
      </div>
    </>
  );
};

export default FloatingActions;
