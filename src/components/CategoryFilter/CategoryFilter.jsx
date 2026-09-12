export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Filtrar por categoria"
      className="scrollbar-thin flex snap-x gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
    >
      {categories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            className={`snap-start whitespace-nowrap border px-5 py-2.5 font-sans text-[11px] font-medium tracking-[0.16em] transition-all duration-300 ${
              isActive
                ? "border-gold bg-gold text-navy-deep"
                : "border-gold/40 text-cream/80 hover:border-gold hover:text-gold"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
