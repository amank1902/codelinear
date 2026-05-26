import ArrowRightIcon from "./ArrowRightIcon";

/**
 * Cyan "LEARN MORE →" link with underline that fades on hover.
 * Used by Solutions card, CloudCore and DigitalBanking.
 */
export default function LearnMoreLink({
  href = "#",
  label = "Learn More",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`group inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-cta text-brand-glow transition-colors hover:text-white ${className}`}
    >
      <span className="border-b border-brand-glow pb-1 transition-colors group-hover:border-white">
        {label}
      </span>
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </a>
  );
}
