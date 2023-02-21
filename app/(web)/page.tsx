import Hero from "~/parts/Index/Hero";
import ContributorSection from "~/parts/Index/ContributorSection";
import BenefitSection from "~/parts/Index/BenefitSection";
import StepsSection from "~/parts/Index/StepByStepSection/Step";
import ContactForm from "~/parts/Index/ContactForm";
import { contributors } from "~/data/contributor/contributors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitSection />
      <StepsSection />
      <ContactForm />
      <ContributorSection contributors={contributors} />
    </>
  );
}
