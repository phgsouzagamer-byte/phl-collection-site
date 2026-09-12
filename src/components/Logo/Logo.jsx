// Logo PHL Collection.
//
// ⚠️ Nenhum arquivo de logo original foi recebido nesta conversa — apenas a
// descrição textual (PHL / COLLECTION / EST. 2026 / elemento equestre).
// Este componente é uma interpretação tipográfica em SVG dessa descrição,
// usada como placeholder fiel à identidade descrita.
//
// Para usar a logo oficial: salve o arquivo em
// /public/assets/logo/phl-logo.svg (ou .png) e troque o <Crest> abaixo por
// um simples <img src="/assets/logo/phl-logo.svg" alt="PHL Collection" />.
// A proporção original do arquivo deve ser preservada (não distorcer).

function Crest({ className }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="0.75" />

      {/* Elemento equestre: ferradura estilizada */}
      <path
        d="M72 118 V88 a28 28 0 0 1 56 0 v30"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="72" cy="100" r="2.6" fill="currentColor" />
      <circle cx="72" cy="112" r="2.6" fill="currentColor" />
      <circle cx="128" cy="100" r="2.6" fill="currentColor" />
      <circle cx="128" cy="112" r="2.6" fill="currentColor" />

      <text
        x="100"
        y="146"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="30"
        letterSpacing="4"
        fill="currentColor"
      >
        PHL
      </text>
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontSize="7"
        letterSpacing="3"
        fill="currentColor"
      >
        COLLECTION
      </text>
      <text
        x="100"
        y="172"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontSize="5.5"
        letterSpacing="2"
        fill="currentColor"
        opacity="0.75"
      >
        EST. 2026
      </text>
    </svg>
  );
}

export default function Logo({ variant = "full", className = "", markClassName = "h-14 w-14" }) {
  if (variant === "mark") {
    return <Crest className={markClassName} />;
  }

  if (variant === "wordmark") {
    return (
      <span className={`font-serif tracking-[0.2em] ${className}`}>
        PHL <span className="font-normal">COLLECTION</span>
      </span>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Crest className={markClassName} />
      <div className="flex flex-col leading-none text-left">
        <span className="font-serif text-lg tracking-[0.25em]">PHL COLLECTION</span>
        <span className="font-sans text-[9px] tracking-[0.35em] opacity-70">EST. 2026</span>
      </div>
    </div>
  );
}
