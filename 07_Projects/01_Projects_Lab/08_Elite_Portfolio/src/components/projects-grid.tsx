"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  image: string;
  title?: string;
}

const projects: Project[] = [
  { id: "1", image: "https://picsum.photos/seed/proj1/800/1200" },
  { id: "2", image: "https://picsum.photos/seed/proj2/800/1200" },
  { id: "3", image: "https://picsum.photos/seed/proj3/800/1200" },
  { id: "4", image: "https://picsum.photos/seed/proj4/800/1200" },
  { id: "5", image: "https://picsum.photos/seed/proj5/800/1200" },
  { id: "6", image: "https://picsum.photos/seed/proj6/800/1200" },
  { id: "7", image: "https://picsum.photos/seed/proj7/800/1200" },
  { id: "8", image: "https://picsum.photos/seed/proj8/800/1200" },
  { id: "9", image: "https://picsum.photos/seed/proj9/800/1200" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * ProjectsGrid - zuzannarister style
 * Just images, no text, clean grid
 */
export function ProjectsGrid() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container-premium">
        {/* Clean grid - just images */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="aspect-[3/4] overflow-hidden bg-gray-100"
            >
              <img
                src={project.image}
                alt={project.title || `Project ${project.id}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}