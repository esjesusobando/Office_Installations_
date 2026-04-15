"use client";

import { motion } from "framer-motion";
import { InstagramLogo } from "@phosphor-icons/react";

/**
 * Footer - zuzannarister style
 * Minimal - just copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container-premium">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {currentYear}
          </p>

          {/* Social - just Instagram */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/planointerior_sj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <InstagramLogo weight="bold" className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}