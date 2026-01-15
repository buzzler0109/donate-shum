import Image from "next/image";

export default function Home() {

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
      <div className="absolute top-16 right-0 w-1/2 h-[calc(100%-4rem)] pointer-events-none z-0">
        <Image
          src="/images/scanlines.png"
          alt=""
          fill
          className="object-contain object-right opacity-90"
          priority
        />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Main content - CENTERED */}
        <main className="relative z-10 flex-1 flex flex-col justify-center items-center py-8 px-4 sm:px-8">
          <div className="w-full max-w-4xl flex flex-col items-center text-center">
            {/* Title */}
            <div className="mb-4">
              <h1 className="font-[family-name:var(--font-bebas)] text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] tracking-tight text-white font-bold leading-[0.85]">
                SHUM OSINT
              </h1>
              <h2 className="font-[family-name:var(--font-bebas)] text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] tracking-tight text-[#5A5A5A] leading-[0.85]">
                DONATION HUB
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#6B6B6B] text-[13px] md:text-[14px] max-w-[340px] leading-[1.5] mb-6">
              Шум — це розвідувальна спільнота, що
              <br />використовує аналітичні методи та
              <br />розвідку з
              <br />відкритих джерел для збору Інформації та
              <br />виявлення цілей для Сил оборони України.
            </p>

            {/* Rocket GIF - recruiting link */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScpwF4m7B27AkXUEeiMsuZhR9Ls6s6A5Ex1MVKz8nc8kA4m_g/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mb-4 inline-block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/rocket.gif"
                alt="Rocket"
                width={530}
                height={130}
                className="relative z-10"
              />
            </a>

            {/* Recruitment text */}
            <p className="text-[#6B6B6B] text-[11px] tracking-[0.15em] uppercase mb-8">
              Приєднуйся до команди — натисни на ракету
            </p>

            {/* Donation cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {/* MONOBANK card */}
              <div className="flex flex-col">
                <a
                  href="https://send.monobank.ua/jar/79FAf4WWeX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-gradient-to-br from-[#181818] via-[#101010] to-[#060606] shadow-[0_18px_50px_rgba(0,0,0,0.6)] p-6 block hover:border-[#3A3A3A] hover:shadow-[0_24px_70px_rgba(0,0,0,0.8)] transition-all duration-200 aspect-[1.586/1] flex flex-col justify-between"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="text-[11px] tracking-[0.22em] text-[#E5E5E5] font-semibold">
                      MONOBANK
                    </div>
                    <div className="h-7 w-10 rounded-lg bg-gradient-to-br from-[#3A3A3A] to-[#1C1C1C] border border-[#555555]/60 shadow-[0_0_0_1px_rgba(0,0,0,0.7)]" />
                  </div>

                  {/* Number row */}
                  <div>
                    <div className="flex gap-4 text-[13px] tracking-[0.35em] text-[#F5F5F5] font-[family-name:var(--font-bebas)]">
                      <span>5168</span>
                      <span>7573</span>
                      <span>XXXX</span>
                      <span>XXXX</span>
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
                <p className="text-[#6B6B6B] text-[11px] tracking-[0.15em] uppercase mt-3 text-center">
                  Поповнити банку — натисни на картку
                </p>
              </div>

              {/* CRYPTO card */}
              <div className="flex flex-col">
                <a
                  href="https://plisio.net/donate/Kg-O2hWu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-gradient-to-br from-[#181818] via-[#101010] to-[#060606] shadow-[0_18px_50px_rgba(0,0,0,0.6)] p-6 block hover:border-[#3A3A3A] hover:shadow-[0_24px_70px_rgba(0,0,0,0.8)] transition-all duration-200 aspect-[1.586/1] flex flex-col justify-between"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="text-[11px] tracking-[0.22em] text-[#E5E5E5] font-semibold">
                      CRYPTO
                    </div>
                    <div className="h-7 w-10 rounded-lg bg-gradient-to-br from-[#3A3A3A] to-[#1C1C1C] border border-[#555555]/60 shadow-[0_0_0_1px_rgba(0,0,0,0.7)]" />
                  </div>

                  {/* Number row */}
                  <div>
                    <div className="flex gap-4 text-[13px] tracking-[0.35em] text-[#F5F5F5] font-[family-name:var(--font-bebas)]">
                      <span>SHUM</span>
                      <span>XNGX</span>
                      <span>USDC</span>
                      <span>SHUM</span>
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
                <p className="text-[#6B6B6B] text-[11px] tracking-[0.15em] uppercase mt-3 text-center">
                  Задонатити криптою — натисни на картку
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
