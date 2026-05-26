/**
 * Light-themed scrolling marquee. Sits above the light-themed Digital
 * Banking section, forming a continuous light panel.
 */
const items = [
  { kind: "brand", text: "N7" },
  { kind: "say", text: "Say" },
  { kind: "emoji", text: "👋" },
  { kind: "phrase", text: "to the new way of banking" },
  { kind: "brand", text: "CB7" },
  { kind: "say", text: "Say" },
];

function Star() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-shrink-0 text-slate-400"
      fill="currentColor"
    >
      <path d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z" />
    </svg>
  );
}

function Item({ kind, text }) {
  if (kind === "brand") {
    return (
      <span className="font-display text-3xl font-bold text-brand sm:text-4xl">
        {text}
      </span>
    );
  }
  if (kind === "emoji") {
    return <span className="text-2xl sm:text-3xl">{text}</span>;
  }
  return (
    <span className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">
      {text}
    </span>
  );
}

export default function Marquee() {
  // 2× sequence is enough for a `translateX(-50%)` loop.
  const sequence = [...items, ...items];
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden bg-bg-light py-6 sm:py-8"
    >
      <div className="mask-fade-r flex">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 sm:gap-10 sm:pr-10">
          {sequence.map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-8 whitespace-nowrap sm:gap-10"
            >
              <Star />
              <Item {...it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
