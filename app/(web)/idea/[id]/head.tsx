import Seo from "~/components/Seo";
import React from "react";
import { IDEAS } from '~/data/Idea/Index/ideas';
import type { Idea } from '~/types/Idea/Index/Idea';

type ideaMeta = {
  params: {
    id: number;
  };
};

const head: React.FC<ideaMeta> = ({ params }) => {
  const props: Idea = IDEAS.filter((value) => value.id == params.id)[0];
  return (
    <>
      <Seo seoData={{ title: props.title }} />
    </>
  );
};

export default head;
