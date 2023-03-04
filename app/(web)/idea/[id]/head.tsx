import { Seo } from "~/components/Seo";
import { IDEAS } from "~/data/Idea/Index/ideas";
import type { Idea } from "~/types/Idea/Index/Idea";

type IdeaMeta = {
  params: {
    id: string;
  };
};

export default function Head({ params }: IdeaMeta) {
  const props: Idea = IDEAS.filter((value) => value.id == params.id)[0];
  return <Seo seoData={{ title: props.title }} />;
}
