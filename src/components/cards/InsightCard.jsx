import { motion } from "framer-motion";
import PatternTile from "../ui/PatternTile";
import Button from "../ui/Button";

export default function InsightCard({
  category,
  title,
  author,
  date,
  featured = false,
  delay = 0,
}) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -3 }}
        className="group grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.015] p-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] sm:gap-6 sm:p-5"
      >
        <div className="aspect-square sm:aspect-auto">
          <PatternTile />
        </div>
        <div className="flex flex-col p-4 sm:py-5 sm:pr-5">
          <Meta category={category} />
          <h3 className="mt-4 font-display text-xl font-medium leading-snug text-white sm:text-2xl">
            {title}
          </h3>
          <Byline author={author} date={date} />
          <div className="mt-auto pt-10">
            <ReadMore />
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-white/[0.015] p-7"
    >
      <Meta category={category} />
      <h3 className="mt-4 font-display text-xl font-medium leading-snug text-white sm:text-2xl">
        {title}
      </h3>
      <Byline author={author} date={date} />
      <div className="mt-auto pt-10">
        <ReadMore />
      </div>
    </motion.article>
  );
}

function Meta({ category }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-cta text-brand">
      {category}
    </p>
  );
}

function Byline({ author, date }) {
  return (
    <p className="mt-4 text-sm text-ink-muted">
      <span>{author}</span>
      <span className="mx-3">·</span>
      <span>{date}</span>
    </p>
  );
}

function ReadMore() {
  return (
    <Button
      variant="secondary"
      size="md"
      className="w-full tracking-cta py-3"
    >
      READ MORE
    </Button>
  );
}
