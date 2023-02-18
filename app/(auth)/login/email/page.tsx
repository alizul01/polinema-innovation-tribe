import { TermsSection, AuthLoginForm } from "~/parts/Authentication";
import { FormHeader, AuthOption } from "~/components/Form";

export default function EmailLoginPage() {
  return (
    <div className="w-full h-fit lg:h-screen py-4 px-2 flex flex-col gap-4 justify-center items-center">
      <FormHeader title={"Login to"} backTo={"/login"} />
      <AuthLoginForm />
      <AuthOption ask={"Not Yet"} />
      <TermsSection title={"Register"} />
    </div>
  );
}
