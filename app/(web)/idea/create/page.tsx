"use client";

import React from "react";
import Header from "~/parts/Idea/Create/CreateHeader";
import IdeaForm from "~/parts/Idea/Create/IdeaForm";

export default function CreateIdeaPage() {
  return (
    <div
      className={
        "w-full sm:items-center justify-center xl:px-56 gap-12 text-white flex flex-col relative"
      }
    >
      <div className={"flex gap-4 flex-col p-2 sm:max-w-[92rem] w-full"}>
        <Header title={"Create Your Idea"} slogan={"#UnleashYourCreativity"} />
        <IdeaForm />
      </div>
    </div>
  );
}
