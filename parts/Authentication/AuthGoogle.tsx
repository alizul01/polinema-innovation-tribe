import React, {MouseEvent} from 'react';
import GoogleIcon from "~/public/icon/ic_google-icon.svg";
import Link from "next/link";
import {HiUser as UserIcon} from "react-icons/hi2";
import {useSupabase} from "~/components/Supabase/SupabaseProvider";
import type {AuthFormType} from "~/types/Authentication/AuthFormType";

const AuthGoogle: React.FC<AuthFormType> = ({ name }) => {
  const { supabase } = useSupabase();
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
    <div className={"w-full space-y-3"}>
      <button
        className={
          "flex w-full items-center justify-center space-x-2 text-white bg-slate-800 hover:bg-slate-700 hover:scale-95 transition-all ease-in-out duration-500 focus:ring-3 focus:ring-blue-700 p-2.5 rounded-md"
        }
        onClick={handleGoogleLogin}
      >
        <GoogleIcon />
        <a className={"text-sm font-normal"}>{name} with Google</a>
      </button>
      <Link
        href={name == "Register" ? "/register/email" : "/login/email"}
        className="flex w-full items-center justify-center space-x-2 text-white bg-slate-800 hover:bg-slate-700 hover:scale-95 transition-all ease-in-out duration-500 focus:ring-3 focus:ring-blue-700 p-2.5 rounded-md"
      >
        <UserIcon />
        <span className="text-sm font-normal">{name} with Email</span>
      </Link>
    </div>
  );
}

export default AuthGoogle;