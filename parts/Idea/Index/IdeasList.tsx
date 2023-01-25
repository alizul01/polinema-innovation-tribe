import { IdeaCard, IdeaCardProps } from "./IdeaCard";

type IdeasListProps = {
  ideas: IdeaCardProps[];
};

export function IdeasList(props: IdeasListProps) {
  return (
    <div className="flex flex-col gap-6 max-w-screen-md mx-auto mt-8">
      <div className={"flex flex-row items-center justify-between"}>
        <span className="text-2xl text-slate-100 font-medium">Discover Ideas</span>
      </div>
      {props.ideas.map((idea) => (
        <IdeaCard key={idea.id} {...idea} />
      ))}
    </div>
  );
}
