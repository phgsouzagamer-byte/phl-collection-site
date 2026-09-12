import { MessageCircle } from "lucide-react";
import storeConfig from "../../config/store";
import Logo from "../Logo/Logo";
import { getWhatsAppGroupLink } from "../../utils/whatsapp";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Como comprar", href: "#como-comprar" },
  { label: "Sobre", href: "#sobre" },
];

// lucide-react não inclui ícones de marcas (trademark) — Instagram desenhado à mão.
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-navy-deep pb-28 pt-16 sm:pb-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 border border-gold/25 px-8 py-9 text-center">
          <span className="font-sans text-[11px] font-medium tracking-[0.28em] text-gold">
            {storeConfig.footerGroup.title}
          </span>
          <p className="max-w-md font-sans text-[14px] font-light leading-relaxed text-cream/70">
            {storeConfig.footerGroup.description}
          </p>
          <a
            href={getWhatsAppGroupLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 bg-gold px-7 py-3 font-sans text-[11px] font-semibold tracking-[0.2em] text-navy-deep transition-colors duration-300 hover:bg-cream"
          >
            <MessageCircle size={15} strokeWidth={1.75} />
            {storeConfig.footerGroup.cta}
          </a>
        </div>

        <div className="flex flex-col items-center gap-10 border-b border-cream/10 pb-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo variant="mark" markClassName="h-12 w-12 text-cream" />
            <p className="font-sans text-[11px] tracking-[0.2em] text-cream/50">
              {storeConfig.slogan.toUpperCase()}
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[12px] tracking-[0.1em] text-cream/60 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppGroupLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entrar no grupo do WhatsApp"
              className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle size={17} strokeWidth={1.5} />
            </a>
            <a
              href={storeConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Instagram"
              className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon width={17} height={17} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center font-sans text-[11px] tracking-[0.05em] text-cream/35">
          © {year} {storeConfig.legalNote}
        </p>
      </div>
    </footer>
  );
}
