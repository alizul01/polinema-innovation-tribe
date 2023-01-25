"use client"
import React, {MouseEvent} from 'react';
import Link from "next/link";
import GoogleIcon from "~/public/icon/ic_google-icon.svg";
import PolitribeLogo from "~/public/icon/ic_politribe-logo.svg";
import TermsSection from "~/parts/Authentication/Terms-Section";
import ArrowLeft from "~icons/heroicons/arrow-left-circle-solid";
import UserIcon from "~icons/heroicons/user-solid";
import type {AuthFormType} from "~/types/Authentication/AuthFormType";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";

const AuthForm: React.FC<AuthFormType> = ({name}) => {
  const {supabase} = useSupabase();
  async function handleGoogleLogin(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error !== null) {
      console.log({ error });
    }
  }
  return (
    <>
      <form className={"space-y-6 w-72 lg:w-80 p-2 rounded-lg flex flex-col justify-center items-center"}>
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
            {name == "Register" ? "Welcome to" : "Welcome back to"}
          </h4>
          <h1 className={"text-white text-xl font-bold"}>
            Polinema Innovation Tribe
          </h1>
        </div>
        <div className={"w-full space-y-3"}>
          <button className={"flex w-full items-center justify-center space-x-2 text-white bg-slate-800 hover:bg-slate-700 hover:scale-95 transition-all ease-in-out duration-500 focus:ring-3 focus:ring-blue-700 p-2.5 rounded-md"} onClick={handleGoogleLogin}>
            <GoogleIcon />
            <a className={"text-sm font-normal"}>
              {name} with Google
            </a>
          </button>
          <button className={"flex w-full items-center justify-center space-x-2 text-white bg-slate-800 hover:bg-slate-700 hover:scale-95 transition-all ease-in-out duration-500 focus:ring-3 focus:ring-blue-700 p-2.5 rounded-md"}>
            <UserIcon />
            <Link className="text-sm font-normal" href={name == "Register" ? "/register/email" : "/login/email"}>
              {name} with Email
            </Link>
          </button>
        </div>
        <div className="text-sm font-medium text-purple-200">
          { name == "Register" ? (
            <span>Already registered</span>
        ) : (
          <span>Don't have Account yet</span>
        )}? <Link href={name == "Register" ? "/login" : "/register"} className="hover:underline text-purple-400">
          {name == "Register" ? "Login" : "Register"}
        </Link>
        </div>
        <TermsSection title={name} />
      </form>
    </>
  );
}

export default AuthForm;