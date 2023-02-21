import { IDEAS } from "~/data/Idea/Index/ideas";
import IdeaSidebar from "~/parts/Idea/Details/IdeaSidebar";
import IdeaContent from "~/parts/Idea/Details/IdeaContent";

type IdeaPageProps = {
  params: {
    id: number;
  };
};

export default function IdeaPage({ params }: IdeaPageProps) {
  const props = IDEAS.find((value) => value.id == params.id);
  if (props === undefined) return null;

  return (
    <div className="w-full justify-center items-center xl:px-56 text-gray-200 flex flex-col lg:flex-row">
      <IdeaContent key={props.id} {...props} />
      <IdeaSidebar {...props} />
    </div>
  );
}
