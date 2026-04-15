"use client";

import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(245,243,239,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(12,12,12,0.06)" : "1px solid transparent",
      }}
    >
      <a
        href="#"
        className="text-xs font-medium uppercase tracking-[0.28em]"
        style={{ color: "var(--ink)" }}
      >
        SM
      </a>

      <div className="flex items-center gap-8">
        {[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-xs uppercase tracking-[0.2em] transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
