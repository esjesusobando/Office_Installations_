"use client";

import { useEffect, useRef } from "react";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          ref.current?.querySelectorAll("[data-a]").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 120);
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
    <section id="contact" ref={ref} className="px-6 md:px-12 py-24 md:py-40" style={{ background: "var(--ink)" }}>
      <div className="mx-auto max-w-7xl">

        <p data-a className="text-xs uppercase tracking-[0.24em] mb-8" style={{ color: "rgba(255,255,255,0.35)", opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}>
          Let's work together
        </p>

        <a
          data-a
          href="mailto:hola@sofiamayen.com"
          className="serif block leading-none hover:opacity-70 transition-opacity duration-300"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
            letterSpacing: "-0.03em",
            color: "white",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          hola@sofiamayen.com
        </a>

        <div data-a className="mt-16 flex flex-col sm:flex-row gap-6" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.22s" }}>
          {[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Behance", href: "https://behance.net" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.22em] transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              {label} →
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
