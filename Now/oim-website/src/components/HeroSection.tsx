'use client';

import { useRef, useEffect } from 'react';

/**
 * HeroSection — hydration-safe video hero
 *
 * Fix: NO state-driven className changes on <video>.
 * Opacity controlled exclusively via ref.style in useEffect (client-only).
 * suppressHydrationWarning on <video> covers the inline style diff.
 *
 * Performance: preload="metadata" loads only duration/dimensions first,
 * dramatically faster perceived load than preload="auto".
 */

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
      // Mutate DOM directly — no state, no className change, no hydration diff
      if (videoRef.current) {
        videoRef.current.style.opacity = '1';
      }
      try { await video.play(); } catch { /* autoplay blocked — silent fail */ }
    };

    if (video.readyState >= 2) {
      onReady();
    } else {
      video.addEventListener('canplaythrough', onReady, { once: true });
    }

    return () => video.removeEventListener('canplaythrough', onReady);
  }, [videoSrc]);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0d1b2a]">

      {/* Navy bg — visible while video loads, matches brand */}
      <div className="absolute inset-0 bg-[#0d1b2a]" />

      {/* Video — opacity:0 server+client, fades to 1 client-only via ref */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        playsInline
        muted
        loop
        autoPlay
        preload="metadata"
        aria-hidden="true"
        suppressHydrationWarning
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ opacity: 0, transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1)' }}
      />

      {/* Cinematic overlays — NO backdrop-blur (ruins video) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/44 to-black/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] items-end pb-16 md:items-center md:pb-0">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          {children}
        </div>
      </div>

      {/* Bottom fade into ScrollVideo */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '20vh',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(9,9,11,0.65) 55%, #09090b 100%)',
        }}
      />

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" aria-hidden="true">
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/35" />
        </div>
      </div>

    </section>
  );
}
