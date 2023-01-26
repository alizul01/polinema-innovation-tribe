/* eslint-disable react/display-name */
import Link from "next/link";
import React from "react";
import AuthForm from "~/parts/Authentication/AuthForm";

const RegisterPage: React.FC = React.memo(() => {
  return (
    <section className={"h-screen flex justify-center items-center"}>
      <AuthForm name={"Register"} />
    </section>
  );
});

export default RegisterPage;
