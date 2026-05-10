'use client';

import { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  videoSrc: string;
  posterSrc?: string;
  children?: React.ReactNode;
}

export function HeroSection({ videoSrc, posterSrc, children }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Intersection Observer: only load video when hero is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  // Play video once loaded and visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = 'auto';

    const onCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {/* autoplay blocked - silent fail */});
    };

    if (video.readyState >= 3) {
      onCanPlay();
    } else {
      video.addEventListener('canplay', onCanPlay, { once: true });
    }

    return () => video.removeEventListener('canplay', onCanPlay);
  }, [shouldLoadVideo, videoSrc]);

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0d1b2a]">

      {/* Background with poster - shows immediately */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: posterSrc ? `url(${posterSrc})` : undefined,
          opacity: isLoaded ? 0 : 1,
        }}
      />
      <div className="absolute inset-0 bg-[#0d1b2a]" />

      {/* Video - only loads when in view */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: isLoaded ? 1 : 0 }}
          playsInline
          muted
          loop
          autoPlay
          preload="auto"
          aria-hidden="true"
          suppressHydrationWarning
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

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

      {/* Bottom fade to hero bg — seamless blend */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '22vh',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(13,27,42,0.5) 50%, #0d1b2a 100%)',
        }}
      />

    </section>
  );
}
