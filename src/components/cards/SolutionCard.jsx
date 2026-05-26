import { motion } from "framer-motion";
import LearnMoreLink from "../ui/LearnMoreLink";

export default function SolutionCard({ title, body, icon, tag, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col"
    >
      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="h-12 w-12 select-none transition-transform duration-300 group-hover:scale-105"
        />
        {tag && (
          <span className="mt-2 text-[10px] font-semibold uppercase tracking-cta text-ink-muted">
            {tag}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-medium text-white">{title}</h3>
      <p className="mt-4 max-w-[26rem] text-[15px] leading-relaxed text-ink-muted">
        {body}
      </p>

      <LearnMoreLink className="mt-6" />
    </motion.article>
  );
}
