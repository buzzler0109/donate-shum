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
      {/* Scanlines background */}
      <div className="absolute right-0 top-0 w-2/3 h-full pointer-events-none">
        <Image
          src="/images/scanlines.png"
          alt=""
          fill
          className="object-contain object-right opacity-90"
          priority
        />
      </div>

      {/* Header with logo */}
      <header className="relative z-10 w-full px-6 py-4 md:px-8 md:py-6">
        <div className="max-w-4xl mx-auto flex justify-center">
          <span className="font-[family-name:var(--font-bebas)] text-[#7A7A7A] text-2xl tracking-[0.3em]">
            SHUM
          </span>
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
              className="group relative hover:scale-105 transition-transform flex items-center"
            >
              <Image
                src="/images/drone.png"
                alt="FPV Drone"
                width={350}
                height={80}
                className="opacity-95"
                priority
              />
              <span className="absolute left-[55%] top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] text-base md:text-xl text-[#D4842A] tracking-wider whitespace-nowrap group-hover:text-[#E89A4A] transition-colors">
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
              <p className="text-[#D4842A] font-medium">✓ Дякуємо за підписку!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  required
                  className="flex-1 bg-[#141413] border border-[#2A2A29] px-5 py-3 text-[#CFCFCF] placeholder-[#4A4A4A] focus:outline-none focus:border-[#D4842A] transition-colors font-[family-name:var(--font-bebas)] text-lg tracking-wider"
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
