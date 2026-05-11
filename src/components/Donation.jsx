import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Donation({ openDonationModal }) {
  const impactItems = [
    { amount: '₹100', impact: 'Provides meals for a family' },
    { amount: '₹500', impact: 'Funds 1 month school supplies' },
    { amount: '₹1000', impact: 'Supports medical check-ups' },
    { amount: '₹5000', impact: 'Funds one complete medical camp' },
  ];

  return (
    <section id="donation" className="py-20 px-4 bg-gradient-to-b from-white to-vaasum-light-green/10 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Make a Difference Today
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Your generous contribution helps us continue our mission to transform lives and build a better tomorrow. Every donation matters!
          </p>
        </motion.div>

        {/* Impact Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {impactItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ translateY: -5 }}
            >
              <h4 className="text-3xl font-bold text-vaasum-green mb-3">{item.amount}</h4>
              <p className="text-gray-600 dark:text-gray-400">{item.impact}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-vaasum-dark-blue to-vaasum-green rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <motion.div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 animate-pulse" fill="currentColor" />
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of supporters who are transforming lives through their generous donations.
          </p>
          <motion.button
            onClick={() => openDonationModal?.('General Donation')}
            className="px-10 py-4 bg-white text-vaasum-dark-blue rounded-full font-bold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={20} fill="currentColor" />
            Donate Now
          </motion.button>
        </motion.div>

        {/* Trust & Security Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-6 justify-center"
        >
          {['🔒 Secure Payment', '✓ 100% Trusted', '🌍 ISO Certified', '💯 Tax Deductible'].map(
            (badge, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-semibold text-gray-700 dark:text-gray-300">{badge}</span>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-vaasum-light-green/20 to-vaasum-green/20 rounded-2xl border border-vaasum-green/30"
        >
          <p className="text-center text-gray-700 dark:text-gray-300 italic text-lg">
            "Your donation is more than just money—it's hope, it's opportunity, it's love in action. Every rupee counts, every contribution matters."
          </p>
          <p className="text-center text-vaasum-green font-bold mt-4">
            — VAASUM Foundation Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
