"use client";

/* eslint-disable react/display-name */
import React, { type MouseEvent } from "react";
import Link from "next/link";
import TermsSection from "~/parts/auth/Terms-Section";
import PolitribeLogo from "~/icons/ic_politribe-logo.svg";
import GoogleIcon from "~/icons/ic_google-icon.svg";
import { useSupabase } from "~/components/SupabaseProvider";
import UserIcon from "~icons/heroicons/user-solid";
import ArrowLeft from "~icons/heroicons/arrow-left-circle-solid";

export default function LoginPage() {
  const { supabase } = useSupabase();

  async function handleGoogleLogin(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin
      }
    });

    if (error !== null) {
      console.log({ error });
    }
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="gradient-01 -z-99 absolute h-[50%] w-[50%] inset-0 opacity-100 md:opacity-20 rounded-full" />
      <form className="space-y-6 w-[80%] md:w-[70%] lg:w-[20%] rounded-lg flex flex-col justify-center items-center z-10">
        <Link
          href="/"
          className="flex gap-1 items-center text-center text-blue-400"
        >
          <ArrowLeft /> Back
        </Link>
        <Link href="/">
          <div className="relative w-fit">
            <div className="rounded-full absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 blur opacity-75" />
            <div className="p-3 rounded-full bg-gradient-to-r from-slate-800 to-gray-900 relative">
              <PolitribeLogo className="w-8 h-8" />
            </div>
          </div>
        </Link>
        <div className="text-center">
          <h4 className="text-blue-300 font-regular text-md">
            Welcome back to
          </h4>
          <h1 className="text-white text-xl font-bold">
            Polinema Innovation Tribe
          </h1>
        </div>
        <div className="w-full space-y-3">
          <button
            className="flex w-full items-center justify-center space-x-2 text-white bg-slate-800 p-3 rounded-sm"
            onClick={handleGoogleLogin}
          >
            <GoogleIcon />
            <a className="text-regular text-sm">Login with Google</a>
          </button>
          <button className="flex w-full items-center justify-center space-x-2 text-white bg-slate-800 p-3 rounded-sm">
            <UserIcon />
            <a className="text-regular text-sm">Login with Email</a>
          </button>
        </div>
        <div className="text-sm font-medium text-purple-200">
          Not Registered Yet?
          <Link href="/register" className="hover:underline text-purple-400">
            Register Now!
          </Link>
        </div>
        <TermsSection title="Login" />
        <div className="gradient-02 -z-40 absolute h-[40%] w-[40%] right-0 md:opacity-20 rounded-full" />
      </form>
    </section>
  );
}
