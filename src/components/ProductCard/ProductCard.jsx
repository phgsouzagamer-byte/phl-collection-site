import ProductImage from "../ProductImage/ProductImage";
import storeConfig from "../../config/store";
import { formatPrice } from "../../utils/format";
import { getWhatsAppGroupLink } from "../../utils/whatsapp";

export default function ProductCard({ product }) {
  const { name, brand, description, price, available, image, secondImage } = product;

  return (
    <article className="group flex flex-col">
      <div className="relative">
        <ProductImage
          src={image}
          secondSrc={secondImage}
          brand={brand}
          alt={`${brand} — ${name}`}
          className="aspect-[4/5] w-full"
        />

        {!available && (
          <span className="absolute left-3 top-3 bg-navy-deep/85 px-3 py-1.5 font-sans text-[10px] font-medium tracking-[0.18em] text-cream/80">
            {storeConfig.soldOutLabel}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-navy/60">
          {brand.toUpperCase()}
        </span>

        <h3 className="mt-1 font-serif text-xl leading-snug text-navy-deep">{name}</h3>

        <p className="mt-1 font-sans text-[13px] font-light text-navy/55">{description}</p>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
          <span className="font-serif text-lg text-navy-deep">{formatPrice(price)}</span>
          <span className="flex items-center gap-1.5 whitespace-nowrap font-sans text-[9px] font-medium tracking-[0.08em] text-navy/50 sm:text-[10px] sm:tracking-[0.12em]">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${available ? "bg-emerald-700/70" : "bg-stone"}`}
              aria-hidden="true"
            />
            {available ? "DISPONÍVEL" : storeConfig.soldOutLabel}
          </span>
        </div>

        {available ? (
          <a
            href={getWhatsAppGroupLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Comprar ${name} — entrar no grupo da PHL Collection`}
            className="mt-4 inline-flex items-center justify-center border border-navy py-3 font-sans text-[11px] font-semibold tracking-[0.2em] text-navy transition-colors duration-300 hover:bg-navy hover:text-cream"
          >
            {storeConfig.buyButtonLabel}
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="mt-4 inline-flex cursor-not-allowed items-center justify-center border border-navy/15 py-3 font-sans text-[11px] font-semibold tracking-[0.2em] text-navy/35"
          >
            {storeConfig.soldOutLabel}
          </span>
        )}
      </div>
    </article>
  );
}
