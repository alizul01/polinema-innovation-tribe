import { AuthForm } from "~/parts/Authentication";

export default function RegisterPage() {
  return (
    <section className="h-screen flex justify-center items-center">
      <AuthForm name="Register" />
    </section>
  );
}
