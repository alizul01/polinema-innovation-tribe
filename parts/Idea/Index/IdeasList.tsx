"use client";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { IdeaCard, IdeaCardProps } from "./IdeaCard";

type IdeasListProps = {
  ideas: IdeaCardProps[];
};

export default function IdeasList(props: IdeasListProps) {
  const { session } = useSupabase();

  return (
    <div className="flex flex-col gap-6 max-w-screen-md mx-auto mt-8">
      <div className={"flex flex-row items-center justify-between"}>
        <span className="text-2xl text-slate-100 font-medium">
          Discover Ideas
        </span>
        <Link href="/idea/create" className="btn btn-primary">
          <FaPlus className="inline text-base" /> Create Idea
        </Link>
      </div>
      {session === null ? (
        <div className={"flex flex-col gap-4 mt-4 justify-center items-center"}>
          <h1 className={"text-gray-200 font-bold text-center text-4xl "}>
            You have to{" "}
            <Link className={"hover:underline"} href={"/login"}>
              Login
            </Link>{" "}
            First to See the Ideas
          </h1>
        </div>
      ) : (
        <div className={"flex flex-col gap-6 mt-2 relative"}>
          {props.ideas.map((idea) => (
            <IdeaCard key={idea.id} {...idea} />
          ))}
        </div>
      )}
    </div>
  );
}
