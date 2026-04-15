'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ScrollVideoServices } from '@/components/ScrollVideoServices';
import AboutSection from '@/components/AboutSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const stored = sessionStorage.getItem('oim-lang') as 'en' | 'es';
    if (stored === 'en' || stored === 'es') setLang(stored);

    const handleLangChange = (e: CustomEvent) => setLang(e.detail);
    window.addEventListener('language-change', handleLangChange as EventListener);
    return () => window.removeEventListener('language-change', handleLangChange as EventListener);
  }, []);

  return (
    <main className="flex flex-col">

      {/* NAV — fixed, glass */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: 'rgba(10,10,10,0.45)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span className="text-white font-semibold tracking-tight text-lg">OIM</span>
        <button
          onClick={() => {
            const next = lang === 'en' ? 'es' : 'en';
            setLang(next);
            sessionStorage.setItem('oim-lang', next);
            window.dispatchEvent(new CustomEvent('language-change', { detail: next }));
          }}
          className="text-xs font-medium text-white/60 hover:text-white transition-colors tracking-widest uppercase"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </header>

      {/* HERO — Interior_Design.mp4, textos encima del video */}
      <HeroSection videoSrc="/videos/Interior_Design.mp4">
        <div className="max-w-2xl">
          <p className="animate-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F5E]">
            Office Installations Mayen — Atlanta, GA
          </p>
          <h1
            className="animate-fade-up-1 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-white mb-6"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {lang === 'en'
              ? 'Professional Office Furniture Installation in Atlanta'
              : 'Instalación Profesional de Muebles de Oficina en Atlanta'}
          </h1>
          <p className="animate-fade-up-2 text-base md:text-lg text-white/70 mb-10 max-w-[55ch] leading-relaxed">
            {lang === 'en'
              ? 'Since 2018, reliable furniture assembly and relocation for businesses across Georgia.'
              : 'Desde 2018, ensamblaje y reubicación de muebles para empresas en Georgia.'}
          </p>
          <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#FF5F5E] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF5F5E]/90 active:scale-[0.97]"
            >
              {lang === 'en' ? 'Get a Free Quote' : 'Cotización Gratis'}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {(lang === 'en'
                ? ['8+ Years', 'Licensed & Insured', 'Bilingual']
                : ['8+ Años', 'Licenciados', 'Bilingüe']
              ).map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                  <span className="h-1 w-1 rounded-full bg-[#FF5F5E]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </HeroSection>

      {/* SCROLL VIDEO — Home_exploding_view.mp4, frame-by-frame */}
      <ScrollVideoServices
        videoSrc="/videos/Home_exploding_view.mp4"
        scrollHeight={400}
        lang={lang}
      />

      {/* ABOUT */}
      <AboutSection lang={lang} />

      {/* GALLERY */}
      <ProjectGallery lang={lang} />

      {/* CONTACT */}
      <ContactForm lang={lang} />

      {/* FOOTER */}
      <footer className="bg-[#191c1d] px-6 md:px-12 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-white/10">
            <div>
              <p className="text-white font-bold text-xl mb-1" style={{ letterSpacing: '-0.03em' }}>OIM</p>
              <p className="text-xs text-white/35">Office Installations Mayen</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+14048372951"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <span className="text-[#FF5F5E]">→</span>
                +1 (404) 837-2951
              </a>
              <a
                href="mailto:info@oimatlanta.com"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <span className="text-[#FF5F5E]">→</span>
                info@oimatlanta.com
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#FF5F5E] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#FF5F5E]/90 transition-colors"
              >
                {lang === 'en' ? 'Free Quote' : 'Cotización Gratis'}
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} Office Installations Mayen — Atlanta, GA. Licensed & Insured.
            </p>
            <div className="flex gap-5">
              <a href="#contact" className="text-xs text-white/25 hover:text-white/60 transition-colors">
                {lang === 'en' ? 'Privacy' : 'Privacidad'}
              </a>
              <a href="#contact" className="text-xs text-white/25 hover:text-white/60 transition-colors">
                {lang === 'en' ? 'Terms' : 'Términos'}
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
