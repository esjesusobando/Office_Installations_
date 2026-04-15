"use client";

import { motion } from "framer-motion";

/**
 * ContactSection - zuzannarister style
 * Just email, minimal
 */
export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-premium">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
            Contacto
          </p>
          
          <a 
            href="mailto:hola@sofiamodel.com"
            className="text-2xl md:text-3xl text-black hover:text-gray-600 transition-colors"
          >
            hola@sofiamodel.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}