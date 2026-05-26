import FadeIn from "../ui/FadeIn";
import Laptop from "../ui/Laptop";
import CheckBullet from "../ui/CheckBullet";
import { connectedFeatures } from "../../data/content";
import dashboardTwo from "../../assets/mockups/cloud-two.svg";

export default function ConnectedSystem() {
  const col1 = connectedFeatures.slice(0, 5);
  const col2 = connectedFeatures.slice(5);

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="container-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <FadeIn>
            <Laptop src={dashboardTwo} alt="KYC dashboard" side="left" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-display-md font-medium leading-snug text-white">
              Run a more efficient, flexible,
              <br className="hidden sm:block" /> and digitally connected
              corebanking system
            </h2>

            <p className="mt-7 text-sm font-medium text-white">
              What you will get:
            </p>

            <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              <ul className="space-y-4">
                {col1.map((label) => (
                  <CheckBullet key={label} label={label} />
                ))}
              </ul>
              <ul className="space-y-4">
                {col2.map((label) => (
                  <CheckBullet key={label} label={label} />
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
