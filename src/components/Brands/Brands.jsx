import storeConfig from "../../config/store";
import Reveal from "../Reveal/Reveal";

export default function Brands() {
  return (
    <section className="border-y border-navy/10 bg-off-white py-16">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        <Reveal>
          <span className="font-sans text-[10px] font-medium tracking-[0.3em] text-navy/40">
            MARCAS QUE VOCÊ ENCONTRA NA COLEÇÃO
          </span>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {storeConfig.brands.map((brand) => (
            <span
              key={brand}
              className="font-serif text-sm tracking-[0.08em] text-navy/55 sm:text-base"
            >
              {brand}
            </span>
          ))}
          <span className="font-sans text-sm italic text-navy/35">e muito mais...</span>
        </Reveal>
      </div>
    </section>
  );
}
