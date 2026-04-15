"use client";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 flex items-center justify-between" style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
        © {new Date().getFullYear()} Sofía Mayen
      </p>
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.2)" }}>
        Atlanta, GA
      </p>
    </footer>
  );
}
