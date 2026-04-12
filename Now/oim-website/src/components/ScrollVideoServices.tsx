'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface Service {
  title: string;
  items: string[];
}

const servicesData: Service[] = [
  {
    title: "Office Furniture Installation",
    items: ["Desks & workstations", "Cubicles", "Conference tables", "Chairs & storage units"]
  },
  {
    title: "Office Setup & Reconfiguration",
    items: ["New office setups", "Workspace redesign", "Furniture rearrangement"]
  },
  {
    title: "Disassembly & Moving",
    items: ["Safe disassembly", "Relocation", "Reinstallation"]
  },
  {
    title: "Commercial Projects",
    items: ["Small & large offices", "Corporate environments", "Fast turnaround projects"]
  }
];

interface ScrollVideoServicesProps {
  videoSrc: string;
  scrollHeight?: number;
}

/**
 * ScrollVideoServices — taste-skill compliant
 * DESIGN_VARIANCE: 8 — Asymmetric: left panel + right content
 * MOTION_INTENSITY: 6 — Frame-by-frame via scroll, RAF throttled
 * VISUAL_DENSITY: 4 — Spacious glassmorphism panel
 *
 * Rules:
 * - Video is sticky, fills full viewport height
 * - Content panel is absolute, always ON TOP of video (z-10)
 * - Glassmorphism: bg + blur + inner border (taste-skill "Liquid Glass")
 * - NO centered layout — left-offset panel per DESIGN_VARIANCE: 8
 * - Scroll progress drives video.currentTime (NOT autoplay)
 */
export function ScrollVideoServices({ videoSrc, scrollHeight = 300 }: ScrollVideoServicesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const [duration, setDuration]   = useState(0);
  const [progress, setProgress]   = useState(0);
  const lastProgress = useRef(0);
  const rafId        = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onMeta = () => setDuration(video.duration);
    video.addEventListener('loadedmetadata', onMeta);
    return () => video.removeEventListener('loadedmetadata', onMeta);
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !videoRef.current || duration === 0) return;
    if (rafId.current) return;

    rafId.current = requestAnimationFrame(() => {
      const container = containerRef.current!;
      const video     = videoRef.current!;
      const rect      = container.getBoundingClientRect();
      const scrollable = container.offsetHeight - window.innerHeight;
      if (scrollable <= 0) { rafId.current = null; return; }

      const raw  = Math.max(0, Math.min(1, -rect.top / scrollable));
      if (Math.abs(raw - lastProgress.current) > 0.001) {
        video.currentTime  = raw * duration;
        lastProgress.current = raw;
        setProgress(raw);
      }
      rafId.current = null;
    });
  }, [duration]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([e]) => { if (!e.isIntersecting && rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = null; } },
      { threshold: 0 }
    );
    observer.observe(container);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  const activeIndex = Math.min(
    Math.floor(progress * servicesData.length),
    servicesData.length - 1
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${scrollHeight}vh` }}
    >
      {/* ── Video — sticky, fills viewport, frame driven by scroll ── */}
      <video
        ref={videoRef}
        src={videoSrc}
        playsInline
        muted
        preload="auto"
        aria-hidden="true"
        className="sticky top-0 w-full h-screen object-cover will-change-transform"
      />

      {/* ── Dark overlay over video ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)' }}
      />

      {/* ── Content panel — absolute, always on top of video (z-10) ── */}
      {/* taste-skill: left-offset, NOT centered */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="ml-6 md:ml-16 lg:ml-24 max-w-lg w-full">

          {/* Glassmorphism panel — taste-skill "Liquid Glass Refraction" */}
          <div
            className="px-8 py-10 md:px-10 md:py-12"
            style={{
              background: 'rgba(10,10,10,0.6)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 48px rgba(0,0,0,0.4)',
              borderRadius: '4px',
            }}
          >
            {/* Section label */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F5E]">
              Our Services
            </p>

            {/* Step counter */}
            <p className="mb-5 text-xs text-white/35 tabular-nums">
              {String(activeIndex + 1).padStart(2,'0')} / {String(servicesData.length).padStart(2,'0')}
            </p>

            {/* Active service — fade swap */}
            <div className="min-h-[160px]">
              {servicesData.map((service, i) => (
                <div
                  key={service.title}
                  className="transition-all duration-500"
                  style={{
                    opacity: i === activeIndex ? 1 : 0,
                    transform: i === activeIndex ? 'translateY(0)' : 'translateY(8px)',
                    position: i === activeIndex ? 'relative' : 'absolute',
                    pointerEvents: i === activeIndex ? 'auto' : 'none',
                  }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight"
                    style={{ letterSpacing: '-0.025em', textWrap: 'balance' } as React.CSSProperties}
                  >
                    {service.title}
                  </h2>
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F5E] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-px w-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[#FF5F5E] transition-all duration-100"
                style={{ width: `${progress * 100}%` }}
              />
            </div>

          </div>

          {/* Nav dots — outside panel */}
          <div className="flex gap-2 mt-4 ml-1">
            {servicesData.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-300"
                style={{
                  width: i === activeIndex ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  background: i === activeIndex ? '#FF5F5E' : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
