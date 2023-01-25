import { Header } from "~/parts/Idea/Index/Header";
import { IdeasList } from "~/parts/Idea/Index/IdeasList";
import { SearchInput } from "~/parts/Idea/Index/SearchInput";
import { TagList } from "~/parts/Idea/Index/TagList";
import { IDEAS } from "~/data/Idea/Index/ideas";
import { TAGS } from "~/data/Idea/Index/tags";

export default function IdeaPage() {
  return (
    <section className="w-full h-full pt-1 md:pt-8 relative">
      <div className="gradient-01 -z-[99] absolute h-[50%] w-[50%] inset-0 opacity-20 rounded-full" />
      <Header />
      <SearchInput />
      <TagList tags={TAGS} />
      <IdeasList ideas={IDEAS} />
    </section>
  );
}
