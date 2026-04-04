"use client";

import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/10 border-b border-glass-border">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors">
          OBAND<span className="text-neutral-500">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-tight text-neutral-400">
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link 
          href="/contact" 
          className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold flex items-center gap-2 hover:bg-neutral-200 transition-all hover:scale-105"
        >
          Start a Project <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black border-b border-glass-border p-8 flex flex-col gap-6 md:hidden z-40"
        >
          <Link href="#projects" className="text-xl font-bold">Projects</Link>
          <Link href="#services" className="text-xl font-bold">Services</Link>
          <Link href="#about" className="text-xl font-bold">About</Link>
          <Link href="/contact" className="text-xl font-bold text-accent">Contact Us</Link>
        </motion.div>
      )}
    </nav>
  );
}
