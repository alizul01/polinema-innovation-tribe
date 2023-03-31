"use client";

import IdeaSidebar from "~/parts/Idea/Details/IdeaSidebar";
import IdeaContent from "~/parts/Idea/Details/IdeaContent";
import { useIdeaById } from "~/services/idea/idea-by-id";

type IdeaPageProps = {
  params: {
    id: string;
  };
};

export default function IdeaPage({ params }: IdeaPageProps) {
  const { data: idea } = useIdeaById(params.id);
  if (idea === null || idea === undefined) return null;

  return (
    <div className="w-full justify-center items-center xl:px-56 text-gray-200 flex flex-col lg:flex-row">
      <IdeaContent key={idea.id} {...idea} />
      <IdeaSidebar {...idea} />
    </div>
  );
}
