import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import CheckBullet from "../ui/CheckBullet";
import LearnMoreLink from "../ui/LearnMoreLink";
import { digitalBankingFeatures } from "../../data/content";
import phoneWallet from "../../assets/mockups/phone-one.svg";
import phoneChart from "../../assets/mockups/phone-two.svg";
import phoneProfile from "../../assets/mockups/phone-three.svg";
import corePattern from "../../assets/icons/solutions/core-thin.svg";

const phoneAssets = [phoneWallet, phoneChart, phoneProfile];

export default function DigitalBanking() {
  return (
    <section className="relative overflow-hidden bg-bg-light py-24 sm:py-28 lg:py-32 text-slate-900">
      <BackgroundWatermarks />

      <div className="container-shell relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <FadeIn className="lg:sticky lg:top-12 lg:-mt-[140px]">
            <h2 className="font-display text-display-lg font-medium text-slate-900">
              Digital banking
              <br className="hidden sm:block" /> out-of-the-box
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-slate-600">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>
            <div className="mt-9 flex flex-col items-start gap-5">
              <Button size="lg" className="min-w-[200px] py-3.5 tracking-cta">
                REQUEST DEMO
              </Button>
              <LearnMoreLink />
            </div>
          </FadeIn>

          <div className="space-y-24 lg:space-y-28">
            {digitalBankingFeatures.map((feature, i) => (
              <FeatureRow
                key={feature.eyebrow}
                feature={feature}
                asset={phoneAssets[i]}
                reverse={i === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ feature, asset, reverse }) {
  return (
    <FadeIn>
      <div
        className={`grid items-center gap-8 sm:grid-cols-2 sm:gap-10 ${
          reverse ? "sm:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div className="flex justify-center">
          <img
            src={asset}
            alt={feature.eyebrow}
            loading="lazy"
            draggable="false"
            className="w-full max-w-[280px] select-none drop-shadow-[0_30px_50px_rgba(15,23,42,0.18)]"
          />
        </div>
        <div>
          <p className="text-base font-semibold text-slate-900">
            {feature.eyebrow}
          </p>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-slate-600">
            {feature.body}
          </p>
          <ul className="mt-6 space-y-3">
            {feature.bullets.map((b) => (
              <CheckBullet
                key={b}
                label={b}
                textClassName="text-[14px] text-slate-700"
                align="center"
              />
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}

function BackgroundWatermarks() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Light N7 word watermarks (corners) */}
      <span className="absolute left-[-4%] top-[6%] font-display text-[14rem] font-extrabold leading-none tracking-tight text-brand opacity-[0.06]">
        N7
      </span>
      <span className="absolute right-[-2%] bottom-[6%] font-display text-[14rem] font-extrabold leading-none tracking-tight text-brand opacity-[0.06]">
        N7
      </span>

      {/* One large swirl-curve pattern, mostly off the left edge so only a
          narrow sliver of curves peeks into the section. */}
      <img
        src={corePattern}
        alt=""
        draggable="false"
        className="absolute left-[-40%] top-1/2 h-[1100px] w-[1100px] -translate-y-1/2 select-none opacity-40"
      />
    </div>
  );
}
