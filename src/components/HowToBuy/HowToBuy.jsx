import storeConfig from "../../config/store";
import Reveal from "../Reveal/Reveal";
import { getWhatsAppGroupLink } from "../../utils/whatsapp";

export default function HowToBuy() {
  return (
    <section id="como-comprar" className="bg-off-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-[11px] font-medium tracking-[0.3em] text-gold">
            PROCESSO SIMPLES
          </span>
          <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl">COMO COMPRAR</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {storeConfig.howToBuy.map((item, i) => (
            <Reveal key={item.step} delay={i * 100} className="relative text-center sm:text-left">
              <span className="font-serif text-5xl text-gold/35">{item.step}</span>
              <h3 className="mt-4 font-sans text-[13px] font-semibold tracking-[0.16em] text-navy-deep">
                {item.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] font-light leading-relaxed text-navy/60">
                {item.description}
              </p>
              {i < storeConfig.howToBuy.length - 1 && (
                <span className="absolute right-[-1.1rem] top-2 hidden h-px w-8 bg-navy/15 lg:block" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mx-auto mt-20 max-w-2xl border border-navy/15 bg-navy px-8 py-10 text-center sm:px-12">
          <span className="font-sans text-[11px] font-medium tracking-[0.28em] text-gold">
            COMPRA SIMPLES E DIRETA
          </span>
          <p className="mx-auto mt-4 max-w-lg font-sans text-[15px] font-light leading-relaxed text-cream/80">
            {storeConfig.buyMessages.full}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={getWhatsAppGroupLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold px-7 py-3 font-sans text-[11px] font-semibold tracking-[0.2em] text-navy-deep transition-colors duration-300 hover:bg-cream"
            >
              {storeConfig.groupCtaLabel}
            </a>
            <span className="inline-flex items-center gap-2 border border-gold/50 px-5 py-3 font-sans text-[11px] font-medium tracking-[0.18em] text-gold">
              PAGAMENTO VIA PIX
            </span>
          </div>

          <p className="mx-auto mt-7 max-w-md font-sans text-[12px] font-light leading-relaxed text-cream/45">
            {storeConfig.buyMessages.security}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
