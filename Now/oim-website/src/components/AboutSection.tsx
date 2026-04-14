'use client';

import { useEffect, useRef } from 'react';

interface AboutSectionProps {
  lang: 'en' | 'es';
}

const copy = {
  en: {
    label: 'About Us',
    heading: 'Atlanta\'s trusted office furniture professionals',
    body: 'Since 2018, Office Installations Mayen has helped businesses across Georgia move, assemble, and reconfigure their workspaces with precision and care. We show up on time, work clean, and leave your office ready to go.',
    stats: [
      { value: '8+', label: 'Years in business' },
      { value: '500+', label: 'Projects completed' },
      { value: '2', label: 'Languages spoken' },
      { value: '100%', label: 'Licensed & insured' },
    ],
    cta: 'Get a Free Quote',
  },
  es: {
    label: 'Nosotros',
    heading: 'Los profesionales de muebles de oficina de confianza en Atlanta',
    body: 'Desde 2018, Office Installations Mayen ha ayudado a empresas en Georgia a mover, ensamblar y reconfigurar sus espacios de trabajo con precisión y cuidado. Llegamos puntual, trabajamos limpio y dejamos tu oficina lista.',
    stats: [
      { value: '8+', label: 'Años en el negocio' },
      { value: '500+', label: 'Proyectos completados' },
      { value: '2', label: 'Idiomas' },
      { value: '100%', label: 'Licenciados y asegurados' },
    ],
    cta: 'Cotización Gratis',
  },
};

export default function AboutSection({ lang }: AboutSectionProps) {
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
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#f8f9fa] px-6 md:px-12 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top: label + heading + body in 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">

          {/* Left */}
          <div
            data-animate
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F5E]">
              {t.label}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#191c1d] leading-[1.1]"
              style={{ letterSpacing: '-0.03em', textWrap: 'balance' } as React.CSSProperties}
            >
              {t.heading}
            </h2>
          </div>

          {/* Right */}
          <div
            data-animate
            className="flex flex-col justify-end"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
          >
            <p className="text-base md:text-lg text-[#191c1d]/60 leading-relaxed mb-8">
              {t.body}
            </p>
            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 text-sm font-semibold text-[#191c1d] border-b-2 border-[#FF5F5E] pb-0.5 hover:text-[#FF5F5E] transition-colors"
            >
              {t.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e8e9ea] border border-[#e8e9ea] overflow-hidden rounded-2xl">
          {t.stats.map((stat, i) => (
            <div
              key={stat.label}
              data-animate
              className="bg-[#f8f9fa] px-8 py-10 flex flex-col gap-1"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.08}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.08}s`,
              }}
            >
              <span className="text-4xl md:text-5xl font-bold text-[#191c1d]" style={{ letterSpacing: '-0.04em' }}>
                {stat.value}
              </span>
              <span className="text-xs text-[#191c1d]/50 font-medium uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
