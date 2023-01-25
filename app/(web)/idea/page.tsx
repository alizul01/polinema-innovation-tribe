import {Header} from "~/parts/Idea/Index/Header";
import {SearchInput} from "~/parts/Idea/Index/SearchInput";
import {TagList} from "~/parts/Idea/Index/TagList";
import {TAGS} from "~/data/Idea/Index/tags";
import {IdeasList} from "~/parts/Idea/Index/IdeasList";
import {IDEAS} from "~/data/Idea/Index/ideas";

export default function IdeaPage() {
  return (
    <section className="w-full h-full pt-1 md:pt-8 relative">
      <Header />
      <SearchInput />
      <TagList tags={TAGS} />
      <IdeasList ideas={IDEAS} />
    </section>
  );
}
