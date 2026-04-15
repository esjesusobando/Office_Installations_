"use client";

import { useEffect, useRef } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  // Replace src with real images when available
  bg: string;
  tall?: boolean;
}

const projects: Project[] = [
  { id: "1", title: "Estudio Jurídico Ríos", category: "Office Installation", year: "2024", bg: "#2a2018", tall: true },
  { id: "2", title: "Corporativo Brickell", category: "Full Setup", year: "2024", bg: "#1a1f2e" },
  { id: "3", title: "Tech Hub Midtown", category: "Reconfiguration", year: "2023", bg: "#1e1e1e" },
  { id: "4", title: "WeWork Buckhead", category: "Commercial", year: "2023", bg: "#251a10", tall: true },
  { id: "5", title: "Northside Medical", category: "Office Setup", year: "2023", bg: "#0f1a1a" },
  { id: "6", title: "Creative Agency NW", category: "Installation", year: "2022", bg: "#1a1015" },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden cursor-pointer"
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        background: project.bg,
        aspectRatio: project.tall ? "3/4" : "4/3",
        borderRadius: "4px",
      }}
    >
      {/* Subtle inner light — editorial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 55%)",
          opacity: 0,
        }}
        ref={el => {
          if (!el) return;
          const parent = el.parentElement;
          if (!parent) return;
          parent.addEventListener("mouseenter", () => (el.style.opacity = "1"));
          parent.addEventListener("mouseleave", () => (el.style.opacity = "0"));
        }}
      />

      {/* Meta — reveals on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 transition-transform duration-400"
        style={{ opacity: 0 }}
        ref={el => {
          if (!el) return;
          const parent = el.parentElement;
          if (!parent) return;
          parent.addEventListener("mouseenter", () => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
          parent.addEventListener("mouseleave", () => {
            el.style.opacity = "0";
            el.style.transform = "translateY(8px)";
          });
        }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">{project.category} · {project.year}</p>
        <p className="text-sm font-medium text-white" style={{ letterSpacing: "-0.01em" }}>{project.title}</p>
      </div>

      {/* Grid lines detail */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

export function ProjectsGrid() {
  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32" style={{ background: "var(--paper)" }}>
      <div className="mx-auto max-w-7xl">

        {/* Section header — editorial style */}
        <div className="flex items-baseline justify-between mb-12 pb-5" style={{ borderBottom: "1px solid var(--line)" }}>
          <p className="text-xs uppercase tracking-[0.24em]" style={{ color: "var(--muted)" }}>Selected Work</p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>{projects.length} projects</p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>

      </div>
    </section>
  );
}
