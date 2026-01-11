"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#080807] relative overflow-hidden">
      {/* Decorative lines on the right */}
      <div className="absolute right-0 top-1/4 w-1/3 h-96 pointer-events-none opacity-30">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className="h-[2px] bg-[#C87C2D] mb-2"
            style={{ 
              width: `${Math.random() * 60 + 40}%`,
              marginLeft: 'auto',
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-6 py-6 md:px-12 md:py-8">
          <div className="max-w-7xl mx-auto">
            <span className="font-[family-name:var(--font-bebas)] text-[#CFCFCF] text-2xl tracking-[0.2em]">
              SHUM
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex items-center px-6 md:px-12 py-8">
          <div className="max-w-7xl mx-auto w-full">
            {/* Title */}
            <div className="mb-8">
              <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#CFCFCF]">
                SHUM OSINT
              </h1>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#6B6B6B]">
                DONATION HUB
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#6B6B6B] text-sm md:text-base max-w-md leading-relaxed mb-12">
              Шум — це розвідувальна спільнота, що використовує аналітичні методи та розвідку з відкритих джерел для збору Інформації та виявлення цілей для Сил оборони України.
            </p>

            {/* FPV Drone with CTA */}
            <div className="relative mb-16">
              <a
                href="https://send.monobank.ua/jar/example"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 hover:scale-105 transition-transform"
              >
                {/* Drone SVG */}
                <svg 
                  width="120" 
                  height="80" 
                  viewBox="0 0 120 80" 
                  className="text-[#C87C2D]"
                >
                  {/* Body */}
                  <polygon 
                    points="0,40 30,25 30,55" 
                    fill="currentColor"
                  />
                  <rect x="30" y="30" width="50" height="20" fill="currentColor" rx="2"/>
                  {/* Front */}
                  <polygon 
                    points="80,30 120,35 120,45 80,50" 
                    fill="currentColor"
                  />
                  {/* Wings */}
                  <rect x="40" y="10" width="30" height="8" fill="currentColor" rx="1"/>
                  <rect x="40" y="62" width="30" height="8" fill="currentColor" rx="1"/>
                </svg>

                {/* CTA Button */}
                <span className="font-[family-name:var(--font-bebas)] text-xl md:text-2xl text-[#C87C2D] tracking-wider group-hover:text-[#E89A4A] transition-colors">
                  ДОНАТЬ НА ФАШИЗМ
                </span>
              </a>
            </div>

            {/* Big Text */}
            <div className="mb-12">
              <p className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#4A4A4A]">
                ПРИЄДНУЙТЕСЬ ДО
              </p>
              <p className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#4A4A4A]">
                НАШОЇ КОМАНДИ
              </p>
            </div>

            {/* Email Form */}
            {submitted ? (
              <div className="max-w-md">
                <p className="text-[#C87C2D] font-medium">✓ Дякуємо за підписку!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-4 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  required
                  className="flex-1 bg-[#1A1A19] border border-[#2A2A29] px-6 py-4 text-[#CFCFCF] placeholder-[#4A4A4A] focus:outline-none focus:border-[#C87C2D] transition-colors font-[family-name:var(--font-bebas)] text-xl tracking-wider"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2A2A29] hover:bg-[#3A3A39] disabled:opacity-50 text-[#CFCFCF] px-8 py-4 font-[family-name:var(--font-bebas)] text-xl tracking-wider transition-all"
                >
                  {isSubmitting ? "..." : "reg."}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="text-[#4A4A4A] text-sm">
              © 2026 SHUM OSINT
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#4A4A4A] hover:text-[#C87C2D] transition-colors">
                <TelegramIcon />
              </a>
              <a href="#" className="text-[#4A4A4A] hover:text-[#C87C2D] transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}
