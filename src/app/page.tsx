"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#080807] relative overflow-hidden flex flex-col">
      {/* Header with logo */}
      <header className="relative z-20 w-full px-4 py-3">
        <div className="border border-[#3A3A3A] rounded-full px-6 py-2 flex justify-center bg-[#0A0A09]/80 shadow-[0_0_15px_rgba(80,80,80,0.3)]">
          <Image
            src="/images/logo.png"
            alt="SHUM"
            width={70}
            height={20}
            className="opacity-90"
            priority
          />
        </div>
      </header>

      {/* Scanlines background - below header */}
      <div className="absolute right-0 top-16 w-2/3 h-[calc(100%-4rem)] pointer-events-none z-0">
        <Image
          src="/images/scanlines.png"
          alt=""
          fill
          className="object-contain object-right opacity-90"
          priority
        />
      </div>

      {/* Main content - CENTERED */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-8">
        <div className="max-w-2xl w-full flex flex-col items-center text-center">
          {/* Title */}
          <div className="mb-4">
            <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-bold leading-[0.9]">
              SHUM OSINT
            </h1>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl tracking-tight text-[#5A5A5A] leading-[0.9]">
              DONATION HUB
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#6B6B6B] text-xs md:text-sm max-w-sm leading-relaxed mb-10 text-left">
            Шум — це розвідувальна спільнота, що
            <br />використовує аналітичні методи та
            <br />розвідку з
            <br />відкритих джерел для збору Інформації та
            <br />виявлення цілей для Сил оборони України.
          </p>

          {/* FPV Drone with hover glow effect */}
          <div className="relative">
            <a
              href="https://send.monobank.ua/jar/example"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Glow background on hover */}
              <Image
                src="/images/drone_blur.png"
                alt=""
                width={450}
                height={120}
                className={`absolute -inset-4 w-[calc(100%+32px)] h-auto transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ left: '-16px', top: '-16px' }}
              />
              
              {/* Main drone */}
              <Image
                src="/images/drone.png"
                alt="FPV Drone"
                width={400}
                height={100}
                className="relative z-10"
                priority
              />
              
              {/* CTA text */}
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[-20%] z-20 font-[family-name:var(--font-bebas)] text-lg md:text-2xl text-[#D4842A] tracking-wider whitespace-nowrap">
                ДОНАТЬ НА ФАШИЗМ
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
