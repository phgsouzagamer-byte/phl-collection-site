import { Gem, Clock3, MessageCircle, Wallet } from "lucide-react";
import storeConfig from "../../config/store";
import Reveal from "../Reveal/Reveal";

const ICONS = [Gem, Clock3, MessageCircle, Wallet];

export default function Benefits() {
  return (
    <section className="bg-off-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-[11px] font-medium tracking-[0.3em] text-gold">
            DIFERENCIAIS
          </span>
          <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl">
            POR QUE ESCOLHER A PHL
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {storeConfig.benefits.map((benefit, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={benefit.title} delay={i * 90} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                  <Icon size={22} strokeWidth={1.25} className="text-gold" />
                </div>
                <h3 className="mt-5 font-sans text-[13px] font-semibold tracking-[0.14em] text-navy-deep">
                  {benefit.title}
                </h3>
                <p className="mt-2 font-sans text-[14px] font-light leading-relaxed text-navy/60">
                  {benefit.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
