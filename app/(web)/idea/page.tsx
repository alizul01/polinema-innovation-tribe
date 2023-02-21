"use client"
import Link from "next/link";
import Header from "~/parts/Idea/Index/Header";
import SearchInput from "~/parts/Idea/Index/SearchInput";
import TagList from "~/parts/Idea/Index/TagList";
import IdeasList from "~/parts/Idea/Index/IdeasList";
import { TAGS, IDEAS } from "~/data/Idea/Index";
import { useSupabase } from "~/components/Supabase";

export default function IdeaHomePage() {
  const { session } = useSupabase();

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
