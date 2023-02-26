"use client"
import COMPETITION from "~/data/competition/Competition";
import TAGS from "~/data/competition/Tags";
import CompetitionList from "~/parts/Competition/CompetitionList";
import Header from "~/parts/Competition/Header"
import TagList from '../../../parts/Idea/Index/TagList';

export default function CompetitionPage() {
  return (
    <div>
      <section className="w-full h-full pt-1 md:pt-8 relative">
        <Header />
        <TagList tags={TAGS} />
        <CompetitionList competition={COMPETITION} />
      </section>
    </div>
  );
}
