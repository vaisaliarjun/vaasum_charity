import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': ['Home', 'Projects', 'About', 'Gallery', 'Contact'],
    'Get Involved': ['Donate Now', 'Become Volunteer', 'Partner With Us', 'Events'],
    'Resources': ['Blog', 'Annual Report', 'Testimonials', 'FAQs'],
  };

  const socialLinks = [
    { icon: 'f', url: '#', name: 'Facebook' },
    { icon: 'X', url: '#', name: 'Twitter' },
    { icon: 'in', url: '#', name: 'LinkedIn' },
    { icon: 'ig', url: '#', name: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-vaasum-dark-blue to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-gradient-to-r from-vaasum-light-green/20 to-vaasum-green/20 rounded-2xl border border-vaasum-green/30"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to stay informed about our latest initiatives and impact stories.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-vaasum-light-green transition-colors"
              required
            />
            <motion.button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} /> Subscribe
            </motion.button>
          </form>
          {subscribed && (
            <motion.p
              className="text-green-400 mt-3 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✓ Thanks for subscribing!
            </motion.p>
          )}
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            {/* Logo */}
            <div className="mb-4">
              <img 
                src="/logo image.jpeg" 
                alt="VAASUM Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Together, we can bring hope, spread kindness, and transform lives for a better tomorrow.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} /> vaasumfoundation@gmail.com
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} /> +91 98765 43210
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1" /> Chennai, Tamil Nadu, India
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-vaasum-green hover:border-vaasum-green transition-all"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <span className="text-lg font-bold">{social.icon}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4 text-vaasum-light-green">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIdx) => (
                  <motion.li
                    key={linkIdx}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-vaasum-green/50 to-transparent mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} VAASUM FOUNDATION. All Rights Reserved.
          </motion.p>

          <motion.div
            className="flex gap-6 mt-4 sm:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="hover:text-vaasum-light-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-vaasum-light-green transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-vaasum-light-green transition-colors">
              Cookie Policy
            </a>
          </motion.div>
        </div>

        {/* Brand Message */}
        <motion.div
          className="mt-6 text-center text-gray-500 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Made with <Heart size={16} className="text-vaasum-green fill-current" /> by VAASUM Foundation
        </motion.div>
      </div>
    </footer>
  );
}
