import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Zap, Users, Shield, Droplet } from 'lucide-react';

// Typing Animation Component
function TypingText({ text, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prevText) => {
          if (index < text.length) {
            index++;
            return text.slice(0, index);
          }
          clearInterval(interval);
          return text;
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return displayedText;
}

export default function About() {
  const timelineCards = [
    {
      id: 1,
      icon: BookOpen,
      title: 'Education for All',
      category: 'Learning Programs',
      description: 'We provide free learning resources, scholarships, and digital education tools to children in need because education is the foundation for breaking the cycle of poverty.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      colorTag: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400',
      position: 'left',
    },
    {
      id: 2,
      icon: Heart,
      title: 'Health & Wellness',
      category: 'Medical Camps',
      description: 'From organising free medical camps to promoting hygiene awareness, we work to ensure communities stay healthy and informed about preventive care.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      colorTag: 'from-red-400 to-red-600',
      borderColor: 'border-red-400',
      position: 'right',
    },
    {
      id: 3,
      icon: Users,
      title: 'Women Empowerment',
      category: 'Self-Help Groups',
      description: 'We train women in vocational skills, support self-help groups, and encourage financial independence to build a stronger and more equitable society.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      colorTag: 'from-pink-400 to-pink-600',
      borderColor: 'border-pink-400',
      position: 'left',
    },
    {
      id: 4,
      icon: Zap,
      title: 'Skill Development',
      category: 'Vocational Training',
      description: 'Through workshops and comprehensive training programs, we equip youth and adults with in-demand skills needed for sustainable and fulfilling livelihoods.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      colorTag: 'from-yellow-400 to-yellow-600',
      borderColor: 'border-yellow-400',
      position: 'right',
    },
    {
      id: 5,
      icon: Shield,
      title: 'Disaster Relief',
      category: 'Emergency Support',
      description: 'We provide emergency relief support, essential food supplies, healthcare assistance, and rehabilitation to help communities recover during natural disasters.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      colorTag: 'from-green-400 to-green-600',
      borderColor: 'border-green-400',
      position: 'left',
    }
    {
      id: 6,
      icon: Droplet,
      title: 'Water & Sanitation',
      category: 'Community Projects',
      description: 'We work to ensure access to clean drinking water and proper sanitation facilities to improve health and quality of life in underserved communities.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      colorTag: 'from-cyan-400 to-cyan-600',
      borderColor: 'border-cyan-400',
      position: 'right',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: (isLeft) => isLeft ? -50 : 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const isLeft = (position) => position === 'left';

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Our Impact Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Discover the transformative work we do across multiple areas, creating lasting change in communities worldwide.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-vaasum-green via-vaasum-light-green to-vaasum-green opacity-30" />

          {/* Timeline Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12 md:space-y-16"
          >
            {timelineCards.map((card, idx) => {
              const Icon = card.icon;
              const isCardLeft = card.position === 'left';
              
              return (
                <motion.div
                  key={card.id}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      x: isCardLeft ? -50 : 50, 
                      scale: 0.8,
                      rotateY: isCardLeft ? -20 : 20 
                    },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      rotateY: 0,
                      transition: { 
                        duration: 0.8, 
                        ease: 'easeOut',
                        delay: idx * 0.15
                      } 
                    },
                  }}
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-0"
                >
                  {/* Left Side Content - Hide on Right Side Timeline */}
                  <div className={`w-full md:w-5/12 ${isCardLeft ? 'block' : 'hidden'}`} />

                  {/* Center Timeline Dot */}
                  <motion.div
                    className="relative w-16 h-16 md:w-12 md:h-12 flex items-center justify-center z-10 flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-vaasum-green to-vaasum-light-green opacity-20 blur-md" />
                    <div className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-vaasum-green to-vaasum-light-green flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                  </motion.div>

                  {/* Right Side Content */}
                  <div className={`w-full md:w-5/12 ${!isCardLeft ? 'block' : 'hidden'} ${isCardLeft ? 'md:block md:text-right' : ''}`}>
                    <motion.div
                      className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group ${
                        !isCardLeft ? 'md:ml-0' : 'md:mr-0'
                      }`}
                      whileHover={{ scale: 1.05, translateY: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${card.image}')` }}
                      >
                        <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 origin-center" />
                      </div>

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/60 to-black/80 group-hover:from-black/60 group-hover:via-black/70 group-hover:to-black/90 transition-all duration-500" />

                      {/* Glassmorphism Border */}
                      <div className={`absolute inset-0 border-2 ${card.borderColor} rounded-2xl backdrop-blur-sm opacity-50`} />

                      {/* Content */}
                      <div className="relative h-80 md:h-96 p-6 md:p-8 flex flex-col justify-between text-white">
                        {/* Category Tag */}
                        <motion.div
                          className={`w-fit px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${card.colorTag} shadow-lg backdrop-blur-md`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {card.category}
                        </motion.div>

                        <div className="mt-auto">
                          {/* Icon with Animation */}
                          <motion.div
                            className="mb-4 inline-block p-3 bg-white/20 rounded-lg backdrop-blur-md border border-white/30 group-hover:bg-white/30 transition-colors"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon size={28} />
                          </motion.div>

                          {/* Title with Typing Animation */}
                          <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            <TypingText text={card.title} delay={card.id * 200} />
                          </h3>

                          {/* Description */}
                          <p className="text-sm md:text-base leading-relaxed opacity-90 line-clamp-3">
                            {card.description}
                          </p>

                          {/* Bottom Accent Line */}
                          <motion.div
                            className="mt-4 h-1 bg-gradient-to-r from-vaasum-light-green via-vaasum-green to-transparent rounded-full origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          boxShadow: 'inset 0 0 30px rgba(34, 197, 94, 0.2)',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Left Side Content - Show on Left Side Timeline */}
                  <div className={`w-full md:w-5/12 ${!isCardLeft ? 'block' : 'hidden'}`} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-gray-200 dark:border-gray-700"
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
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-vaasum-green to-vaasum-light-green bg-clip-text text-transparent mb-2">{stat.number}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
