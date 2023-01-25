"use client";

/* eslint-disable react/display-name */
import Link from "next/link";
import type { MouseEvent } from "react";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import GoogleIcon from "~/public/icon/ic_google-icon.svg";
import PolitribeLogo from "~/public/icon/ic_politribe-logo.svg";
import TermsSection from "~/parts/Authentication/Terms-Section";
import ArrowLeft from "~icons/heroicons/arrow-left-circle-solid";
import UserIcon from "~icons/heroicons/user-solid";
import AuthForm from "~/parts/Authentication/AuthForm";
import React from "react";

export default function LoginPage() {
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
    <>
      <section className={"h-screen flex justify-center items-center"}>
        <AuthForm name={"Login"} />
      </section>
    </>
  );
}
