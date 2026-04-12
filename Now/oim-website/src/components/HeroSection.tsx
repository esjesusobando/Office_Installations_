'use client';

import { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  videoSrc: string;
  posterSrc?: string;
  children?: React.ReactNode;
}

/**
 * HeroSection — taste-skill compliant
 * DESIGN_VARIANCE: 8 — Asymmetric left-aligned, NOT centered
 * MOTION_INTENSITY: 6 — Fade-in video, staggered text entry
 * VISUAL_DENSITY: 4 — Spacious, cinematic
 *
 * Rules applied:
 * - min-h-[100dvh] (NEVER h-screen — iOS Safari bug)
 * - Gradient overlay: left heavy → right transparent (cinematic depth)
 * - NO backdrop-blur on hero (ruins video clarity)
 * - GPU: will-change-transform on video only
 * - Staggered animate-fade-up on content blocks
 */
export function HeroSection({ videoSrc, posterSrc, children }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const tryPlay = async () => {
      setVideoReady(true);
      try { await video.play(); } catch {}
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('canplaythrough', tryPlay, { once: true });
    }

    return () => video.removeEventListener('canplaythrough', tryPlay);
  }, [videoSrc]);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-zinc-950">

      {/* ── Video layer ── */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        playsInline
        muted
        loop
        autoPlay
        preload="auto"
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover will-change-transform transition-opacity duration-1000 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* ── Cinematic overlay: dark left, transparent right ── */}
      {/* taste-skill: NO backdrop-blur on hero — ruins video */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* ── Content — left-aligned, bottom-anchored on mobile, centered on desktop ── */}
      <div className="relative z-10 flex min-h-[100dvh] items-end pb-16 md:items-center md:pb-0">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {children}
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>

    </section>
  );
}
