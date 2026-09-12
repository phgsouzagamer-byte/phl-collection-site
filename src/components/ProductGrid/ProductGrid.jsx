import { useMemo, useState } from "react";
import products from "../../data/products";
import storeConfig from "../../config/store";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ProductCard from "../ProductCard/ProductCard";
import Reveal from "../Reveal/Reveal";
import { getWhatsAppGroupLink } from "../../utils/whatsapp";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filtered = useMemo(() => {
    if (activeCategory === "todos") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="catalogo" className="bg-navy-deep py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-[11px] font-medium tracking-[0.3em] text-gold">
            THE COLLECTION · 2026
          </span>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">NOSSA COLEÇÃO</h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-[15px] font-light text-cream/60">
            Navegue por categoria e encontre a peça certa para o seu estilo.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={100}>
          <CategoryFilter
            categories={storeConfig.categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </Reveal>

        <Reveal
          delay={150}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 border border-gold/25 px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <span className="font-sans text-[10px] font-medium tracking-[0.25em] text-gold">
              COMO COMPRAR
            </span>
            <p className="mt-1 font-sans text-[13px] font-light leading-relaxed text-cream/70">
              Entre no grupo da PHL Collection pelo botão abaixo. Para efetuar sua compra, entre
              em contato com um administrador do grupo.
            </p>
          </div>
          <a
            href={getWhatsAppGroupLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap border border-gold/50 px-5 py-2.5 font-sans text-[11px] font-medium tracking-[0.16em] text-gold transition-colors duration-300 hover:bg-gold hover:text-navy-deep"
          >
            {storeConfig.groupCtaLabel}
          </a>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
            {filtered.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 80} className="bg-off-white p-3 sm:p-4">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center font-sans text-sm text-cream/50">
            Nenhuma peça encontrada nesta categoria no momento.
          </p>
        )}
      </div>
    </section>
  );
}
