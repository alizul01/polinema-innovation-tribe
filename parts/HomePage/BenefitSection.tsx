import React from "react";
import Card from "~/components/Card";
import UserGroup from "~icons/heroicons/user-group-solid";
import LightBulb from "~icons/heroicons/light-bulb-solid";
import Book from "~icons/heroicons/book-open-solid";

type cardType = {
  icon: React.ReactElement;
  title: string;
  desc: string;
};

const benefits: cardType[] = [
  {
    icon: <UserGroup />,
    title: "Collaboration",
    desc: "You will have the opportunity to learn and grow alongside a talented and innovative team",
  },
  {
    icon: <LightBulb />,
    title: "Learning and Growth",
    desc: "Opportunity to learn and grow alongside a talented and innovative team",
  },
  {
    icon: <Book />,
    title: "Information Access",
    desc: "Access to a wealth of information, including updates on various competitions and opportunities",
  },
];

const BenefitSection: React.FC = () => {
  return (
    <section
      className="w-full py-12 gap-3 flex flex-col items-center justify-center"
      id="benefit"
    >
      <div className="gradient-02 -z-40 absolute h-[40%] w-[40%] right-0 md:opacity-30 rounded-full" />
      <div className="max-w-4xl z-10 text-center flex flex-col gap-3">
        <div>
          <p className="font-semibold text-purple-400 text-sm md:text-lg">
            Exclusive Experience
          </p>
          <h1 className="font-bold text-2xl md:text-5xl text-white">
            New Experience For You!
          </h1>
        </div>
        <p className="font-light text-sm text-slate-100">
          There is a lot of new experience and features that you will get!
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row z-30">
        {benefits.map((benefit) => (
          <Card card={benefit} key={benefit.title} />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
