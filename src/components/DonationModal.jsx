import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Check } from 'lucide-react';

export default function DonationModal({ isOpen, onClose, category = 'General' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    amount: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const presetAmounts = [100, 500, 1000, 5000, 10000];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Phone must be 10 digits';
    }
    if (!formData.amount || parseFloat(formData.amount) <= 0) newErrors.amount = 'Valid amount required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: '', phoneNumber: '', email: '', amount: '', message: '' });
        onClose();
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleAmountSelect = (amount) => {
    setFormData({ ...formData, amount: amount.toString() });
    setErrors({ ...errors, amount: '' });
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-vaasum-dark-blue to-vaasum-green text-white p-6 md:p-8 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{category} Donation</h2>
                  <p className="text-sm md:text-base text-white/80">Make a difference today</p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Success Message */}
            {submitted && (
              <motion.div
                className="m-6 md:m-8 p-6 bg-green-50 dark:bg-green-900/30 border-2 border-green-500 rounded-2xl text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <Check className="w-12 h-12 text-green-500 mx-auto" fill="currentColor" />
                </motion.div>
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">
                  Thank You for Your Support!
                </h3>
                <p className="text-green-600 dark:text-green-300">
                  Your donation of ₹{formData.amount} for {category} has been received.
                </p>
              </motion.div>
            )}

            {/* Form */}
            {!submitted && (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                {/* Donation Amount */}
                <div>
                  <label className="block text-sm font-semibold mb-3 dark:text-white">
                    Select or Enter Amount (₹)
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                    {presetAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 rounded-lg font-bold transition-all text-sm md:text-base ${
                          formData.amount === amount.toString()
                            ? 'bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ₹{amount}
                      </motion.button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Or enter custom amount"
                    value={formData.amount}
                    onChange={(e) => {
                      setFormData({ ...formData, amount: e.target.value });
                      setErrors({ ...errors, amount: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all dark:bg-gray-700 dark:text-white ${
                      errors.amount ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-vaasum-green'
                    }`}
                  />
                  <p className="text-center text-vaasum-green font-semibold text-lg mt-3">💝 Make a Difference Today</p>
                  {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-white">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all dark:bg-gray-700 dark:text-white ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-vaasum-green'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-white">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all dark:bg-gray-700 dark:text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-vaasum-green'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-white">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      setErrors({ ...errors, phoneNumber: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all dark:bg-gray-700 dark:text-white ${
                      errors.phoneNumber ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-vaasum-green'
                    }`}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                </div>

                {/* Donation Category */}
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-white">Donation Category</label>
                  <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg dark:text-white">
                    {category}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-white">Message / Notes</label>
                  <textarea
                    placeholder="Share your thoughts or special message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-vaasum-green transition-all dark:bg-gray-700 dark:text-white resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white font-bold rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Heart size={20} fill="currentColor" />
                  Donate ₹{formData.amount || '0'}
                </motion.button>

                {/* Close Button */}
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
