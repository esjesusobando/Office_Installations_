"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white overflow-hidden pt-32">
      {/* Mesh Background Effect (Local for testing context or global via parent) */}
      <div className="mesh-bg" />

      {/* Hero Content */}
      <div className="z-10 max-w-5xl w-full flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-glass-border backdrop-blur-md mb-4"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Future Ready Platform
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-bold tracking-tighter"
        >
          OBAND <span className="text-accent underline decoration-accent/30 underline-offset-8">SOTA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl text-lg md:text-xl text-neutral-400 font-light leading-relaxed"
        >
          Crafting high-performance digital experiences with precision and state-of-the-art technology. 
          The evolution of your digital identity starts here.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button className="px-10 py-5 bg-white text-black font-extrabold rounded-2xl flex items-center gap-3 hover:bg-neutral-200 transition-all transform hover:scale-105">
            Explore Documentation <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="px-10 py-5 bg-glass border border-glass-border rounded-2xl font-bold backdrop-blur-md hover:bg-glass-border transition-all">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
