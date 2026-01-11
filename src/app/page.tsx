"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#080807] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C87C2D]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C87C2D]/3 rounded-full blur-[120px]" />
      </div>

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-6 py-6 md:px-12 md:py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C87C2D] rounded-sm flex items-center justify-center">
                <span className="font-[family-name:var(--font-bebas)] text-[#080807] text-xl font-bold">S</span>
              </div>
              <span className="font-[family-name:var(--font-bebas)] text-[#CFCFCF] text-xl tracking-wider">
                SHUM<span className="text-[#C87C2D]">.</span>OSINT
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#6B6B6B] hover:text-[#CFCFCF] transition-colors text-sm tracking-wide">
                ПРО НАС
              </a>
              <a href="#donate" className="text-[#6B6B6B] hover:text-[#CFCFCF] transition-colors text-sm tracking-wide">
                ПІДТРИМАТИ
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex items-center px-6 md:px-12 py-12">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[#C87C2D] text-sm tracking-[0.3em] uppercase">
                  DONATION HUB
                </p>
                <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                  <span className="text-[#CFCFCF]">SHUM OSINT</span>
                  <br />
                  <span className="text-[#C87C2D]">COMMUNITY</span>
                </h1>
              </div>

              <p className="text-[#6B6B6B] text-lg max-w-md leading-relaxed">
                Зроби свій внесок у перемогу — підтримай армію зараз. Кожна гривня наближає нас до мети.
              </p>

              {/* Donation buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://send.monobank.ua/jar/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C87C2D] hover:bg-[#E89A4A] text-[#080807] px-8 py-4 font-semibold tracking-wide transition-all hover:scale-105 animate-pulse-glow"
                >
                  <MonoIcon />
                  MONOBANK
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-[#2A2A29] hover:border-[#C87C2D] text-[#CFCFCF] px-8 py-4 font-semibold tracking-wide transition-all hover:bg-[#C87C2D]/10"
                >
                  <CryptoIcon />
                  CRYPTO
                </a>
              </div>
            </div>

            {/* Right content - Big text */}
            <div className="relative">
              <div className="font-[family-name:var(--font-bebas)] text-[80px] md:text-[120px] lg:text-[160px] leading-[0.85] tracking-tight text-outline select-none">
                ПРИЄД
                <br />
                НУЙТЕСЬ
                <br />
                <span className="text-outline-accent">
                  ДО НАШОЇ
                </span>
                <br />
                КОМАНДИ
              </div>
            </div>
          </div>
        </section>

        {/* Email subscription */}
        <section id="subscribe" className="px-6 md:px-12 py-16 border-t border-[#1A1A19]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl">
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl text-[#CFCFCF] mb-4">
                ЗАЛИШАЙСЯ НА ЗВ&apos;ЯЗКУ
              </h2>
              <p className="text-[#6B6B6B] mb-8">
                Підпишись на оновлення та дізнавайся першим про наші збори та досягнення.
              </p>

              {submitted ? (
                <div className="bg-[#C87C2D]/10 border border-[#C87C2D]/30 p-6 rounded">
                  <p className="text-[#C87C2D] font-medium">✓ Дякуємо за підписку!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    required
                    className="flex-1 bg-[#1A1A19] border border-[#2A2A29] px-6 py-4 text-[#CFCFCF] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C87C2D] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#C87C2D] hover:bg-[#E89A4A] disabled:opacity-50 text-[#080807] px-8 py-4 font-semibold tracking-wide transition-all"
                  >
                    {isSubmitting ? "..." : "REG"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 py-8 border-t border-[#1A1A19]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6B6B] text-sm">
              © 2026 SHUM OSINT Community. Слава Україні!
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#6B6B6B] hover:text-[#C87C2D] transition-colors">
                <TelegramIcon />
              </a>
              <a href="#" className="text-[#6B6B6B] hover:text-[#C87C2D] transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="text-[#6B6B6B] hover:text-[#C87C2D] transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Icons
function MonoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );
}

function CryptoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.5 9.5c0-1.5 1.5-2.5 3-2.5s2.5 1 2.5 2.5-1.5 2-3 2.5v2"/>
      <circle cx="12" cy="17" r="0.5" fill="currentColor"/>
    </svg>
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

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
