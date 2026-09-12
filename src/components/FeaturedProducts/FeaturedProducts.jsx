import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import Reveal from "../Reveal/Reveal";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="bg-off-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-[11px] font-medium tracking-[0.3em] text-gold">
            CURATED SELECTION · 01
          </span>
          <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl">
            DESTAQUES DA COLEÇÃO
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-[15px] font-light text-navy/60">
            Peças selecionadas para quem valoriza estilo, qualidade e presença.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
