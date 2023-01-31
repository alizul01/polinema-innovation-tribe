import React from "react";
import { HiInboxStack as Box } from "react-icons/hi2";
import inputData from "~/data/Idea/Create/inputData";
import { InputForm } from "~/components/Form/InputForm";
import { SubmitHandler, useForm } from "react-hook-form";
import ProTips from "~/parts/Idea/Create/ProTips";
import {useSupabase} from "~/components/Supabase/SupabaseProvider";
import type {Idea} from "~/types/Idea/Index/Idea";
import type {definitions} from "~/generated-types";

export type IdeaBox = definitions['idea_boxes'];


function IdeaForm() {
  const { register, handleSubmit } = useForm();
  const { session, supabase } = useSupabase();

  const onSubmit: SubmitHandler<any> = (values) => {
  //   const { data, error } = await supabase
  //     .from("idea_boxes")
  //     .insert<IdeaBox>([
  //       {
  //         id: crypto.randomUUID(),
  //         title: values.title,
  //         problem: values.problem,
  //         solution: values.solution,
  //         whatsapp: values.whatsapp,
  //         username: session?.user.id,
  //         email: values.email,
  //         description: values.description
  //       },
  //     ]);
    console.log(values);
  };

  return (
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
          <Box fontSize={24} /> <h1 className={"text-lg font-bold"}>Sandbox</h1>
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

          <input className={"btn btn-primary"} type={"submit"} />
        </form>
      </div>
      <ProTips />
    </div>
  );
}

export default IdeaForm;
