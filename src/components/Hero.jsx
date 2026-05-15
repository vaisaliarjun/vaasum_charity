import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen md:min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden"
      style={{
        backgroundImage: 'url(/bg%20img%20front.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center text-white flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            VAASUM CHARITY
          </motion.h1>

          {/* Subtitle/Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed opacity-95 max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Together, we can bring hope, spread kindness, and transform lives for a better tomorrow.
          </motion.p>

          {/* CTA Buttons - Stack on mobile, side-by-side on desktop */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:brightness-110 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💝 Donate Now
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md border-2 border-white text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🤝 Become a Volunteer
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on small mobile devices */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="sm:w-8 sm:h-8 text-white opacity-70" />
        </motion.div>
      </div>
    </section>
  );
}
