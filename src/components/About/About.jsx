import storeConfig from "../../config/store";
import Reveal from "../Reveal/Reveal";

export default function About() {
  return (
    <section id="sobre" className="bg-navy py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <Reveal className="flex justify-center lg:justify-start">
          <img
            src="/assets/logo/phl-logo.jpg"
            alt="PHL Collection"
            className="h-40 w-40 object-contain sm:h-48 sm:w-48"
          />
        </Reveal>

        <Reveal delay={100}>
          <span className="font-sans text-[11px] font-medium tracking-[0.3em] text-gold">
            A MARCA
          </span>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">
            {storeConfig.about.title}
          </h2>
          <div className="mt-6 space-y-5">
            {storeConfig.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-xl font-sans text-[15px] font-light leading-relaxed text-cream/70"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
