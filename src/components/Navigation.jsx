import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation({ isDark, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'About', 'Gallery', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-gray-900/98 shadow-xl'
            : 'bg-white/98 shadow-xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-lg p-1">
              <img 
                src="/VAASUM_LOGO_1-removebg-preview.png" 
                alt="VAASUM Logo" 
                className="h-14 w-auto"
              />
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-semibold text-sm transition-all relative group ${
                  isDark
                    ? 'text-gray-300 hover:text-vaasum-light-green'
                    : 'text-gray-700 hover:text-vaasum-green'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-vaasum-green to-vaasum-light-green group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all border ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                🌍 {language}
              </motion.button>
              {showLanguageMenu && (
                <motion.div
                  className={`absolute right-0 mt-2 w-32 rounded-lg shadow-xl border ${
                    isDark
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-white border-gray-300'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {['EN', 'FR', 'ES', 'PT', 'IT', 'AR', 'DE', 'RU'].map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLanguageMenu(false);
                      }}
                      className={`block w-full text-left px-4 py-2 font-semibold transition-all ${
                        language === lang
                          ? isDark
                            ? 'bg-vaasum-green text-white'
                            : 'bg-vaasum-green text-white'
                          : isDark
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      {lang}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('donation')}
              className="px-8 py-3 bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white rounded-full font-bold hover:shadow-lg transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${isDark ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isDark ? 'bg-gray-800/95' : 'bg-gray-50/95'}`}
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                  isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
            {/* Mobile Language Selector */}
            <div className="px-4 py-3">
              <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Language</p>
              <div className="space-y-1">
                {['EN', 'FR', 'ES', 'PT', 'IT', 'AR', 'DE', 'RU'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded font-bold text-sm transition-all ${
                      language === lang
                        ? 'bg-vaasum-green text-white'
                        : isDark
                          ? 'text-gray-200 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <motion.button
              onClick={() => scrollToSection('donation')}
              className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white rounded-lg font-bold transition-all hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
