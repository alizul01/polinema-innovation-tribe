"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TermsSection from "~/parts/auth/Terms-Section";
// type Inputs = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// };
const schema = z.object({
  firstName: z.string().nonempty({ message: "Required" }),
  lastName: z.string().nonempty({ message: "Required" }),
  email: z
    .string()
    .nonempty({ message: "Required" })
    .email({ message: "Must be valid" }),
  password: z.string().nonempty({ message: "Required" }),
});
const EmailPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    shouldUseNativeValidation: true,
  });
  console.log(errors);
  return (
    <section className={"h-screen flex justify-center items-center flex-col"}>
      <h1 className="font-bold text-2xl md:text-5xl text-white mb-9 border-b-4 border-purple-500 pb-4">
        Create New Account
      </h1>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="mx-auto rounded shadow md:w-[60%] lg:w-[40%] p-8 w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border"
      >
        <div className="py-4 px-8">
          <div className="flex mb-4">
            <div className="w-1/2 mr-1">
              <input
                className=" px-4 py-2 rounded-full border border-slate-300/25 bg-slate-700/25 outline-none border-wthie w-full text-white placeholder:text-slate-500"
                placeholder="first name"
                type={"text"}
                {...register("firstName")}
              />
            </div>
            <div className="w-1/2 ml-1">
              <input
                className=" px-4 py-2 rounded-full border border-slate-300/25 bg-slate-700/25 outline-none border-wthie w-full text-white placeholder:text-slate-500"
                placeholder="last name"
                type={"text"}
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              className=" px-4 py-2 rounded-full border border-slate-300/25 bg-slate-700/25 outline-none border-wthie w-full text-white placeholder:text-slate-500"
              placeholder="Email"
              type={"email"}
              {...register("email")}
            />
          </div>
          <div className="mb-4">
            <input
              className=" px-4 py-2 rounded-full border border-slate-300/25 bg-slate-700/25 outline-none border-wthie w-full text-white placeholder:text-slate-500"
              placeholder="password"
              type={"password"}
              {...register("password")}
            />
          </div>
          <button
            className="rounded-lg bg-purple-500 text-white px-4 py-2.5 font-semibold flex gap-2 justify-center items-center hover:shadow-slate-50 hover:shadow-sm transition ease-in-out duration-600"
            type="submit"
          >
            Sign Up
          </button>
          {/* <button
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4"
            type="submit"
          >
            Sign Up
          </button> */}
          <div className="text-sm font-medium text-purple-200 text-center">
            Already registered?{" "}
            <Link href="/login" className="hover:underline text-purple-400">
              Login
            </Link>
          </div>
          <div className="text-sm font-medium text-purple-200 text-center">
            <TermsSection title={"Register"} />
          </div>

          <div
            className={
              "gradient-02 -z-40 absolute h-[40%] w-[40%] right-0 md:opacity-20 rounded-full"
            }
          />
        </div>
      </form>
    </section>
  );
};

export default EmailPage;
