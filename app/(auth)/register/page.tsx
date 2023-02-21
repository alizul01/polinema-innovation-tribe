"use client"
import AuthForm from "~/parts/Authentication/AuthForm";

export default function RegisterPage() {
  return (
    <section className="h-screen flex justify-center items-center">
      <AuthForm name="Register" />
    </section>
  );
}
