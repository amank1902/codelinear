import { Check } from "lucide-react";

/**
 * Solid brand-blue circle with white check mark + label text.
 * Used in ConnectedSystem and DigitalBanking feature lists.
 */
export default function CheckBullet({
  label,
  textClassName = "text-[15px] leading-relaxed text-ink",
  align = "start",
}) {
  return (
    <li className={`flex gap-3 ${align === "center" ? "items-center" : "items-start"}`}>
      <span
        className={`grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand text-white ${
          align === "start" ? "mt-0.5" : ""
        }`}
      >
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className={textClassName}>{label}</span>
    </li>
  );
}
