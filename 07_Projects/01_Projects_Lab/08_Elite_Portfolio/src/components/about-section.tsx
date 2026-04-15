"use client";

import { motion } from "framer-motion";

/**
 * AboutSection - zuzannarister style
 * Just images, minimal text
 */
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-premium">
        {/* Minimal - just images */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="aspect-[3/4] overflow-hidden bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="https://picsum.photos/seed/about1/600/800"
              alt="About 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div 
            className="aspect-[3/4] overflow-hidden bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://picsum.photos/seed/about2/600/800"
              alt="About 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div 
            className="aspect-[3/4] overflow-hidden bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="https://picsum.photos/seed/about3/600/800"
              alt="About 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div 
            className="aspect-[3/4] overflow-hidden bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="https://picsum.photos/seed/about4/600/800"
              alt="About 4"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}