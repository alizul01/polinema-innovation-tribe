"use client";

import AuthForm from "~/parts/Authentication/AuthForm";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <section className={"h-screen flex justify-center items-center"}>
        <AuthForm name={"Login"} />
      </section>
    </>
  );
}
