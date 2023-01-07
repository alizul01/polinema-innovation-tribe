import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { TagList } from "./components/TagList";
import { TAGS } from "./fake-data";

export default function IdeaPage() {
  return (
    <section className="w-full h-full pt-1 md:pt-8 relative">
      <div className="gradient-01 -z-[99] absolute h-[50%] w-[50%] inset-0 opacity-30 rounded-full" />
      <Header />
      <SearchInput />
      <TagList tags={TAGS} />
    </section>
  );
}
