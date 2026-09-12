import storeConfig from "../../config/store";

export default function ImpactBar() {
  return (
    <section id="impacto" className="border-y border-gold/20 bg-navy py-9">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-center">
        {storeConfig.impactWords.map((word, i) => (
          <span key={word} className="flex items-center gap-x-10">
            <span className="font-serif text-sm tracking-[0.3em] text-cream/80 sm:text-base">
              {word}
            </span>
            {i < storeConfig.impactWords.length - 1 && (
              <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:inline-block" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
