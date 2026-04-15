'use client';

import { useState, useRef, useEffect } from 'react';

interface ContactFormProps {
  lang: 'en' | 'es';
}

const copy = {
  en: {
    label: 'Contact',
    heading: 'Let\'s build your workspace',
    sub: 'Tell us about your project. We respond within 24 hours.',
    fields: {
      name: 'Full name',
      company: 'Company (optional)',
      phone: 'Phone number',
      email: 'Email address',
      service: 'Service needed',
      message: 'Describe your project',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent! We\'ll be in touch soon.',
      error: 'Something went wrong. Please try again.',
    },
    services: [
      'Office Furniture Installation',
      'Office Setup & Reconfiguration',
      'Disassembly & Moving',
      'Commercial Project',
      'Other',
    ],
    info: {
      phone: '+1 (404) 837-2951',
      email: 'info@oimatlanta.com',
      area: 'Serving all of Atlanta & Georgia',
      hours: 'Mon–Fri, 7am–6pm',
    },
  },
  es: {
    label: 'Contacto',
    heading: 'Construyamos tu espacio de trabajo',
    sub: 'Contanos sobre tu proyecto. Respondemos en 24 horas.',
    fields: {
      name: 'Nombre completo',
      company: 'Empresa (opcional)',
      phone: 'Teléfono',
      email: 'Correo electrónico',
      service: 'Servicio requerido',
      message: 'Describí tu proyecto',
      submit: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Nos ponemos en contacto pronto.',
      error: 'Algo salió mal. Intentá de nuevo.',
    },
    services: [
      'Instalación de Muebles',
      'Configuración de Oficina',
      'Desmontaje y Traslado',
      'Proyecto Comercial',
      'Otro',
    ],
    info: {
      phone: '+1 (404) 837-2951',
      email: 'info@oimatlanta.com',
      area: 'Servicio en Atlanta y Georgia',
      hours: 'Lun–Vie, 7am–6pm',
    },
  },
};

export default function ContactForm({ lang }: ContactFormProps) {
  const t = copy[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  const inputBase = `w-full bg-white border border-[#e8e9ea] rounded-xl px-4 py-3 text-sm text-[#191c1d] placeholder:text-[#191c1d]/35 focus:outline-none focus:border-[#FF5F5E] focus:ring-1 focus:ring-[#FF5F5E] transition-colors`;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#f8f9fa] px-6 md:px-12 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <div
            data-animate
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F5E]">
              {t.label}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#191c1d] leading-[1.1] mb-6"
              style={{ letterSpacing: '-0.03em', textWrap: 'balance' } as React.CSSProperties}
            >
              {t.heading}
            </h2>
            <p className="text-base text-[#191c1d]/55 leading-relaxed mb-12">
              {t.sub}
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: '📞', value: t.info.phone, href: `tel:${t.info.phone.replace(/\D/g,'')}` },
                { icon: '✉️', value: t.info.email, href: `mailto:${t.info.email}` },
                { icon: '📍', value: t.info.area, href: undefined },
                { icon: '🕐', value: t.info.hours, href: undefined },
              ].map(({ icon, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#191c1d]/5 flex items-center justify-center text-base flex-shrink-0">
                      {icon}
                    </div>
                    <span className="text-sm font-medium text-[#191c1d]">{value}</span>
                  </div>
                );
                return href ? (
                  <a key={value} href={href} className="block hover:text-[#FF5F5E] transition-colors group">
                    {inner}
                  </a>
                ) : (
                  <div key={value}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <div
            data-animate
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#FF5F5E]/10 flex items-center justify-center text-3xl">✓</div>
                <p className="text-lg font-semibold text-[#191c1d]">{t.fields.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#191c1d]/60 mb-1.5">{t.fields.name}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#191c1d]/60 mb-1.5">{t.fields.company}</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#191c1d]/60 mb-1.5">{t.fields.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (404) 000-0000"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#191c1d]/60 mb-1.5">{t.fields.email}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#191c1d]/60 mb-1.5">{t.fields.service}</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">—</option>
                    {t.services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#191c1d]/60 mb-1.5">{t.fields.message}</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={lang === 'en' ? 'We have 20 workstations that need assembly...' : 'Tenemos 20 puestos de trabajo para armar...'}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-500">{t.fields.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-xl bg-[#191c1d] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF5F5E] active:scale-[0.98] disabled:opacity-50"
                >
                  {status === 'sending' ? t.fields.sending : t.fields.submit}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
