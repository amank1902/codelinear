import { motion } from "framer-motion";
import Button from "../ui/Button";
import { trustedBy } from "../../data/content";
import portrait from "../../assets/hero/portrait.svg";
import leftCard from "../../assets/hero/left.svg";
import rightCard from "../../assets/hero/right.svg";
import shellsIcon from "../../assets/mockups/shells.svg";
import smartfinderIcon from "../../assets/mockups/smartfinder.svg";
import zoomerIcon from "../../assets/mockups/zoomer.svg";
import artvenueIcon from "../../assets/mockups/artvenue.svg";
import contrastIcon from "../../assets/mockups/contrast.svg";
import wavesIcon from "../../assets/mockups/waves.svg";

const brandIcons = [
  shellsIcon,
  smartfinderIcon,
  zoomerIcon,
  artvenueIcon,
  contrastIcon,
  wavesIcon,
];

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28"
    >
      <HeroGlow />

      <div className="container-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="font-display text-display-xl font-medium text-white"
            >
              The new foundation
              <br className="hidden sm:block" /> of modern banking
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 max-w-[26rem] text-[15px] leading-relaxed text-ink-muted"
            >
              We drive innovation and growth, provide seamless customer experience
              and operational excellence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button size="lg" className="min-w-[200px] py-3.5 tracking-cta">
                REQUEST DEMO
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="min-w-[200px] py-3.5 tracking-cta"
              >
                CONTACT US
              </Button>
            </motion.div>

            <TrustedRow />
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute right-[-8%] top-1/2 h-[640px] w-[820px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(42,91,255,0.45),rgba(42,91,255,0.06)_55%,transparent_75%)]" />
    </div>
  );
}

function TrustedRow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.45 }}
      className="mt-20"
    >
      <p className="text-sm text-ink">Trusted By:</p>
      <div className="no-scrollbar mt-5 flex items-center gap-x-4 overflow-x-auto whitespace-nowrap sm:gap-x-5">
        {trustedBy.map((name, i) => (
          <img
            key={name}
            src={brandIcons[i]}
            alt={name}
            draggable="false"
            className="h-[14px] w-auto flex-shrink-0 select-none opacity-80 sm:h-4"
          />
        ))}
      </div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative mx-auto w-full max-w-[380px]"
    >
      <img
        src={portrait}
        alt="Woman using a banking app on her laptop"
        loading="eager"
        draggable="false"
        className="relative z-10 w-full select-none"
      />

      <FloatingCard
        src={rightCard}
        alt="Account overview card"
        duration={6}
        delay={0}
        className="right-[-14%] top-[4%] w-[60%]"
      />
      <FloatingCard
        src={leftCard}
        alt="Recent activity card"
        duration={7}
        delay={0.6}
        className="left-0 top-[62%] w-[58%] sm:-left-[12%]"
      />
    </motion.div>
  );
}

function FloatingCard({ src, alt, duration, delay, className }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      draggable="false"
      className={`pointer-events-none absolute z-20 select-none drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] ${className}`}
    />
  );
}
