"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface NavigationProps {
  name: string;
}

/**
 * Navigation - zuzannarister style
 * Minimal: name on left, Work on right
 */
export function Navigation({ name }: NavigationProps) {
  const { scrollY } = useScroll();
  
  // Only show on scroll
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-white/0"
      style={{ opacity }}
    >
      {/* Name - Left */}
      <span className="text-sm tracking-widest uppercase text-black">
        {name}
      </span>

      {/* Work button - Right */}
      <button 
        onClick={scrollToWork}
        className="text-sm tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
      >
        Work
      </button>
    </motion.nav>
  );
}