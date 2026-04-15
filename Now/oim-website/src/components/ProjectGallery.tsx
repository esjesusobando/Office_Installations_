'use client';

import { useEffect, useRef } from 'react';

interface ProjectGalleryProps {
  lang: 'en' | 'es';
}

const copy = {
  en: {
    label: 'Our Work',
    heading: 'Projects we\'re proud of',
    sub: 'From cubicle farms to executive suites — we\'ve done it all across Atlanta and Georgia.',
  },
  es: {
    label: 'Nuestro Trabajo',
    heading: 'Proyectos de los que estamos orgullosos',
    sub: 'Desde cubículos hasta suites ejecutivas — lo hemos hecho en todo Atlanta y Georgia.',
  },
};

const projects = [
  { id: 1, label: 'Corporate HQ', size: 'large' },
  { id: 2, label: 'Open Office', size: 'small' },
  { id: 3, label: 'Executive Suite', size: 'small' },
  { id: 4, label: 'Conference Room', size: 'medium' },
  { id: 5, label: 'Cubicle Farm', size: 'medium' },
];

const gradients = [
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 100%)',
  'linear-gradient(135deg, #0d1117 0%, #1c2128 100%)',
  'linear-gradient(135deg, #161b22 0%, #21262d 100%)',
  'linear-gradient(135deg, #0d1117 0%, #30363d 100%)',
];

export default function ProjectGallery({ lang }: ProjectGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const t = copy[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="bg-[#191c1d] px-6 md:px-12 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div
            data-animate
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F5E]">
              {t.label}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
              style={{ letterSpacing: '-0.03em' }}
            >
              {t.heading}
            </h2>
          </div>
          <p
            data-animate
            className="text-sm text-white/40 max-w-[40ch] md:text-right leading-relaxed"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
          >
            {t.sub}
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Large card — spans 2 cols on md */}
          <div
            data-animate
            className="col-span-2 md:col-span-2 relative overflow-hidden rounded-2xl"
            style={{
              height: '340px',
              background: gradients[0],
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <span className="text-xs text-white/40 uppercase tracking-widest">{projects[0].label}</span>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#FF5F5E]" />
                  <span className="text-xs text-white/25">Atlanta, GA</span>
                </div>
              </div>
            </div>
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Stack right column */}
          <div className="flex flex-col gap-3">
            {[1, 2].map((idx) => (
              <div
                key={idx}
                data-animate
                className="relative overflow-hidden rounded-2xl flex-1"
                style={{
                  minHeight: '160px',
                  background: gradients[idx],
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${0.2 + idx * 0.08}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${0.2 + idx * 0.08}s`,
                }}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-xs text-white/40 uppercase tracking-widest">{projects[idx].label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: 3 equal cards */}
          {[3, 4].map((idx) => (
            <div
              key={idx}
              data-animate
              className="relative overflow-hidden rounded-2xl"
              style={{
                height: '200px',
                background: gradients[idx],
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${0.3 + (idx - 3) * 0.08}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${0.3 + (idx - 3) * 0.08}s`,
              }}
            >
              <div className="absolute inset-0 flex items-end p-5">
                <span className="text-xs text-white/40 uppercase tracking-widest">{projects[idx].label}</span>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div
            data-animate
            className="relative overflow-hidden rounded-2xl flex items-center justify-center"
            style={{
              height: '200px',
              background: '#FF5F5E',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.46s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.46s',
            }}
          >
            <a
              href="#contact"
              className="text-center px-6"
            >
              <p className="text-white font-bold text-xl leading-tight" style={{ letterSpacing: '-0.03em' }}>
                {lang === 'en' ? 'Start your project' : 'Iniciá tu proyecto'}
              </p>
              <p className="text-white/70 text-xs mt-2 uppercase tracking-widest">
                {lang === 'en' ? 'Free quote →' : 'Cotización gratis →'}
              </p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
