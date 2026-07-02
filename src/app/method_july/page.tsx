import { BenefitsSection } from "@/components/method-july/BenefitsSection";
import { BundleCardsSection } from "@/components/method-july/BundleCardsSection";
import { ChampionBioSection } from "@/components/method-july/ChampionBioSection";
import { FaqSection } from "@/components/method-july/FaqSection";
import { FinalCtaSection } from "@/components/method-july/FinalCtaSection";
import { FooterSection } from "@/components/method-july/FooterSection";
import { GuaranteeSection } from "@/components/method-july/GuaranteeSection";
import { HeroSection } from "@/components/method-july/HeroSection";
import { MarqueeSection } from "@/components/method-july/MarqueeSection";
import { PricingSection } from "@/components/method-july/PricingSection";
import { SupportContactSection } from "@/components/method-july/SupportContactSection";
import { TestimonialsSection } from "@/components/method-july/TestimonialsSection";
import { WhyItWorksSection } from "@/components/method-july/WhyItWorksSection";

export default function MethodJulyPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <HeroSection />
      <MarqueeSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BundleCardsSection />
      <PricingSection />
      <SupportContactSection />
      <WhyItWorksSection />
      <ChampionBioSection />
      <FinalCtaSection />
      <GuaranteeSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
