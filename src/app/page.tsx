"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#080807] relative overflow-hidden flex flex-col">
      {/* Header with logo */}
      <header className="relative z-20 w-full py-4 flex justify-center border-b border-[#3A3A3A]/60 rounded-b-[20px]">
        <a
          href="https://shum-ng.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 flex justify-center items-center"
        >
          <Image
            src="/images/logo.png"
            alt="SHUM"
            width={70}
            height={20}
            className="opacity-95 transition-opacity duration-300 hover:opacity-100"
            priority
          />
        </a>
      </header>

      {/* Scanlines background - below header */}
      <div className="absolute top-16 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-[200px] w-2/3 xl:w-[calc(66.666vw-200px)] h-[calc(100%-4rem)] pointer-events-none z-0">
        <Image
          src="/images/scanlines.png"
          alt=""
          fill
          className="object-contain object-right opacity-90 "
          priority
        />
      </div>

      <div className="flex-1 flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[200px]">
      {/* Main content - LEFT ALIGNED */}
      <main className="relative z-10 flex-1 flex flex-col justify-center py-8">
        <div className="max-w-3xl w-full flex flex-col items-start">
          {/* Title */}
          <div className="mb-2">
            <h1 className="font-[family-name:var(--font-bebas)] text-[80px] md:text-[100px] lg:text-[120px] tracking-tight text-white font-bold leading-[0.85]">
              SHUM OSINT
            </h1>
            <h2 className="font-[family-name:var(--font-bebas)] text-[60px] md:text-[80px] lg:text-[100px] tracking-tight text-[#5A5A5A] leading-[0.85]">
              DONATION HUB
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#6B6B6B] text-[13px] md:text-[14px] max-w-[340px] leading-[1.5] mb-6 text-left">
            Шум — це розвідувальна спільнота, що
            <br />використовує аналітичні методи та
            <br />розвідку з
            <br />відкритих джерел для збору Інформації та
            <br />виявлення цілей для Сил оборони України.
          </p>

          {/* FPV Drone with hover glow effect */}
          <div className="relative -ml-4">

              {/* Glow background on hover */}
              <Image
                src="/images/drone_blur.png"
                alt=""
                width={530}
                height={130}
                className={`absolute transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-hover-pulse' : 'opacity-0'}`}
                style={{ top: '-15px' }}
              />
              

              {/* Main drone */}
              <Image
                src="/images/drone.png"
                alt="FPV Drone"
                width={530}
                height={130}
                className="relative z-10"
                priority
              />
              
              {/* CTA text */}

          </div>

          {/* Donation cards */}
          <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* MONOBANK card */}
            <a
              href="https://send.monobank.ua/jar/79FAf4WWeX"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-gradient-to-br from-[#181818] via-[#101010] to-[#060606] shadow-[0_18px_50px_rgba(0,0,0,0.6)] p-6 block hover:border-[#3A3A3A] hover:shadow-[0_24px_70px_rgba(0,0,0,0.8)] transition-all duration-200"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-[11px] tracking-[0.22em] text-[#E5E5E5] font-semibold">
                  MONOBANK
                </div>
                <div className="h-7 w-10 rounded-lg bg-gradient-to-br from-[#3A3A3A] to-[#1C1C1C] border border-[#555555]/60 shadow-[0_0_0_1px_rgba(0,0,0,0.7)]" />
              </div>

              {/* Number / text row */}
              <div className="space-y-3 mb-6">
                <div className="flex gap-4 text-[13px] tracking-[0.35em] text-[#F5F5F5] font-[family-name:var(--font-bebas)]">
                  <span>5168</span>
                  <span>7573</span>
                  <span>XXXX</span>
                  <span>XXXX</span>
                </div>
                <div className="text-[10px] text-[#A5A5A5] max-w-sm tracking-[0.28em] uppercase font-[family-name:var(--font-bebas)] font-semibold leading-relaxed">
                  Зроби свій внесок у перемогу — підтримай армію зараз.
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex items-end justify-between text-[9px] text-[#8D8D8D] uppercase tracking-[0.2em]">
                <div>
                  <div className="text-[8px] text-[#5F5F5F] mb-1">CARDHOLDER</div>
                  <div className="text-[10px] text-[#DADADA] tracking-[0.22em]">
                    SHUM OSINT
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[7px] text-[#666666] leading-none mb-1">
                    VALID THRU
                  </div>
                  <div className="text-[10px] tracking-[0.15em] text-[#DADADA]">
                    ∞
                  </div>
                </div>
              </div>
            </a>

            {/* CRYPTO card */}
            <a
              href="https://plisio.net/donate/Kg-O2hWu"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-gradient-to-br from-[#151515] via-[#0C0C0C] to-[#050505] shadow-[0_18px_50px_rgba(0,0,0,0.6)] p-6 block hover:border-[#3A3A3A] hover:shadow-[0_24px_70px_rgba(0,0,0,0.8)] transition-all duration-200"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-[11px] tracking-[0.22em] text-[#E5E5E5] font-semibold">
                  CRYPTO
                </div>
                <div className="flex gap-1.5 text-[9px] text-[#BBBBBB] tracking-[0.18em]">
                  <span>USDT</span>
                  <span>BTC</span>
                  <span>ETH</span>
                </div>
              </div>

              {/* Pseudo-number row */}
              <div className="space-y-3 mb-6">
                <div className="flex gap-4 text-[13px] tracking-[0.35em] text-[#F5F5F5] font-[family-name:var(--font-bebas)]">
                  <span>SHUM</span>
                  <span>XNGX</span>
                  <span>USDC</span>
                  <span>SHUM</span>
                </div>
                <div className="text-[10px] text-[#A5A5A5] max-w-sm tracking-[0.28em] uppercase font-[family-name:var(--font-bebas)] font-semibold leading-relaxed">
                  Разом ми сильні — незламні
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex items-end justify-between text-[9px] text-[#8D8D8D] uppercase tracking-[0.2em]">
                <div>
                  <div className="text-[8px] text-[#5F5F5F] mb-1">ACCOUNT</div>
                  <div className="text-[10px] text-[#DADADA] tracking-[0.22em]">
                    SHUM CAMP
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[7px] text-[#666666] leading-none mb-1">
                    PROVIDER
                  </div>
                  <div className="text-[10px] tracking-[0.18em] text-[#DADADA]">
                    PLISIO
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
