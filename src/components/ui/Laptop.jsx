import { motion } from "framer-motion";

/**
 * Laptop chassis built in CSS — image fills the screen area, a thin blue
 * base sits underneath. Pokes off the LEFT or RIGHT edge of the viewport
 * depending on `side`.
 */
export default function Laptop({ src, alt = "", side = "right" }) {
  const overhang =
    side === "left"
      ? "lg:ml-[-14vw] lg:mr-auto"
      : "lg:mr-[-14vw] lg:ml-auto";

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mx-auto w-full max-w-[560px] ${overhang}`}
    >
      {/* Screen */}
      <div className="relative rounded-[18px] border-[3px] border-brand bg-white p-1.5 shadow-[0_40px_80px_-20px_rgba(42,91,255,0.45)]">
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            draggable="false"
            className="block w-full select-none"
          />
        </div>
      </div>

      {/* Base / hinge */}
      <div className="relative mx-auto mt-[6px] h-[6px] w-[108%] -translate-x-[3.7%] rounded-b-[8px] bg-gradient-to-b from-brand to-brand-hover">
        <div className="absolute left-1/2 top-1/2 h-[3px] w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30" />
      </div>
    </motion.div>
  );
}
