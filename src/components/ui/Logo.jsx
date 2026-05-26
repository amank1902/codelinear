export default function Logo({ className = "", size = "md" }) {
  const sizes = {
    sm: "text-2xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-5xl",
  };
  return (
    <a href="#top" className={`inline-flex items-center ${className}`}>
      <span
        className={`font-display font-bold leading-none tracking-tight text-white ${sizes[size]}`}
      >
        N7
      </span>
    </a>
  );
}
