import React from "react";
import Hero from "~/parts/HomePage/Hero";
import ContributorSection from "~/parts/HomePage/ContributorSection";
import BenefitSection from "~/parts/HomePage/BenefitSection";
import Step from "~/parts/HomePage/Step/Step";
import Forms from "~/parts/HomePage/Forms";

type Contributor = {
  name: string,
  avatarUrl: string,
  githubUrl: string,
  jobDesc: string,
}

const contributors: Contributor[] = [
  {
    name: 'Ali Zulfikar',
    avatarUrl: 'https://avatars.githubusercontent.com/u/62384197?v=4',
    githubUrl: 'https://github.com/alizul01',
    jobDesc: 'Owner & Front-end'
  },
  {
    name: 'Elianiva',
    avatarUrl: 'https://avatars.githubusercontent.com/u/51877647?v=4',
    githubUrl: 'https://github.com/elianiva',
    jobDesc: 'Front-end'
  },
  {
    name: 'Fitrah Rahmadhani',
    avatarUrl: 'https://media.licdn.com/dms/image/D5603AQH03DfNua6WrQ/profile-displayphoto-shrink_800_800/0/1671933716567?e=1678320000&v=beta&t=kDarRHWXamjROEShORFBk2gS1saN73siU496fPt1iEQ',
    githubUrl: 'https://github.com/fitrahRahmadhani',
    jobDesc: 'Logo Designer'
  }
];


export default function HomePage() {
  return (
    <div>
      <Hero />
      <BenefitSection />
      <Step />
      <Forms />
      <ContributorSection contributors={contributors} />
    </div>
  );
}
