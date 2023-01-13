import Link from "next/link";
import TermsSection from "~/parts/auth/Terms-Section";

/* eslint-disable react/display-name */
const MyField = (props: { placeHolder: string; name: string }) => {
  return (
    // flex items-center h-fit mx-auto
    <div className="">
      <input
        name={props.name}
        className=" px-4 py-2 rounded-full border border-slate-300/25 bg-slate-700/25 outline-none border-wthie w-full text-white placeholder:text-slate-500"
        placeholder={props.placeHolder}
        type={props.name == "password" ? 'password' : 'text'}
      />
    </div>
  );
};
const RegisterForm = () => {
  return (
    <form className="mx-auto rounded shadow md:w-[50%] p-8 w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border">
      <h1 className={"text-white text-xl font-bold px-8"}>
        Register
      </h1>
      <div className="py-4 px-8">
        <div className="flex mb-4">
          <div className="w-1/2 mr-1">
            <MyField name="firstName" placeHolder="First Name" />
          </div>
          <div className="w-1/2 ml-1">
            <MyField name="lastName" placeHolder="Last Name" />
          </div>
        </div>
        <div className="mb-4">
          <MyField name="email" placeHolder="Email address" />
        </div>
        <div className="mb-4">
          <MyField name="password" placeHolder="Password" />
        </div>
          <button
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Sign Up
          </button>
        <div className="flex items-center justify-between mt-8">
        </div>
        <div className="text-sm font-medium text-purple-200 text-center">
          Already registered?{" "}
          <Link href="/login" className="hover:underline text-purple-400">
            Login
          </Link>
        </div>
        <TermsSection title={"Register"} />
        <div
          className={
            "gradient-02 -z-40 absolute h-[40%] w-[40%] right-0 md:opacity-20 rounded-full"
          }
        />
      </div>
    </form>
  );
};
const EmailPage = () => {
  return (
    <section className={"h-screen flex justify-center items-center"}>
      <RegisterForm />
    </section>
  );
};

export default EmailPage;