import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import storeConfig from "../../config/store";
import { getWhatsAppGroupLink } from "../../utils/whatsapp";

const NAV_LINKS = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "CATÁLOGO", href: "#catalogo" },
  { label: "COMO COMPRAR", href: "#como-comprar" },
  { label: "SOBRE", href: "#sobre" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          : "bg-navy/70 py-5 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-cream"
          aria-label="PHL Collection — Início"
        >
          <Logo variant="mark" markClassName="h-9 w-9 sm:h-10 sm:w-10 text-cream" />
          <span className="font-serif text-base tracking-[0.2em] sm:text-lg">
            PHL <span className="font-normal">COLLECTION</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[12px] font-medium tracking-[0.18em] text-cream/85 transition-colors duration-200 hover:text-gold"
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
            className="hidden items-center gap-2 border border-gold/60 px-5 py-2.5 font-sans text-[11px] font-medium tracking-[0.18em] text-cream transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-navy sm:inline-flex"
          >
            <MessageCircle size={14} strokeWidth={1.75} />
            {storeConfig.groupCtaLabel}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center text-cream lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </header>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 top-0 z-[60] flex flex-col bg-navy transition-transform duration-400 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionDuration: "380ms" }}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Logo variant="mark" markClassName="h-9 w-9 text-cream" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center text-cream"
            aria-label="Fechar menu"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav
          aria-label="Navegação mobile"
          className="flex flex-1 flex-col items-center justify-center gap-8"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="font-serif text-2xl tracking-[0.12em] text-cream transition-colors duration-200 hover:text-gold"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}

          <a
            href={getWhatsAppGroupLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-4 inline-flex items-center gap-2 border border-gold px-8 py-3.5 font-sans text-xs font-medium tracking-[0.2em] text-gold"
          >
            <MessageCircle size={16} strokeWidth={1.75} />
            {storeConfig.groupCtaLabel}
          </a>
        </nav>

        <p className="mx-auto max-w-[220px] text-center font-sans text-[11px] font-light leading-relaxed text-cream/50">
          {storeConfig.buyMessages.short}
        </p>

        <p className="pb-8 text-center font-sans text-[10px] tracking-[0.3em] text-cream/50">
          {storeConfig.slogan.toUpperCase()}
        </p>
      </div>
    </>
  );
}
