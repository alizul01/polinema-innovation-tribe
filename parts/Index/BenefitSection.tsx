import { Card, CardDetail } from "~/components/Card";
import {
  HiUserGroup as UserGroupIcon,
  HiBookOpen as BookIcon,
  HiLightBulb as LightBulbIcon,
} from "react-icons/hi2";

const BENEFITS: CardDetail[] = [
  {
    icon: <UserGroupIcon />,
    title: "Collaboration",
    desc: "You will have the opportunity to learn and grow alongside a talented team",
  },
  {
    icon: <LightBulbIcon />,
    title: "Learning and Growth",
    desc: "Opportunity to learn and grow alongside a talented and innovative team",
  },
  {
    icon: <BookIcon />,
    title: "Information Access",
    desc: "Access to a wealth of information, including updates on various competitions",
  },
];

export default function BenefitSection() {
  return (
    <section
      className="w-full py-6 gap-3 flex flex-col items-center max-w-7xl mx-auto"
      id="benefit"
    >
      <div className="gradient-02 -z-40 absolute h-[30%] w-[30%] right-0 md:opacity-30 rounded-full" />
      <div className="flex flex-col gap-6 md:flex-row z-30 mt-8 justify-between w-full">
        {BENEFITS.map((benefit) => (
          <Card key={benefit.title} {...benefit} />
        ))}
      </div>
    </section>
  );
}
