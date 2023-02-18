"use client";
import { Header } from "~/parts/Idea/Index/Header";
import { SearchInput } from "~/parts/Idea/Index/SearchInput";
import { TagList } from "~/parts/Idea/Index/TagList";
import { TAGS } from "~/data/Idea/Index/tags";
import { IdeasList } from "~/parts/Idea/Index/IdeasList";
import { IDEAS } from "~/data/Idea/Index/ideas";
import { selectIdea } from "~/services/idea/select-idea";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import Link from "next/link";

export default function IdeaPage() {
  const { supabase, session } = useSupabase();
  const onMount = async () => {
    const { data, error } = await selectIdea(supabase);
    console.log({ data, error });
  };
  onMount()
    .then(() => {
      console.log("done");
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <section className="w-full h-full pt-1 md:pt-8 relative">
      <Header />
      {session !== null ? (
        <>
          <SearchInput />
          <TagList tags={TAGS} />
          <IdeasList ideas={IDEAS} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center pt-24">
          <Link
            href="/login"
            className="text-base font-bold text-gray-200 btn bg-purple-500 hover:bg-purple-600"
          >
            Please sign in
          </Link>
        </div>
      )}
    </section>
  );
}
