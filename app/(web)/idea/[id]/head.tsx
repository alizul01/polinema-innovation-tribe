import { Seo } from "~/components/Seo";
import { useIdeas } from "~/services/idea/all-ideas";

type IdeaMeta = {
  params: {
    id: string;
  };
};

export default function Head({ params }: IdeaMeta) {
  return <Seo seoData={{ title: "Idea" }} />;
}
