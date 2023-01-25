"use client"

import React, {useState} from "react"
import {SubmitHandler, useForm} from "react-hook-form";
import {InputFormTest} from "~/components/Form/InputForm";
import AuthRegister from "~/data/Auth/AuthRegister";
import {useSupabase} from "~/components/Supabase/SupabaseProvider";
import TermsSection from "~/parts/Authentication/Terms-Section";
import Link from "next/link";
import ArrowLeft from "~icons/heroicons/arrow-left-circle-solid";
import PolitribeLogo from "~/public/icon/ic_politribe-logo.svg";
import AuthLogin from "~/data/Auth/AuthLogin";

type loginType = {
  email: string,
  password: string,
}

const Login: React.FC = () => {

  const {supabase} = useSupabase();
  const [getEmail, setEmail] = useState(" ");
  const {register, formState: {errors}, handleSubmit, watch} = useForm();
  const onSubmit: SubmitHandler<any> = async (item: loginType) => {
    console.log(item)
    let {data, error} = await supabase.auth.signInWithPassword({
      email: item.email,
      password: item.password
    })
  };
  return (
    <div className={"w-full h-fit lg:h-screen py-4 px-2 flex flex-col gap-4 justify-center items-center"}>
      <Link href={"/login"} className={"flex gap-1 items-center text-center text-blue-400"}>
        <ArrowLeft/> Back
      </Link>
      <div className={"relative w-fit"}>
        <div
          className={"rounded-full absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-75"}/>
        <div className={"p-3 rounded-full bg-gradient-to-r from-slate-800 to-gray-900 relative"}>
          <PolitribeLogo className="w-8 h-8"/>
        </div>
      </div>
      <div className={"text-center"}>
        <h4 className={"text-blue-300 font-regular text-md"}>
          Login to
        </h4>
        <h1 className={"text-white text-xl font-bold"}>
          Polinema Innovation Tribe
        </h1>
      </div>
      <div className={"fixed text-white bg-red-900"}>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={"mt-4 max-w-md flex flex-wrap"}>
        {AuthLogin.map((data, index) => (
          <InputFormTest key={index} label={data.label} placeholder={data.placeholder} id={data.id}
                         type={data.type} register={register(`${data.id}`)} width={data?.width}/>
        ))}
        <input
          className={"focus:outline-none flex w-full text-center justify-center items-center cursor-pointer text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 my-6 bg-purple-600 hover:bg-purple-700 transition-all duration-500 ease-in-out hover:scale-95 focus:ring-purple-900"}
          type={"submit"}/>
        <p className={"text-center w-full font-semibold text-white"}>
          Already Registered? <Link href={"/login"} className={"text-purple-500 hover:text-purple-600"}>Login</Link>
        </p>
        <TermsSection title={"Register"}/>
      </form>
    </div>
  )
}

export default Login