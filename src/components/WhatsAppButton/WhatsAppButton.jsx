import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import storeConfig from "../../config/store";
import { getWhatsAppGroupLink } from "../../utils/whatsapp";

// Barra fixa de acesso ao grupo exibida apenas no mobile, some ao alcançar o footer.
export default function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={getWhatsAppGroupLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2.5 bg-gold py-4 font-sans text-[12px] font-semibold tracking-[0.18em] text-navy-deep shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 active:scale-[0.98] lg:hidden ${
        hidden ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100"
      }`}
      aria-label="Entrar no grupo da PHL Collection no WhatsApp"
    >
      <MessageCircle size={17} strokeWidth={2} />
      {storeConfig.groupCtaLabel}
    </a>
  );
}
