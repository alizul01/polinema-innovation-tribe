import React from "react";
import Link from "next/link";

const LoginPage: React.FC = React.memo(() => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <section className={"w-full flex justify-center items-center"}>
      <form className={"space-y-6 bg-slate-800 border border-slate-700 rounded-lg p-6 md:p-8 md:w-[30%]"}>
        <h5 className={"text-xl font-medium text-slate-100 "}>
          Login to Politribe
        </h5>
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
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">

            </div>
          </div>
          <Link href="/" className="ml-auto text-sm hover:underline text-purple-500">Forgot Password?</Link>
        </div>
        <button type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 focus:ring-purple-800">Login
        </button>
        <div className="text-sm font-medium text-purple-300">
          Not registered? <Link href="/register" className="hover:underline text-purple-500">Create account</Link>
        </div>
      </form>
    </section>
  )
})

export default LoginPage