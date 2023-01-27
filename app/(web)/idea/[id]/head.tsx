import Seo from "~/components/Seo";
import React from "react";

type ideaMeta = {
  params: {
    id: string;
  };
};

const head: React.FC<ideaMeta> = ({ params }) => {
  return (
    <>
      <Seo seoData={{ title: params.id }} />
    </>
  );
};

export default head;
