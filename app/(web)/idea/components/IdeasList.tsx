import { IdeaCard, IdeaCardProps } from "./IdeaCard";

type IdeasListProps = {
  ideas: IdeaCardProps[];
};

export function IdeasList(props: IdeasListProps) {
  return (
    <div className="flex flex-col gap-6 max-w-screen-md mx-auto mt-8">
      <span className="text-2xl text-slate-100 font-medium">Popular Ideas</span>
      {props.ideas.map((idea) => (
        <IdeaCard key={idea.id} {...idea} />
      ))}
    </div>
  );
}
