import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Donor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      text: 'VAASUM Foundation has transformed the lives of so many children in my village. The transparency and dedication of their team is truly inspiring. I am proud to support their mission.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Volunteer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      text: 'Volunteering with VAASUM has been one of the most fulfilling experiences of my life. The impact we create together is incredible and the entire team is fantastic to work with.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Anil Desai',
      role: 'Community Leader',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      text: 'VAASUM Foundation has brought real change to our community. From education programs to health camps, their work is making a tangible difference in everyone\'s lives.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Meera Patel',
      role: 'Beneficiary',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      text: 'Thanks to VAASUM Foundation, I got the opportunity to attend school. Their support gave me confidence and hope for a better future. I am forever grateful.',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            What People Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Hear from donors, volunteers, and community members whose lives have been touched
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative h-96 md:h-80 flex items-center justify-center"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, idx) =>
              idx === current ? (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-charity-orange/10 to-charity-blue/10 rounded-2xl p-8 md:p-12 max-w-2xl w-full dark:from-charity-orange/5 dark:to-charity-blue/5">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-charity-orange fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-charity-orange"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-charity-orange font-semibold">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 rounded-full bg-charity-orange text-white hover:shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 rounded-full bg-charity-orange text-white hover:shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setAutoplay(false);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === current
                  ? 'bg-charity-orange w-8'
                  : 'bg-gray-300 dark:bg-gray-600 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
