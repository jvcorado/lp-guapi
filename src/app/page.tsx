import IntroSection from "./components/intro-section";
import AboutSection from "./components/about-section";
import FeatureSection from "./components/feature-section";
import FaqSection from "./components/faq-section";
import InvestmentSection from "./components/investment-section";

export default function Home() {
  return (
    <main className="flex min-h-screen container mx-auto flex-col items-center justify-between py-24 gap-20">
      <IntroSection />
      <AboutSection />
      <FeatureSection />
      <InvestmentSection />
      <FaqSection />
    </main>
  );
}
