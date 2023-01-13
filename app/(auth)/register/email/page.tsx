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
          {/* <div className="w-1/2 mr-1">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="first_name"
              type="text"
              placeholder="Your first name"
            />
          </div> */}
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
      {/* <div className="text-sm font-medium text-purple-200">
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
      /> */}
    </form>
  );
};
const EmailPage = () => {
  return (
    <section className={"h-screen flex justify-center items-center"}>
      <RegisterForm />
      {/* <form
        className={
          "space-y-6 w-[80%] md:w-[70%] lg:w-[80%] rounded-lg flex flex-col justify-center items-center"
        }
      >
        <Link
          href={"/"}
          className={"flex gap-1 items-center text-center text-blue-400"}
        >
          <ArrowLeft /> Back
        </Link>
        <div className={"relative w-fit"}>
          <div
            className={
              "rounded-full absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-75"
            }
          />
          <div
            className={
              "p-3 rounded-full bg-gradient-to-r from-slate-800 to-gray-900 relative"
            }
          >
            <PolitribeLogo className="w-8 h-8" />
          </div>
        </div>
        <div className={"text-center"}>
          <h4 className={"text-blue-300 font-regular text-md"}>Welcome to</h4>
          <h1 className={"text-white text-xl font-bold"}>
            Polinema Innovation Tribe
          </h1>
        </div>
        <div className={"w-full space-y-3"}></div>
        <div className="text-sm font-medium text-purple-200">
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
      </form> */}
    </section>
  );
};

export default EmailPage;
