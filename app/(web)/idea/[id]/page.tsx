import React from "react";
import { IDEAS } from "~/data/Idea/Index/ideas";
import Content from "~/parts/Idea/Details/IdeaContent";
import type { ideaSlug } from "~/types/Idea/Details/IdeaSlug";
import type { Idea } from "~/types/Idea/Index/Idea";
import Sidebar from "~/parts/Idea/Details/IdeaSidebar";

const Page: React.FC<ideaSlug> = ({ params }) => {
  const props: Idea = IDEAS.filter((value) => value.id == params.id)[0];
  return (
    <div
      className={
        "w-full justify-center items-center xl:px-56 text-gray-200 flex flex-col lg:flex-row"
      }
    >
      <Content key={props.id} {...props} />
      <Sidebar {...props} />
    </div>
  );
};

export default Page;