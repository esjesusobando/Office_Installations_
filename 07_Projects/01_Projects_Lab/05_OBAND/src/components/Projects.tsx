"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "PersonalOS v6.1",
    role: "Core Architecture",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    tags: ["Agentic AI", "Python", "TypeScript"]
  },
  {
    id: 2,
    title: "Neural Bridge",
    role: "Fullstack Platform",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Drizzle", "D3.js"]
  },
  {
    id: 3,
    title: "Aether AI",
    role: "LLM Orchestration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["LangChain", "OpenAI", "Vercel"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Recent Work</h2>
          <p className="text-neutral-500 text-lg leading-relaxed font-light">
            A curated selection of high-end digital solutions built with state-of-the-art engineering. 
            From AI orchestration to hyper-scalable platforms.
          </p>
        </div>
        <button className="text-sm font-bold uppercase tracking-widest border-b border-accent pb-1 text-accent transition-all hover:pr-4">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative flex flex-col gap-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-glass border border-glass-border">
              {/* Image Placeholder with Gradient - Real images would use next/image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent transition-opacity group-hover:opacity-0" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="absolute top-6 right-6 flex gap-2">
                <div className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <Github className="w-4 h-4 text-white" />
                </div>
                <div className="p-3 rounded-full bg-accent/80 backdrop-blur-md border border-white/10 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-glass border border-glass-border rounded-md text-neutral-400">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
              <p className="text-neutral-500 text-sm">{project.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
