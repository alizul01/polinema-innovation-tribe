"use client";

import React from "react";
import TermsSection from "~/parts/Authentication/Terms-Section";
import FormHeader from "~/components/Form/FormHeader";
import AuthOption from "~/components/Form/AuthOption";
import AuthLoginForm from "~/parts/Authentication/AuthLoginForm";

export default function Login() {
  return (
    <div className="w-full h-fit lg:h-screen py-4 px-2 flex flex-col gap-4 justify-center items-center">
      <FormHeader title={"Login to"} backTo={"/login"} />
      <AuthLoginForm />
      <AuthOption ask={"Not Yet"} />
      <TermsSection title={"Register"} />
    </div>
  );
}
