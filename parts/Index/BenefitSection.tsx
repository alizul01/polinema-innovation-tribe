import React from "react";
import Card from "~/components/Card";
import { HiUserGroup as UserGroup, HiBookOpen as Book, HiLightBulb as LightBulb } from "react-icons/hi2";

type cardType = {
  icon: React.ReactElement;
  title: string;
  desc: string;
};

const benefits: cardType[] = [
  {
    icon: <UserGroup />,
    title: "Collaboration",
    desc: "You will have the opportunity to learn and grow alongside a talented team",
  },
  {
    icon: <LightBulb />,
    title: "Learning and Growth",
    desc: "Opportunity to learn and grow alongside a talented and innovative team",
  },
  {
    icon: <Book />,
    title: "Information Access",
    desc: "Access to a wealth of information, including updates on various competitions",
  },
];

const BenefitSection: React.FC = () => {
  return (
    <section
      className="w-full py-6 gap-3 flex flex-col items-center max-w-7xl mx-auto"
      id="benefit"
    >
      <div className="gradient-02 -z-40 absolute h-[30%] w-[30%] right-0 md:opacity-30 rounded-full" />
      <div className="flex flex-col gap-6 md:flex-row z-30 mt-8 justify-between w-full">
        {benefits.map((benefit) => (
          <Card card={benefit} key={benefit.title} />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
