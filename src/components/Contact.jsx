import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vaasumfoundation@gmail.com',
      link: 'mailto:vaasumfoundation@gmail.com',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Chennai, Tamil Nadu, India',
      link: '#',
      color: 'from-green-400 to-green-600',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'f', url: '#' },
    { name: 'Twitter', icon: 'X', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: '#' },
    { name: 'Instagram', icon: 'ig', url: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to collaborate with us? We'd love to hear from you. Reach out to our team.
          </p>
        </motion.div>

        {/* Contact Info Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className={`bg-gradient-to-br ${info.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all group`}
                  whileHover={{ scale: 1.05, translateY: -10 }}
                >
                  <motion.div
                    className="mb-4 inline-block p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-sm opacity-90">{info.value}</p>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
            >
              <h3 className="font-bold text-lg mb-4 dark:text-white">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => {
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white dark:bg-gray-700 text-charity-orange shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <span className="text-xl font-bold">{social.icon}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg"
          >
            <div className="space-y-4 mb-6">
              <motion.div variants={itemVariants}>
                <label className="block font-bold mb-2 dark:text-white">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-charity-orange transition-colors"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block font-bold mb-2 dark:text-white">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-charity-orange transition-colors"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block font-bold mb-2 dark:text-white">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  rows="5"
                  className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-charity-orange transition-colors resize-none"
                  required
                />
              </motion.div>
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-charity-orange to-red-500 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} /> Send Message
            </motion.button>

            {submitted && (
              <motion.div
                className="mt-4 p-4 bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-lg text-green-700 dark:text-green-300 font-semibold text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg h-96"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5229651887847!2d80.27047!3d13.06923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5e11111111%3A0x1111111111111111!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VAASUM Foundation Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
