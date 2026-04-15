"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  name: string;
  role?: string;
  tagline?: string;
}

export function Hero({
  name = "Sofía Mayen",
  role = "Product Designer & Creative Director",
  tagline = "Crafting experiences that feel inevitable.",
}: HeroProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const onScroll = () => {
      const p = Math.min(window.scrollY / (window.innerHeight * 0.6), 1);
      el.style.opacity = String(1 - p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 overflow-hidden">

      {/* Warm paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,184,154,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Top: name large — editorial */}
      <div className="relative z-10">
        <h1
          className="serif anim-0"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}
        >
          {name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "italic" : ""}>
              {word}{i < name.split(" ").length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom row: role + tagline + scroll cue */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="anim-1">
          <p
            className="text-xs uppercase tracking-[0.22em] mb-2"
            style={{ color: "var(--muted)" }}
          >
            {role}
          </p>
          <p
            className="serif italic text-xl md:text-2xl"
            style={{ color: "var(--ink)", maxWidth: "36ch" }}
          >
            {tagline}
          </p>
        </div>

        <div
          ref={lineRef}
          className="anim-2 flex flex-col items-center gap-2 self-end md:self-auto"
        >
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
            Scroll
          </span>
          <div
            className="w-px"
            style={{ height: "60px", background: "var(--accent)" }}
          />
        </div>
      </div>

      {/* Floating year tag — editorial detail */}
      <div
        className="anim-3 absolute top-40 right-6 md:right-12 text-xs tracking-widest uppercase"
        style={{ color: "var(--muted)", writingMode: "vertical-lr", letterSpacing: "0.22em" }}
      >
        ©&nbsp;{new Date().getFullYear()}
      </div>

    </section>
  );
}
