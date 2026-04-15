"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  name: string;
  role?: string;
  tagline?: string;
  onScrollToWork?: () => void;
}

/**
 * Hero - zuzannarister style
 * White background, huge central image, minimal text (just name)
 */
export function Hero({ name, role, tagline, onScrollToWork }: HeroProps) {
  const { scrollY } = useScroll();

  // Subtle parallax
  const y = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Huge central image - like zuzannarister */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Hero image - full bleed, huge */}
        <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200">
          {/* Placeholder - in real app this would be a real photo */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gray-200 mx-auto mb-8" />
              <p className="text-gray-400 text-sm">Tu foto aquí</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Minimal text overlay - name only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-normal text-black tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {name}
        </motion.h1>

        {role && (
          <motion.p 
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {role}
          </motion.p>
        )}
      </div>

      {/* Minimal nav at top - only essential */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6"
        style={{ opacity }}
      >
        <span className="text-sm tracking-widest uppercase text-black">
          {name}
        </span>
        <button 
          onClick={onScrollToWork}
          className="text-sm tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
        >
          Work
        </button>
      </motion.nav>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: useTransform(scrollY, [0, 100], [0.3, 0]) }}
      >
        <div className="w-px h-12 bg-gray-300" />
      </motion.div>
    </section>
  );
}