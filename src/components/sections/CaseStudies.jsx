import { useState } from "react";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import ArrowRightIcon from "../ui/ArrowRightIcon";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import PatternTile from "../ui/PatternTile";
import { caseStudies } from "../../data/content";

export default function CaseStudies() {
  const [idx, setIdx] = useState(0);
  const total = caseStudies.length;
  const go = (dir) => setIdx((i) => (i + dir + total) % total);
  const active = caseStudies[idx];

  return (
    <Section id="case-studies">
      <FadeIn className="text-center">
        <h2 className="font-display text-display-lg font-medium text-white">
          Our Case Studies
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} className="relative mt-14">
        {/* Side-peek dimmed cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center"
        >
          <div className="ml-[-3%] hidden h-[78%] w-[22%] rounded-3xl border border-white/[0.05] bg-white/[0.02] opacity-50 sm:block" />
          <div className="ml-auto mr-[-3%] hidden h-[78%] w-[22%] rounded-3xl border border-white/[0.05] bg-white/[0.02] opacity-50 sm:block" />
        </div>

        {/* Active card */}
        <div className="relative mx-auto max-w-[820px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-5 sm:p-4"
            >
              <div className="aspect-square sm:aspect-auto">
                <PatternTile />
              </div>
              <div className="flex flex-col p-3 sm:py-4 sm:pr-4">
                <p className="text-[11px] font-semibold uppercase tracking-cta text-brand">
                  {active.category}
                </p>
                <h3 className="mt-4 font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                  {active.title}
                </h3>

                <div className="mt-5 inline-flex w-fit items-center gap-2.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-muted/30 text-white">
                    <Zap className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-sm font-medium text-ink-muted">
                    {active.company}
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full tracking-cta py-3"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </FadeIn>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex flex-1 items-center justify-center gap-5">
          <CircleBtn onClick={() => go(-1)} ariaLabel="Previous" direction="left" />
          <Dots total={total} active={idx} onChange={setIdx} />
          <CircleBtn onClick={() => go(1)} ariaLabel="Next" direction="right" />
        </div>
        <a
          href="#"
          className="group hidden items-center gap-2 text-xs font-semibold uppercase tracking-cta text-brand-glow transition-colors hover:text-white sm:inline-flex"
        >
          <span className="border-b border-brand-glow pb-1 transition-colors group-hover:border-white">
            View All
          </span>
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </Section>
  );
}

function CircleBtn({ onClick, ariaLabel, direction }) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="grid h-11 w-11 place-items-center rounded-full border border-brand text-brand transition-colors hover:bg-brand/10"
    >
      <Icon className="h-4 w-4" strokeWidth={2.2} />
    </motion.button>
  );
}

function Dots({ total, active, onChange }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            onClick={() => onChange(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              isActive ? "w-6 bg-ink-muted" : "w-2 bg-ink-muted/30 hover:bg-ink-muted/60"
            }`}
          />
        );
      })}
    </div>
  );
}
