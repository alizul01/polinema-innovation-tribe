"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputForm } from "~/components/Form/InputForm";
import inputData from "~/data/Idea/Create/inputData";
import { HiInboxStack as Box } from "react-icons/hi2";
import { TipsData } from "~/data/Idea/Create/TipsData";
import TipsButton from "~/parts/Idea/Create/TipsButton";

export default function CreateIdeaPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  return (
    <div
      className={
        "w-full sm:items-center justify-center xl:px-56 gap-12 text-white flex flex-col relative"
      }
    >
      <div className={"flex gap-4 flex-col p-4 sm:max-w-[92rem] w-full"}>
        <div className={"text-center font-bold flex flex-col gap-1 "}>
          <span className={"text-3xl md:text-4xl"}>Create Your Idea</span>
          <span className={"text-purple-600"}>#UnleashYourCreativity</span>
        </div>
        <div className={"flex flex-col md:flex-row gap-2"}>
          <div
            className={
              "w-full p-3 backdrop-blur-lg md:p-8 bg-gray-800 bg-opacity-70 rounded-md"
            }
          >
            <div
              className={
                "flex flex-row items-center justify-center gap-4 animate-bounce"
              }
            >
              <Box fontSize={24} />{" "}
              <h1 className={"text-lg font-bold"}>Sandbox</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={"mt-4"}>
              {inputData.map((data, index) => (
                <InputForm
                  key={index}
                  icon={data.icon}
                  label={data.label}
                  placeholder={data.placeholder}
                  id={data.id}
                  type={data.type}
                  register={register(`${data.id}`)}
                />
              ))}

              <input
                className={
                  "focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 my-6 bg-purple-600 hover:bg-purple-600 focus:ring-purple-900"
                }
                type={"submit"}
              />
            </form>
          </div>
          <div
            className={
              "p-2 bg-slate-800 hover:ring-purple-600 transition-all ease-in-out duration-500 rounded-md flex flex-col sticky top-16 gap-6 md:w-[35%] h-full hover:ring-2"
            }
          >
            <div>
              <h1 className={"font-bold text-xl mt-4 text-center w-full"}>
                Pro Tips!
              </h1>
            </div>
            <div id={"mainContent"} className={"flex flex-col gap-3 "}>
              {TipsData.map((data) => (
                <TipsButton key={data.name} name={data.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
