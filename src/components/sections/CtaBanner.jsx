import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";

const DEFAULTS = {
  title: "Take the full advantage of going paper-less now.",
  body: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
};

export default function CtaBanner({ title = DEFAULTS.title, body = DEFAULTS.body, light = false }) {
  const inner = (
    <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
      <div>
        <h3 className="font-display text-display-md font-medium leading-tight text-white">
          {title}
        </h3>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-muted">
          {body}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 lg:justify-end">
        <Button variant="secondary" size="lg" className="min-w-[160px] tracking-cta">
          CONTACT US
        </Button>
        <Button size="lg" className="min-w-[160px] tracking-cta">
          REQUEST DEMO
        </Button>
      </div>
    </div>
  );

  if (light) {
    return (
      <section className="relative bg-bg-light py-16 sm:py-20">
        <div className="container-shell">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0E1430] via-[#0B1027] to-[#080D22] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-12 font-display text-[14rem] font-extrabold leading-none text-white/[0.04] sm:text-[18rem]"
              >
                N7
              </div>
              <div className="relative">{inner}</div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-shell">
        <FadeIn>{inner}</FadeIn>
      </div>
    </section>
  );
}
