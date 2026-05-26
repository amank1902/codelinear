import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 select-none whitespace-nowrap";

const variants = {
  primary:
    "bg-gradient-to-r from-[#00B4FD] to-[#003ACE] text-white shadow-glow hover:shadow-[0_18px_70px_-10px_rgba(0,180,253,0.6)] hover:brightness-110",
  secondary:
    "bg-transparent text-ink border border-white/15 hover:bg-white/[0.06] hover:border-white/30",
  ghost: "text-ink hover:text-white",
  link: "text-ink-muted hover:text-white px-0 py-0 gap-1",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  as = "button",
  ...props
}) {
  const Cmp = motion[as] ?? motion.button;
  return (
    <Cmp
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={`${base} ${variants[variant]} ${variant === "link" ? "" : sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />}
    </Cmp>
  );
}
