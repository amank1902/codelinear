import Section from "../ui/Section";
import ArrowRightIcon from "../ui/ArrowRightIcon";
import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import InsightCard from "../cards/InsightCard";
import { insights } from "../../data/content";

export default function Insights() {
  return (
    <Section id="insights">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <FadeIn>
          <h2 className="font-display text-display-lg font-medium text-white">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="tracking-cta px-7"
            >
              INSIGHTS
            </Button>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <InsightCard {...insights[0]} featured delay={0} />
          <div className="grid gap-6 sm:grid-cols-2">
            <InsightCard {...insights[1]} delay={0.08} />
            <InsightCard {...insights[2]} delay={0.16} />
          </div>
          <div className="flex justify-end pt-2">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-cta text-brand-glow transition-colors hover:text-white"
            >
              <span className="border-b border-brand-glow pb-1 transition-colors group-hover:border-white">
                Read All Insights
              </span>
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
