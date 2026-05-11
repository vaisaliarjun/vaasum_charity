import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Zap, Users, Shield } from 'lucide-react';

export default function About() {
  const services = [
    {
      id: 1,
      icon: BookOpen,
      title: 'Education for All',
      description: 'We provide free learning resources, scholarships, and digital education tools to children in need because education is the first step to breaking the cycle of poverty.',
      bgColor: 'from-blue-400 to-blue-600',
      position: 'top-left',
    },
    {
      id: 2,
      icon: Heart,
      title: 'Health & Wellness',
      description: 'From organising free medical camps to promoting hygiene awareness, we work to ensure communities stay healthy and informed.',
      bgColor: 'from-red-400 to-red-600',
      position: 'top-center',
    },
    {
      id: 3,
      icon: Users,
      title: 'Women Empowerment',
      description: 'We train women in vocational skills, support self-help groups, and encourage financial independence for a stronger society.',
      bgColor: 'from-pink-400 to-pink-600',
      position: 'top-right',
    },
    {
      id: 4,
      icon: Zap,
      title: 'Skill Development',
      description: 'Through workshops and training programs, we equip youth and adults with the skills needed for sustainable livelihoods.',
      bgColor: 'from-yellow-400 to-yellow-600',
      position: 'bottom-left',
    },
    {
      id: 5,
      icon: Shield,
      title: 'Disaster Relief & Support',
      description: 'We provide emergency relief support, food supplies, healthcare assistance, and rehabilitation during disasters.',
      bgColor: 'from-green-400 to-green-600',
      position: 'bottom-right',
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            What We Do
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Our comprehensive approach to social impact covers five key areas, each designed to create lasting change in families and communities.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`col-span-1 ${service.position === 'top-center' ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <motion.div
                  className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 h-full text-white shadow-lg hover:shadow-2xl transition-all group`}
                  whileHover={{ scale: 1.05, translateY: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="mb-4 inline-block p-4 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon size={32} />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-6 h-1 bg-white/30 rounded"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          {[
            { number: '10K+', label: 'Lives Impacted' },
            { number: '500+', label: 'Active Volunteers' },
            { number: '50+', label: 'Villages Supported' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-charity-orange mb-2">{stat.number}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
