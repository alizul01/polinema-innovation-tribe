import React, { useEffect } from "react";
import Hero from "../parts/HomePage/Hero";
import ContributorSection from "~/parts/HomePage/ContributorSection";
import BenefitSection from "~/parts/HomePage/BenefitSection";

const contributors = [
  {
    name: 'Ali Zulfikar',
    avatarUrl: 'https://avatars.githubusercontent.com/u/62384197?v=4',
    githubUrl: 'https://github.com/alizul01',
    jobDesc: 'Initiator & Front-end'
  },
  {
    name: 'Elianiva',
    avatarUrl: 'https://avatars.githubusercontent.com/u/51877647?v=4',
    githubUrl: 'https://github.com/elianiva',
    jobDesc: 'Front-end'
  },
];


export function HomePage() {
  useEffect(() => {
    document.title = "Politribe | Home";
  }, []);

  return (
    <div>
      <Hero />
      <div className={"border-slate-700 border my-12 block w-full"} />
      <BenefitSection />
      <ContributorSection contributors={contributors} />
    </div>
  );
}
