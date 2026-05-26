import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Solutions from "./components/sections/Solutions";
import CloudCore from "./components/sections/CloudCore";
import ConnectedSystem from "./components/sections/ConnectedSystem";
import CtaBanner from "./components/sections/CtaBanner";
import Marquee from "./components/sections/Marquee";
import DigitalBanking from "./components/sections/DigitalBanking";
import Insights from "./components/sections/Insights";
import CaseStudies from "./components/sections/CaseStudies";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <CloudCore />
        <ConnectedSystem />
        <CtaBanner />
        <Marquee />
        <DigitalBanking />
        <CtaBanner light />
        <Insights />
        <CaseStudies />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
