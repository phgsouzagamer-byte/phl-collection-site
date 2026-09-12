import storeConfig from "../../config/store";
import Reveal from "../Reveal/Reveal";
import { getWhatsAppGroupLink } from "../../utils/whatsapp";

export default function FinalCTA() {
  const { finalCta } = storeConfig;

  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 sm:py-28">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(80% 100% at 50% 100%, #0A2A4F 0%, #05080C 70%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-gold/50 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-serif text-3xl leading-tight text-cream sm:text-5xl">
            {finalCta.title}
          </h2>
          <p className="mt-5 font-sans text-[15px] font-light text-cream/65 sm:text-base">
            {finalCta.subtitle}
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#catalogo"
            className="inline-flex w-full items-center justify-center bg-gold px-9 py-4 font-sans text-[12px] font-semibold tracking-[0.22em] text-navy-deep transition-all duration-300 hover:bg-cream sm:w-auto"
          >
            {finalCta.ctaPrimary}
          </a>
          <a
            href={getWhatsAppGroupLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center border border-cream/40 px-9 py-4 font-sans text-[12px] font-semibold tracking-[0.22em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10 sm:w-auto"
          >
            {finalCta.ctaSecondary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
