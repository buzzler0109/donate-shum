"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#080807] relative overflow-hidden flex flex-col">
      {/* Header with logo */}
      <header className="relative z-20 w-full py-4 flex justify-center border-b border-[#3A3A3A]/60 rounded-b-[20px]">
        <div className="px-8 py-3 flex justify-center items-center">
          <Image
            src="/images/logo.png"
            alt="SHUM"
            width={70}
            height={20}
            className="opacity-95 transition-opacity duration-300 hover:opacity-100"
            priority
          />
        </div>
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
            <a
              href="https://send.monobank.ua/jar/79FAf4WWeX"
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

            </a>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
