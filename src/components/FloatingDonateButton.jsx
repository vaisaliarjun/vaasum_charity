import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FloatingDonateButton({ openDonationModal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      onClick={() => openDonationModal?.('General Donation')}
      className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white rounded-full shadow-2xl hover:shadow-3xl z-40 flex items-center justify-center gap-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Heart size={24} fill="currentColor" className="animate-pulse" />
      <span className="font-bold text-sm hidden sm:inline">Donate</span>
    </motion.button>
  );
}
