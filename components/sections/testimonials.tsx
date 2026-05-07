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
    <div className="flex items-center gap-4">
      {testimonials.map((e) => (
        <div
          key={e.id}
          className="flex flex-col border rounded-xl border-(--lcnv-teal-pale) px-5 py-4 h-full w-full"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((position) => {
              const type = getStarType(e.rating, position);
              return <span key={position}>{type}</span>;
            })}
          </div>
          <div className="flex gap-2">
            <span className="bg-red-500 rounded-full p-2">{e.author.charAt(0)}</span>
            <p className="font-extrabold">{e.author}</p>
          </div>
          <span>{e.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
