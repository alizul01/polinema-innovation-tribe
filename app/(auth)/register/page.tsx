/* eslint-disable react/display-name */
import Link from "next/link";
import React from "react";
import GoogleIcon from "~/icons/ic_google-icon.svg";
import PolitribeLogo from "~/icons/ic_politribe-logo.svg";
import TermsSection from "~/parts/auth/Terms-Section";
import ArrowLeft from "~icons/heroicons/arrow-left-circle-solid";
import UserIcon from "~icons/heroicons/user-solid";

const RegisterPage: React.FC = React.memo(() => {
  return (
    <section className={"h-screen flex justify-center items-center"}>
      <div className={"gradient-01 -z-99 absolute h-[50%] w-[50%] inset-0 opacity-100 md:opacity-20 rounded-full"} />
       <form className={"space-y-6 w-[80%] md:w-[70%] lg:w-[20%] rounded-lg flex flex-col justify-center items-center"}>
         <Link href={"/"} className={"flex gap-1 items-center text-center text-blue-400"}>
           <ArrowLeft /> Back
         </Link>
         <div className={"relative w-fit"}>
           <div className={"rounded-full absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-75"} />
           <div className={"p-3 rounded-full bg-gradient-to-r from-slate-800 to-gray-900 relative"}>
             <PolitribeLogo className="w-8 h-8" />
           </div>
         </div>
         <div className={"text-center"}>
           <h4 className={"text-blue-300 font-regular text-md"}>
             Welcome to
           </h4>
           <h1 className={"text-white text-xl font-bold"}>
             Polinema Innovation Tribe
           </h1>
         </div>
         <div className={"w-full space-y-3"}>
           <button className={"flex w-full items-center justify-center space-x-2 text-white bg-slate-800 p-3 rounded-sm"}>
             <GoogleIcon />
             <a className={"text-regular text-sm"}>
               Register with Google
             </a>
           </button>
           <button className={"flex w-full items-center justify-center space-x-2 text-white bg-slate-800 p-3 rounded-sm"}>
             <UserIcon />
             <a className={"text-regular text-sm"} href="/email">
               Register with Email
             </a>
           </button>
         </div>
        <div className="text-sm font-medium text-purple-200">
          Already registered? <Link href="/login" className="hover:underline text-purple-400">Login</Link>
        </div>
         <TermsSection title={"Register"} />
         <div className={"gradient-02 -z-40 absolute h-[40%] w-[40%] right-0 md:opacity-20 rounded-full"} />
      </form>
    </section>
  )
})

export default RegisterPage