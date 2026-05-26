import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import Laptop from "../ui/Laptop";
import LearnMoreLink from "../ui/LearnMoreLink";
import dashboardAsset from "../../assets/mockups/cloud-one.svg";

export default function CloudCore() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <Watermark>CB7</Watermark>

      <div className="container-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          <FadeIn>
            <h2 className="font-display text-display-lg font-medium text-white">
              A complete cloud-based
              <br className="hidden sm:block" /> core banking.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="mt-9 flex flex-col items-start gap-5">
              <Button size="lg" className="min-w-[200px] py-3.5 tracking-cta">
                REQUEST DEMO
              </Button>
              <LearnMoreLink />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Laptop src={dashboardAsset} alt="Cloud-based core banking dashboard" side="right" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Watermark({ children }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden -translate-x-[58%] select-none items-center md:flex"
    >
      <span
        className="font-display text-[clamp(18rem,40vw,32rem)] font-extrabold leading-none tracking-tight"
        style={{
          WebkitTextStroke: "1.5px rgba(255,255,255,0.06)",
          color: "transparent",
        }}
      >
        {children}
      </span>
    </div>
  );
}
