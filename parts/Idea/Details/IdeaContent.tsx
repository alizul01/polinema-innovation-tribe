import React from "react";
import type { Idea } from "~/types/Idea/Index/Idea";
import IdeaHeader from "~/parts/Idea/Details/IdeaHeader";

const Content = (props: Idea) => {
  return (
    <div className={"max-w-4xl p-1 lg:sticky lg:top-0 w-[100%] lg:w-[80%]"}>
      <div className={"rounded-md p-4 flex flex-col gap-6"}>
        <IdeaHeader {...props} />
        <h1 className={"text-2xl md:text-5xl font-bold text-white"}>
          {props.title}
        </h1>
        <div id={"description"} className={"flex flex-col gap-3"}>
          <h3 className={"text-2xl font-bold text-white"}>Idea Description</h3>
          <p className={"text-lg text-white first-letter:text-2xl"}>
            {props.description}
          </p>
        </div>{" "}
        {/* Component MainContent, diloop */}
      </div>
    </div>
  );
};

export default Content;
