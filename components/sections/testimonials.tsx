import { testimonials } from "@/lib/avaliacoes";

const Testimonials = () => {
  const getStarType = (rating: number, position: number) => {
    if (rating >= position)
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    if (rating >= position - 0.5)
      return (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <defs>
            <clipPath id={`half-${position}`}>
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="#f59e0b"
            clipPath={`url(#half-${position})`}
          />
        </svg>
      );
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1.5"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  };

  return (
    <section>
      <div className="mx-auto max-w-300 px-6 py-20">
        {/* Cabeçalho */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[1.5px] w-5 bg-(--lcnv-teal)" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-(--lcnv-teal)">
              Nossas avaliações
            </span>
          </div>
          <h2
            className="mb-3 text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold leading-[1.15] tracking-tight text-[var(--lcnv-deep)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            O que nossos clientes dizem sobre nós
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((e) => (
            <div
              key={e.id}
              className="flex flex-col border rounded-xl border-(--lcnv-teal-pale) px-5 py-4 w-full"
            >
              <div className="flex gap-0.5 py-3">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((position) => {
                  const type = getStarType(e.rating, position);
                  return <span key={position}>{type}</span>;
                })}
              </div>
              <div className="flex items-center gap-2 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--lcnv-deep) text-sm font-semibold text-white">
                  {e.author.charAt(0)}
                </span>
                <p className="font-extrabold">{e.author}</p>
              </div>
              <span className="text-sm leading-relaxed text-(--lcnv-teal)">{e.text}</span>
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Testimonials;
