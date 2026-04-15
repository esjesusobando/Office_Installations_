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
        scrollHeight={300}
      />

      {/* ABOUT */}
      <AboutSection lang={lang} />

      {/* GALLERY */}
      <ProjectGallery lang={lang} />

      {/* CONTACT */}
      <ContactForm lang={lang} />

      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-white px-6 md:px-12 py-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[#191c1d]">OIM</p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Office Installations Mayen — Atlanta, GA
          </p>
          <div className="flex gap-6">
            <a href="#contact" className="text-xs text-gray-400 hover:text-[#191c1d] transition-colors">
              {lang === 'en' ? 'Privacy' : 'Privacidad'}
            </a>
            <a href="#contact" className="text-xs text-gray-400 hover:text-[#191c1d] transition-colors">
              {lang === 'en' ? 'Terms' : 'Términos'}
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
