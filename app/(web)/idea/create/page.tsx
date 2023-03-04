"use client";

import IdeaForm from "~/parts/Idea/Create/IdeaForm";

export default function CreateIdeaPage() {
  return (
    <div className="w-full sm:items-center justify-center xl:px-56 gap-12 text-gray-200 flex flex-col relative">
      <div className="flex gap-4 flex-col p-2 max-w-screen-md w-full">
        <div className="text-start font-bold flex flex-col gap-1">
          <h4 className="text-start md:text-start md:text-base text-sm text-purple-400 font-semibold capitalize pb-2">
            Idea Creation
          </h4>
          <h1 className="text-4xl text-gray-200 font-extrabold text-start md:text-start">
            Create Your Idea
          </h1>
        </div>
        <IdeaForm />
      </div>
    </div>
  );
}
