"use client";

import { useEffect, useRef } from "react";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          ref.current?.querySelectorAll("[data-a]").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 py-24 md:py-32" style={{ background: "var(--paper)" }}>
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        <div>
          <p data-a className="text-xs uppercase tracking-[0.24em] mb-6" style={{ color: "var(--muted)", opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}>
            About
          </p>
          <h2 data-a className="serif text-4xl md:text-5xl leading-[1.1] mb-8" style={{ letterSpacing: "-0.02em", opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s" }}>
            Design that <em>lives</em> in the real world.
          </h2>
          <p data-a className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)", opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
            I'm a product designer with 6+ years building interfaces that balance clarity, emotion, and function. I work across brand identity, digital product, and creative direction.
          </p>
          <p data-a className="text-base leading-relaxed" style={{ color: "var(--muted)", opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s" }}>
            Based in Atlanta. Open to remote collaborations worldwide.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-12">
          {[
            { label: "Expertise", items: ["Product Design", "Brand Identity", "UI/UX Systems", "Creative Direction"] },
            { label: "Clients", items: ["Tech startups", "Creative agencies", "Local businesses", "Corporate environments"] },
          ].map(({ label, items }) => (
            <div key={label} data-a style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s" }}>
              <p className="text-xs uppercase tracking-[0.22em] mb-4" style={{ color: "var(--muted)" }}>{label}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="text-xs px-3 py-1.5 rounded-full" style={{ border: "1px solid var(--line)", color: "var(--ink)" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
