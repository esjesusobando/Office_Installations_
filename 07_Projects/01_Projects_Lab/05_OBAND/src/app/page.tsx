"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Zap, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      {/* Navbar Global */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Feature Highlight (Inline for now) */}
      <section className="bg-glass/5 py-32 border-y border-glass-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { 
              icon: <Zap className="w-10 h-10 text-accent" />, 
              title: "Hyper Performance", 
              desc: "Optimized for speed with Next.js 16 and Turbopack. Every millisecond counts." 
            },
            { 
              icon: <Shield className="w-10 h-10 text-accent" />, 
              title: "Secure Architecture", 
              desc: "End-to-end security protocols following the PersonalOS v6.1 standards." 
            },
            { 
              icon: <Cpu className="w-10 h-10 text-accent" />, 
              title: "Agentic Engineering", 
              desc: "Deep integration with AI agents for automated workflows and smart features." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="p-4 bg-accent/10 rounded-2xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
              <p className="text-neutral-500 leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <Projects />

      {/* CTA Section */}
      <section className="py-40 px-8 relative overflow-hidden">
        <div className="mesh-bg opacity-30" />
        <div className="max-w-4xl mx-auto text-center space-y-12 z-10 relative">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            Ready to <span className="text-accent underline">Evolve</span>?
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Join the next generation of digital excellence. Let's build something that matters.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-12 py-6 bg-white text-black font-black rounded-3xl hover:scale-105 transition-all text-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer Global */}
      <Footer />
    </main>
  );
}
