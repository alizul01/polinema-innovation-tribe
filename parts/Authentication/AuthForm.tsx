"use client";
import React from "react";
import TermsSection from "~/parts/Authentication/Terms-Section";
import type { AuthFormType } from "~/types/Authentication/AuthFormType";
import FormHeader from "~/components/Form/FormHeader";
import AuthOption from "~/components/Form/AuthOption";
import AuthGoogle from "~/parts/Authentication/AuthGoogle";

const AuthForm: React.FC<AuthFormType> = ({ name }) => {
  const authOption = name == "Register" ? "Registered" : "Not Yet";
  return (
    <>
      <form className={"space-y-6 w-72 lg:w-80 p-2 rounded-lg flex flex-col justify-center items-center"}>
        <FormHeader title={`${name} To`} backTo={"/"} />
        <AuthGoogle name={name}  />
        <AuthOption ask={authOption} />
        <TermsSection title={name} />
      </form>
    </>
  );
};

export default AuthForm;
