"use client";

import Link from "next/link";
import { useReducer } from "react";
import { NavLink } from "./NavLink";

export function Navbar() {
  const [isOpen, toggleNavbar] = useReducer((prev) => !prev, false);

  return (
    <nav className="w-full bg-[#131A22] sticky shadow-sm shadow border-b border-slate-800">
      <div className="md:flex md:items-center lg:max-w-[92rem] md:px-8 mx-auto px-4 justify-between">
        <div id="left-side">
          <div className="flex items-center justify-between py-2 md:py-4 md:block">
            <Link href="/">
              <h2 className="text-xl md:text-2xl font-bold text-white flex gap-2 items-center">
                <img src={"logo/PIT@512.svg"} className={"w-8"} />
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none "
                onClick={toggleNavbar}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div id="right-side">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="text-sm text-slate-500 font-bold flex space-y-3 md:space-y-0 items-center justify-center md:space-x-10 md:flex-row flex-col">
              <li>
                <NavLink href="/" activeClass="text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink href="/competition" activeClass="text-white">
                  Competition
                </NavLink>
              </li>
              <li>
                <NavLink href="/idea" activeClass="text-white">
                  Idea Sandbox
                </NavLink>
              </li>
            </ul>
            <div className="mt-3 space-y-2 w-full md:hidden sm:inline-block">
              <NavLink href="/login" activeClass="font-bold">
                <div className={"text-sm inline-block w-full px-4 py-2 text-center text-white bg-slate-700 rounded-md shadow hover:bg-gray-800"}>
                    Login
                </div>
              </NavLink>
              <NavLink
                href="/register" activeClass="font-bold"
              >
                <div className="text-sm inline-block w-full mt-2 px-4 py-2 text-white text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shadow hover:bg-gray-100">
                  Register
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:flex text-white">
          <NavLink href="/login" activeClass="font-bold">
            <div className={"text-sm px-4 py-2 text-center text-white bg-slate-700 rounded-md shadow hover:bg-gray-800"}>
              Login
            </div>
          </NavLink>
          <NavLink
            href="/register"
            activeClass={"font-bold"}
          >
            <div className="text-sm px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shadow hover:bg-gray-100">
              Register
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
