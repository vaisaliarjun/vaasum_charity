import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FloatingScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show button if scrolled down
      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine scroll direction and set arrow direction
      if (currentScrollY > window.innerHeight) {
        setScrollDirection('up');
      } else if (currentScrollY > 100) {
        setScrollDirection('down');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    if (scrollDirection === 'up') {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Scroll to next section (find the next section after current position)
      const sections = document.querySelectorAll('section');
      let nextSection = null;

      for (let section of sections) {
        if (section.offsetTop > window.scrollY + window.innerHeight / 2) {
          nextSection = section;
          break;
        }
      }

      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If no next section, scroll to bottom
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center pointer-events-auto transition-all duration-300 ${
        scrollDirection === 'up'
          ? 'bg-gradient-to-br from-charity-orange to-red-600 hover:shadow-[0_0_30px_rgba(255,140,66,0.6)]'
          : 'bg-gradient-to-br from-vaasum-green to-vaasum-light-green hover:shadow-[0_0_30px_rgba(47,180,148,0.6)]'
      }`}
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor:
          scrollDirection === 'up'
            ? 'rgba(255, 140, 66, 0.2)'
            : 'rgba(47, 180, 148, 0.2)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
      }}
      aria-label={scrollDirection === 'up' ? 'Scroll to top' : 'Scroll to next section'}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-pulse-glow"></div>

      {/* Icon */}
      <div className="relative z-10 text-white flex items-center justify-center">
        {scrollDirection === 'up' ? (
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronUp size={24} className="sm:w-6 sm:h-6 font-bold" />
          </motion.div>
        ) : (
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} className="sm:w-6 sm:h-6 font-bold" />
          </motion.div>
        )}
      </div>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background:
            scrollDirection === 'up'
              ? [
                  'linear-gradient(45deg, rgba(255, 140, 66, 0.3), rgba(220, 38, 38, 0.3))',
                  'linear-gradient(135deg, rgba(255, 140, 66, 0.4), rgba(220, 38, 38, 0.4))',
                  'linear-gradient(45deg, rgba(255, 140, 66, 0.3), rgba(220, 38, 38, 0.3))',
                ]
              : [
                  'linear-gradient(45deg, rgba(47, 180, 148, 0.3), rgba(125, 211, 192, 0.3))',
                  'linear-gradient(135deg, rgba(47, 180, 148, 0.4), rgba(125, 211, 192, 0.4))',
                  'linear-gradient(45deg, rgba(47, 180, 148, 0.3), rgba(125, 211, 192, 0.3))',
                ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.button>
  );
}
