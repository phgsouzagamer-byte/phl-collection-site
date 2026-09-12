import { useState } from "react";

// Exibe a foto real do produto quando ela existir em /public/assets/products/.
// Enquanto o arquivo não for adicionado, cai automaticamente em um
// placeholder editorial elegante — não usamos fotos de estoque genéricas.
export default function ProductImage({ src, alt, brand, secondSrc, className = "" }) {
  const [failed, setFailed] = useState(false);
  const [hoverFailed, setHoverFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-soft ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="pointer-events-none absolute inset-3 border border-gold/30" />
        <span className="font-serif text-[11px] tracking-[0.35em] text-gold/80">
          {brand?.toUpperCase()}
        </span>
        <span className="mt-2 h-px w-8 bg-gold/40" />
        <span className="mt-3 max-w-[80%] text-center font-serif text-sm tracking-wide text-cream/70">
          Foto em breve
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-navy ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] ${
          secondSrc && !hoverFailed ? "group-hover:opacity-0" : ""
        }`}
      />
      {secondSrc && !hoverFailed && (
        <img
          src={secondSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={() => setHoverFailed(true)}
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        />
      )}
    </div>
  );
}
