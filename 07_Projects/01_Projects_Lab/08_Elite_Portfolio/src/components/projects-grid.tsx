"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Campaña Internacional",
    category: "Moda & Estilo de Vida",
    description: "Editorial de alta costura para revista internacional de moda.",
    image: "https://picsum.photos/seed/proj1/800/1000",
  },
  {
    id: "2",
    title: "Brand Ambassador",
    category: "Moda & Belleza",
    description: "Campaña principal para marca de lujo europea.",
    image: "https://picsum.photos/seed/proj2/800/600",
  },
  {
    id: "3",
    title: "Runway Show",
    category: "Desfiles & Eventos",
    description: "Producción completa de fashion week.",
    image: "https://picsum.photos/seed/proj3/800/800",
  },
  {
    id: "4",
    title: "Editorial Vogue",
    category: "Moda & Estilo de Vida",
    description: "Cover story para edición especial de revista.",
    image: "https://picsum.photos/seed/proj4/800/1200",
  },
  {
    id: "5",
    title: "Campaña Primavera",
    category: "Moda & Belleza",
    description: "Colección completa para marca internacional.",
    image: "https://picsum.photos/seed/proj5/800/600",
  },
  {
    id: "6",
    title: "Contenido Digital",
    category: "Redes & Redes",
    description: "Producción de contenido para redes sociales y branding personal.",
    image: "https://picsum.photos/seed/proj6/800/800",
  },
  {
    id: "7",
    title: "Sesión Editorial",
    category: "Moda & Estilo de Vida",
    description: "Sesión de fotos para editorial de prestigio internacional.",
    image: "https://picsum.photos/seed/proj7/800/1000",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * ProjectsGrid - Asymmetric editorial grid
 * DESIGN_VARIANCE: 8 (Asymmetric)
 * VISUAL_DENSITY: 4 (Art Gallery/Airy)
 */
export function ProjectsGrid() {
  return (
    <section id="work" className="py-20 md:py-32 bg-zinc-100 dark:bg-zinc-900">
      <div className="container-premium">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-emerald-600 dark:text-emerald-400 mb-4">
            Portafolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Trabajos
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed">
            Una selección de proyectos que reflejan mi visión estética: elegancia atemporal y glamour sofisticado.
          </p>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Project 1 - Large hero (7 columns) */}
          <motion.div className="md:col-span-7" variants={itemVariants}>
            <ProjectCard project={projects[0]} size="large" />
          </motion.div>

          {/* Project 2 - Medium (5 columns) */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <ProjectCard project={projects[1]} size="medium" />
          </motion.div>

          {/* Project 3 - Medium (5 columns) */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <ProjectCard project={projects[2]} size="medium" />
          </motion.div>

          {/* Project 4 - Large (7 columns) */}
          <motion.div className="md:col-span-7" variants={itemVariants}>
            <ProjectCard project={projects[3]} size="large" />
          </motion.div>

          {/* Project 5 - Medium (5 columns) */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <ProjectCard project={projects[4]} size="medium" />
          </motion.div>

          {/* Project 6 - Medium (5 columns) */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <ProjectCard project={projects[5]} size="medium" />
          </motion.div>

          {/* Project 7 - Wide (full) */}
          <motion.div className="md:col-span-12" variants={itemVariants}>
            <ProjectCard project={projects[6]} size="wide" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * ProjectCard - Clean, minimal with glassmorphism
 */
function ProjectCard({ project, size }: { project: Project; size: "large" | "medium" | "wide" }) {
  const sizeClasses = {
    large: "aspect-[3/4]",
    medium: "aspect-[4/5]",
    wide: "aspect-[21/9]",
  };

  return (
    <motion.div
      className={`group relative ${sizeClasses[size]} overflow-hidden cursor-pointer rounded-[1.5rem]`}
      whileHover={{ scale: 0.99 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/20 to-transparent" />

      {/* Content - Bottom left */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        {/* Category */}
        <motion.p
          className="text-xs tracking-[0.25em] uppercase text-emerald-400 mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.category}
        </motion.p>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <motion.p
          className="text-sm text-white/70 max-w-md mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.description}
        </motion.p>

        {/* Arrow */}
        <motion.div
          className="inline-flex"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500">
            <ArrowUpRight weight="bold" className="w-5 h-5" />
          </span>
        </motion.div>
      </div>

      {/* Subtle border on hover */}
      <div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/30 transition-all duration-500 rounded-[1.5rem]" />
    </motion.div>
  );
}