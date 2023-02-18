import { AuthForm } from "~/parts/Authentication";

export default function LoginPage() {
  return (
    <>
      <section className={"h-screen flex justify-center items-center"}>
        <AuthForm name={"Login"} />
      </section>
    </>
  );
}
