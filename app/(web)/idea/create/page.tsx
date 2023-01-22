"use client"

import React from "react"
import {useForm, SubmitHandler} from "react-hook-form";
import {InputForm} from "~/components/InputForm";
import inputData from "~/app/(web)/idea/create/data/inputData";
import Box from "~icons/heroicons/inbox-stack-solid";
import {TipsData} from "~/app/(web)/idea/create/data/TipsData";
import TipsButton from "~/app/(web)/idea/create/components/TipsButton";
import {QuotesData} from "~/app/(web)/idea/create/data/QuotesData";
import BlockQuote from "~/app/(web)/idea/create/components/BlockQuote";

type Inputs = {
  judul_ide?: string
}

const create: React.FC = () => {
  const {register, formState: {errors}, handleSubmit, watch} = useForm();
  const onSubmit: SubmitHandler<any> = data => console.log(data);
  return (
    <div className={"w-full sm:items-center justify-center xl:px-56 gap-12 text-white flex flex-col relative"}>
      <div className="gradient-01 -z-[99] absolute h-[50%] w-[50%] inset-0 opacity-100 md:opacity-40 rounded-full" />
      <div className="gradient-02 -z-40 absolute h-[40%] w-[40%] right-0 md:opacity-30 rounded-full" />

      <div className={"flex gap-4 flex-col p-4 sm:max-w-[92rem] w-full"}>
        <div className={"text-center font-bold flex flex-col gap-1 "}>
          <span className={"text-3xl md:text-4xl"}>Create Your Idea</span>
          <span className={"text-purple-600"}>#UnleashYourCreativity</span>
        </div>
        <div className={"flex flex-col md:flex-row gap-2"}>
          <div className={"w-full p-3 backdrop-blur-lg md:p-8 bg-slate-700 bg-opacity-70 rounded-md"}>
            <div className={"flex flex-row items-center justify-center gap-4 animate-bounce"}>
              <Box fontSize={24} /> <h1 className={"text-lg font-bold"}>Sandbox</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={"mt-4"}>

              {inputData.map((data, index) => (
                <InputForm key={index} icon={data.icon} label={data.label} placeholder={data.placeholder} id={data.id} type={data.type} register={register(`${data.id}`)} />
                ))}

              <input className={"focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 my-6 bg-purple-600 hover:bg-purple-600 focus:ring-purple-900"} type={"submit"} />
            </form>
          </div>
          <div className={"p-2 bg-slate-600 hover:ring-purple-600 transition-all ease-in-out duration-500 rounded-md flex flex-col sticky top-16 gap-6 md:w-[35%] h-full hover:ring-2"}>
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
  )
}

export default create