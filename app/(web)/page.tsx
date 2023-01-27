import React from "react";
import Hero from "~/parts/Index/Hero";
import ContributorSection from "~/parts/Index/ContributorSection";
import BenefitSection from "~/parts/Index/BenefitSection";
import Step from "~/parts/Index/StepByStepSection/Step";
import Forms from "~/parts/Index/Forms";
import type { Contributor } from "~/types/Index/Contributor";
import { contributors } from "~/data/contributor/contributors";
import TrustedSection from "~/parts/Index/TrustedSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <BenefitSection />
      <Step />
      <Forms />
      <ContributorSection contributors={contributors} />
    </>
  );
}
