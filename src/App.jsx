import React, { useState, useEffect } from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Statistics from './components/Statistics';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingDonateButton from './components/FloatingDonateButton';
import ScrollToTop from './components/ScrollToTop';
import DonationModal from './components/DonationModal';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [donationCategory, setDonationCategory] = useState('General');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const openDonationModal = (category = 'General') => {
    setDonationCategory(category);
    setIsDonationModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 min-h-screen`}>
        <Navigation isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Projects openDonationModal={openDonationModal} />
        <About />
        <Statistics />
        <Gallery />
        <Testimonials />
        <Donation openDonationModal={openDonationModal} />
        <Contact />
        <Footer />
        <FloatingDonateButton openDonationModal={openDonationModal} />
        <ScrollToTop />
        <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} category={donationCategory} />
      </div>
    </div>
  );
}
