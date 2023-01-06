/* eslint-disable react/display-name */
import Link from "next/link";
import React from "react";

const RegisterPage: React.FC = React.memo(() => {
  return (
    <section className={"w-full flex justify-center items-center my-5"}>
       <form className={"space-y-6 bg-slate-800 border border-slate-700 rounded-lg p-8 w-[100%] lg:w-[30%]"}>
        <h5 className={"text-xl font-medium text-slate-100 "}>
          Register to Politribe
        </h5>
        <div>
          <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-white">Full Name</label>
          <input type="text" name="fullName" id="fullName"
                 className="border text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                 placeholder="My name is..." required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
          <input type="email" name="email" id="email"
                 className="border text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                 placeholder="yourcrush@gmail.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
          <input type="password" name="password" id="password"
                 className="border text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                 placeholder="••••••••" required />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword"
                 className="border text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                 placeholder="••••••••" required />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
          </div>
          <Link href="/" className="ml-auto text-sm hover:underline text-purple-500">Forgot Password?</Link>
        </div>
        <button type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 focus:ring-purple-800">Register
        </button>
        <div className="text-sm font-medium text-purple-300">
          Already registered? <Link href="/login" className="hover:underline text-purple-500">Login</Link>
        </div>
      </form>
    </section>
  )
})

export default RegisterPage