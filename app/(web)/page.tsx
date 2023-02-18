import {
  Hero,
  ContributorSection,
  BenefitSection,
  StepsSection,
  ContactForm,
} from "~/parts/Index";
import { contributors } from "~/data/contributor/contributors";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <BenefitSection />
      <StepsSection />
      <ContactForm />
      <ContributorSection contributors={contributors} />
    </div>
  );
}
