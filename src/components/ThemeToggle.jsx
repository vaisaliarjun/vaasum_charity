import React from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ isDark, toggleDarkMode }) {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`fixed top-24 right-8 p-3 rounded-full z-40 transition-all ${
        isDark
          ? 'bg-gray-800 text-yellow-400'
          : 'bg-gray-100 text-gray-700'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  );
}
