"use client";

import { useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-[#080807] relative overflow-hidden flex flex-col">
      {/* Scanlines background - use image if available, fallback to CSS */}
      <div className="absolute right-0 top-0 w-2/3 h-full pointer-events-none">
        {/* Try to use uploaded image, fallback to CSS effect */}
        <div className="relative w-full h-full">
          <Image
            src="/images/scanlines.png"
            alt=""
            fill
            className="object-contain object-right opacity-80"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* CSS Fallback - scanlines effect */}
          <div className="absolute inset-0 opacity-50">
            {[...Array(100)].map((_, i) => {
              const yPos = i * 1;
              const centerY = 45;
              const distFromCenter = Math.abs(yPos - centerY);
              const intensity = Math.max(0, 1 - distFromCenter / 40);
              const width = 30 + intensity * 50;
              
              return (
                <div
                  key={i}
                  className="absolute h-[2px]"
                  style={{
                    top: `${yPos}%`,
                    right: 0,
                    width: `${width}%`,
                    background: `linear-gradient(to left, transparent 0%, #C87C2D ${20 + intensity * 30}%, transparent 100%)`,
                    opacity: intensity * 0.8,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Header with pixel logo */}
      <header className="relative z-10 w-full px-6 py-4 md:px-8 md:py-6">
        <div className="max-w-4xl mx-auto flex justify-center">
          {/* Try image logo first */}
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="SHUM"
              width={120}
              height={32}
              className="opacity-70"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* SVG Fallback */}
            <ShumLogo />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-8 py-8">
        <div className="max-w-4xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl tracking-tight">
              <span className="text-[#CFCFCF]">SHUM OSINT</span>
            </h1>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#5A5A5A]">
              DONATION HUB
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#6B6B6B] text-xs md:text-sm max-w-md mx-auto text-center leading-relaxed mb-10">
            Шум — це розвідувальна спільнота, що використовує аналітичні методи та розвідку з відкритих джерел для збору Інформації та виявлення цілей для Сил оборони України.
          </p>

          {/* FPV Drone with CTA */}
          <div className="flex justify-center mb-8">
            <a
              href="https://send.monobank.ua/jar/example"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:scale-105 transition-transform"
            >
              {/* Try image drone first */}
              <Image
                src="/images/drone.png"
                alt="FPV Drone"
                width={400}
                height={120}
                className="opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* SVG Fallback */}
              <FPVDrone />
              
              {/* CTA text overlay */}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 font-[family-name:var(--font-bebas)] text-base md:text-xl text-[#C87C2D] tracking-wider whitespace-nowrap group-hover:text-[#E89A4A] transition-colors drop-shadow-lg">
                ДОНАТЬ НА ФАШИЗМ
              </span>
            </a>
          </div>

          {/* Big Text */}
          <div className="text-center mb-10">
            <p className="font-[family-name:var(--font-bebas)] text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-[#CFCFCF] italic">
              ПРИЄДНУЙТЕСЬ ДО
            </p>
            <p className="font-[family-name:var(--font-bebas)] text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-[#CFCFCF] italic">
              НАШОЇ КОМАНДИ
            </p>
          </div>

          {/* Email Form */}
          <div className="flex justify-center">
            {submitted ? (
              <p className="text-[#C87C2D] font-medium">✓ Дякуємо за підписку!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  required
                  className="flex-1 bg-[#141413] border border-[#2A2A29] px-5 py-3 text-[#CFCFCF] placeholder-[#4A4A4A] focus:outline-none focus:border-[#C87C2D] transition-colors font-[family-name:var(--font-bebas)] text-lg tracking-wider"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#3A3A39] hover:bg-[#4A4A49] disabled:opacity-50 text-[#CFCFCF] px-6 py-3 font-[family-name:var(--font-bebas)] text-lg tracking-wider transition-all"
                >
                  {isSubmitting ? "..." : "reg."}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// Pixel-style SHUM logo (fallback)
function ShumLogo() {
  return (
    <svg width="100" height="24" viewBox="0 0 100 24" className="text-[#7A7A7A]">
      {/* S */}
      <rect x="0" y="0" width="3" height="3" fill="currentColor"/>
      <rect x="3" y="0" width="3" height="3" fill="currentColor"/>
      <rect x="6" y="0" width="3" height="3" fill="currentColor"/>
      <rect x="0" y="3" width="3" height="3" fill="currentColor"/>
      <rect x="0" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="3" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="6" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="6" y="9" width="3" height="3" fill="currentColor"/>
      <rect x="0" y="12" width="3" height="3" fill="currentColor"/>
      <rect x="3" y="12" width="3" height="3" fill="currentColor"/>
      <rect x="6" y="12" width="3" height="3" fill="currentColor"/>
      
      {/* H */}
      <rect x="16" y="0" width="3" height="15" fill="currentColor"/>
      <rect x="22" y="0" width="3" height="15" fill="currentColor"/>
      <rect x="19" y="6" width="3" height="3" fill="currentColor"/>
      
      {/* U */}
      <rect x="32" y="0" width="3" height="15" fill="currentColor"/>
      <rect x="38" y="0" width="3" height="15" fill="currentColor"/>
      <rect x="35" y="12" width="3" height="3" fill="currentColor"/>
      
      {/* M */}
      <rect x="48" y="0" width="3" height="15" fill="currentColor"/>
      <rect x="60" y="0" width="3" height="15" fill="currentColor"/>
      <rect x="51" y="3" width="3" height="3" fill="currentColor"/>
      <rect x="54" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="57" y="3" width="3" height="3" fill="currentColor"/>
    </svg>
  );
}

// FPV Drone SVG (fallback)
function FPVDrone() {
  return (
    <svg width="320" height="90" viewBox="0 0 320 90" className="text-[#C87C2D]">
      {/* Tail fin */}
      <polygon points="0,45 45,20 45,70" fill="currentColor"/>
      
      {/* Body rear connector */}
      <rect x="45" y="38" width="50" height="14" fill="currentColor"/>
      
      {/* Center body/motor housing */}
      <ellipse cx="120" cy="45" rx="30" ry="22" fill="currentColor"/>
      
      {/* Top wing */}
      <rect x="100" y="8" width="40" height="10" fill="currentColor" rx="2"/>
      
      {/* Bottom wing */}
      <rect x="100" y="72" width="40" height="10" fill="currentColor" rx="2"/>
      
      {/* Front arm */}
      <rect x="145" y="41" width="120" height="8" fill="currentColor"/>
      
      {/* Nose/tip */}
      <polygon points="265,45 320,42 320,48" fill="currentColor"/>
    </svg>
  );
}
