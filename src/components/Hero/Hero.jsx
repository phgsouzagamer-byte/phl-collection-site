import { useState } from "react";
import { ChevronDown } from "lucide-react";
import storeConfig from "../../config/store";
import { getWhatsAppGroupLink } from "../../utils/whatsapp";

// Para usar uma fotografia editorial real de fundo, coloque o arquivo em
// /public/assets/banners/hero.jpg — ela aparece automaticamente sobre a
// textura; enquanto não existir, o fundo permanece na textura navy premium.
const HERO_IMAGE = "/assets/banners/hero.jpg";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const { hero } = storeConfig;

  return (
    <section
      id="inicio"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy-deep pt-24"
    >
      {/* Textura base premium */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #0A2A4F 0%, #031A35 45%, #05080C 100%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {!imageFailed && (
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ${
            imageLoaded ? "opacity-45" : "opacity-0"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-navy-deep/70" />

      {/* Linhas finas decorativas */}
      <div className="pointer-events-none absolute left-1/2 top-28 hidden h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:block" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center sm:px-8">
        <p
          className="font-sans text-[11px] font-medium tracking-[0.42em] text-gold/90 opacity-0 sm:text-xs"
          style={{ animation: "fade-in 1s ease 0s forwards" }}
        >
          {hero.eyebrow}
        </p>

        <h1
          className="mx-auto mt-7 max-w-4xl text-balance font-serif text-4xl font-medium leading-[1.08] tracking-wide text-cream opacity-0 sm:text-6xl lg:text-7xl"
          style={{ animation: "fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.15s forwards" }}
        >
          {hero.title}
        </h1>

        <p
          className="mx-auto mt-7 max-w-xl text-balance font-sans text-[15px] font-light leading-relaxed text-cream/75 opacity-0 sm:text-lg"
          style={{ animation: "fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards" }}
        >
          {hero.subtitle}
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
          style={{ animation: "fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.45s forwards" }}
        >
          <a
            href="#catalogo"
            className="inline-flex w-full items-center justify-center bg-gold px-9 py-4 font-sans text-[12px] font-semibold tracking-[0.22em] text-navy-deep transition-all duration-300 hover:bg-cream sm:w-auto"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href={getWhatsAppGroupLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center border border-cream/40 px-9 py-4 font-sans text-[12px] font-semibold tracking-[0.22em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10 sm:w-auto"
          >
            {hero.ctaSecondary}
          </a>
        </div>

        <p
          className="mt-9 font-sans text-[11px] tracking-[0.25em] text-cream/50 opacity-0"
          style={{ animation: "fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.6s forwards" }}
        >
          {hero.note}
        </p>
      </div>

      <a
        href="#impacto"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-cream/50 transition-colors hover:text-gold sm:block"
      >
        <ChevronDown size={22} strokeWidth={1} className="animate-bounce" />
      </a>
    </section>
  );
}
