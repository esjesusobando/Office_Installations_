'use client';

import { useRef, useEffect } from 'react';

interface HeroSectionProps {
  videoSrc: string;
  posterSrc?: string;
  children?: React.ReactNode;
}

export function HeroSection({ videoSrc, posterSrc, children }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const onReady = async () => {
      if (videoRef.current) {
        videoRef.current.style.opacity = '1';
      }
      try { await video.play(); } catch { /* autoplay blocked — silent fail */ }
    };

    if (video.readyState >= 3) {
      onReady();
    } else {
      video.addEventListener('canplay', onReady, { once: true });
    }

    return () => video.removeEventListener('canplay', onReady);
  }, [videoSrc]);

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0d1b2a]">

      <div className="absolute inset-0 bg-[#0d1b2a]" />

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
        suppressHydrationWarning
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ opacity: 1 }}
      />

      {/* Premium layered gradients — stronger for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1b2a]/40" />

      {/* Subtle animated grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 flex min-h-[100dvh] items-end pb-16 md:items-center md:pb-0">
        {/* Dark backdrop behind text for extra contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          {children}
        </div>
      </div>

      {/* Bottom fade to white — premium yellow tint */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '22vh',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(245,197,24,0.12) 35%, rgba(255,255,255,0.8) 60%, #ffffff 100%)',
        }}
      />

    </section>
  );
}
