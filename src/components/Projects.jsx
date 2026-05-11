import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects({ openDonationModal }) {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  const projects = [
    {
      id: 1,
      title: 'Food Donation',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
      description: 'Providing nutritious meals to families in need and supporting food security programs.',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 2,
      title: 'Medical Camps',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop',
      description: 'Organizing free medical camps and healthcare awareness sessions for rural communities.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 3,
      title: 'Child Education',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
      description: 'Providing scholarships and digital learning resources to underprivileged children.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 4,
      title: 'Women Support',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      description: 'Empowering women through vocational training and self-help group initiatives.',
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 5,
      title: 'Disaster Relief',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
      description: 'Emergency response and rehabilitation support during natural disasters.',
      color: 'from-green-400 to-green-600',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScroll({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 10,
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Our Impact Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Transforming lives through our carefully curated charitable initiatives
          </p>
        </motion.div>

        {/* Scroll Container */}
        <div className="relative">
          <motion.div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 group"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  {/* Glassmorphism Card */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                      <motion.button
                        onClick={() => openDonationModal?.(project.title)}
                        className="w-full px-4 py-2 bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart size={18} /> Donate
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            disabled={!canScroll.left}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 p-3 rounded-full ${
              canScroll.left
                ? 'bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white hover:shadow-lg'
                : 'bg-gray-300 text-gray-500'
            } transition-all`}
            whileHover={canScroll.left ? { scale: 1.1 } : {}}
            whileTap={canScroll.left ? { scale: 0.95 } : {}}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            disabled={!canScroll.right}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 p-3 rounded-full ${
              canScroll.right
                ? 'bg-gradient-to-r from-vaasum-green to-vaasum-light-green text-white hover:shadow-lg'
                : 'bg-gray-300 text-gray-500'
            } transition-all`}
            whileHover={canScroll.right ? { scale: 1.1 } : {}}
            whileTap={canScroll.right ? { scale: 0.95 } : {}}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
