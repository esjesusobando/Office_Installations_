"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { List, X, InstagramLogo, ArrowRight } from "@phosphor-icons/react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Portafolio", href: "#work" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

/**
 * Navigation - Glassmorphism, clean, minimal
 * DESIGN_VARIANCE: 8
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Subtle background on scroll
  const navBgOpacity = useTransform(scrollY, [0, 80], [0, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Fixed navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glass background */}
        <motion.div
          className="absolute inset-0 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-xl"
          style={{ opacity: navBgOpacity }}
        />

        <div className="container-premium relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sofía
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[1px] bg-emerald-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* CTA */}
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-full transition-all duration-300 hover:bg-emerald-600 hover:text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contáctame</span>
                <ArrowRight weight="bold" className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 text-zinc-900 dark:text-zinc-100"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X weight="bold" className="w-6 h-6" />
              ) : (
                <List weight="bold" className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        pointerEvents={isOpen ? "auto" : "none"}
      >
        <div
          className="absolute inset-0 bg-zinc-950/50 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />

        <motion.div
          className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-zinc-50 dark:bg-zinc-950 pt-28 px-10"
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="flex flex-col gap-10">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 30 }}
                transition={{ delay: i * 0.1 + 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}

            {/* Social links mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 30 }}
              transition={{ delay: 0.4 }}
              className="pt-6 flex gap-4"
            >
              <a
                href="https://instagram.com/planointerior_sj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <InstagramLogo weight="bold" className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}