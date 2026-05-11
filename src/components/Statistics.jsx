import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, Globe } from 'lucide-react';

export default function Statistics() {
  const [counts, setCounts] = useState({ lives: 0, volunteers: 0, campaigns: 0, villages: 0 });

  useEffect(() => {
    const duration = 2000;
    const targets = { lives: 10000, volunteers: 500, campaigns: 100, villages: 50 };
    const start = Date.now();

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);

      setCounts({
        lives: Math.floor(progress * targets.lives),
        volunteers: Math.floor(progress * targets.volunteers),
        campaigns: Math.floor(progress * targets.campaigns),
        villages: Math.floor(progress * targets.villages),
      });

      if (progress === 1) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Heart,
      value: `${counts.lives}+`,
      label: 'Lives Impacted',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Users,
      value: `${counts.volunteers}+`,
      label: 'Active Volunteers',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Award,
      value: `${counts.campaigns}+`,
      label: 'Campaigns Launched',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Globe,
      value: `${counts.villages}+`,
      label: 'Villages Supported',
      color: 'from-green-400 to-green-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="statistics" className="py-20 px-4 bg-gradient-to-r from-charity-blue to-charity-orange">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Impact by Numbers
          </h2>
          <p className="text-white/90 text-lg">
            Celebrating the incredible achievements we've made together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className={`inline-block p-6 rounded-full bg-white/20 mb-4 group`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={40} className="text-white" />
                </motion.div>

                <motion.h3
                  className="text-5xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {stat.value}
                </motion.h3>

                <p className="text-white/90 font-semibold text-lg">{stat.label}</p>

                {/* Animated Bar */}
                <motion.div
                  className="mt-4 h-1 bg-white/30 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${stat.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/90 text-lg mb-6">
            Help us reach new milestones and impact even more lives.
          </p>
          <motion.button
            onClick={() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-charity-blue rounded-full font-bold text-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
