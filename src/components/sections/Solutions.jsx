import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import SolutionCard from "../cards/SolutionCard";
import { solutions } from "../../data/content";

export default function Solutions() {
  return (
    <Section id="solutions">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <FadeIn className="lg:sticky lg:top-28">
          <h2 className="font-display text-display-lg font-medium text-white">
            All of our solutions are
            <br className="hidden sm:block" /> tailor-made to your needs
          </h2>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="tracking-cta px-7"
            >
              REQUEST DEMO
            </Button>
          </div>
        </FadeIn>

        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <SolutionCard
              key={s.title}
              title={s.title}
              body={s.body}
              icon={s.icon}
              tag={s.tag}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
