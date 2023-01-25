import Link from "next/link";
import React, {Fragment, useReducer} from "react";
import PolitribeLogo from "~/public/icon/ic_politribe-logo.svg";
import {useSupabase} from "~/components/Supabase/SupabaseProvider";
import {NavLink} from "./NavLink";
import UserIcon from "~icons/heroicons/user-solid";
import {Menu, Transition} from '@headlessui/react'
import UserNavigation from "~/data/Navigation/UserNavigation";

export function Navbar() {
  const {session} = useSupabase();
  const [isOpen, toggleNavbar] = useReducer((prev) => !prev, false);
  return (
    <div className={"z-[999]"}>
      <nav className="w-full sticky top-0 shadow border-b border-slate-800">
        <div className="md:grid md:grid-cols-3 md:items-center lg:max-w-[92rem] md:px-8 mx-auto px-4 justify-between">
          <div id="left-side">
            <div className="flex items-center justify-between py-2 md:py-4 md:block">
              <Link href="/">
                <h2 className="text-xl md:text-2xl font-bold text-white flex gap-2 items-center">
                  <PolitribeLogo className="w-8 h-8"/>
                </h2>
              </Link>
              <div className="md:hidden flex gap-2 ">
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
                {session !== null && <Menu as={"div"} className={"relative text-white"}>
                  <Menu.Button
                    className={"w-10 h-10 flex justify-center items-center border-2 border-slate-600 rounded-full cursor-pointer"}>
                    <UserIcon/>
                  </Menu.Button>
                  <Transition
                    as={"div"}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute right-0 mt-2 w-56 rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-2 p-3 z-40">
                      <Menu.Item as="div"
                                 className={['bg-slate-800 p-2 rounded-md flex items-center justify-start gap-2'].join(" ")}>
                        Halo, {session.user.user_metadata.full_name}
                      </Menu.Item>
                      {UserNavigation.map((item) => (
                        <Menu.Item key={item.url} as={Fragment}>
                          {({active}) => (
                            <a href={item.url} className={[`${
                              active ? "bg-slate-900" : "bg-slate-800"
                            }`, 'p-2 rounded-md flex items-center justify-start gap-2'].join(" ")}>
                              <div>{item.icon}</div>
                              <div>{item.name}</div>
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>}
              </div>
            </div>
          </div>
          <div id="right-side">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul
                className="text-sm text-slate-500 font-bold flex space-y-3 md:space-y-0 items-center justify-center md:space-x-10 md:flex-row flex-col">
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
                <li>
                  <NavLink href="/idea/create" activeClass="text-white">
                    Create Idea (Temp)
                  </NavLink>
                </li>
              </ul>
              <div className="mt-3 space-y-2 md:hidden sm:inline-block w-full">
                {session === null && (
                  <>
                    <Link href="/login">
                      <div
                        className="text-sm inline-block w-full px-4 py-2 text-center text-white bg-slate-700 rounded-md shadow hover:bg-gray-800">
                        Login
                      </div>
                    </Link>
                    <Link href="/register">
                      <div
                        className="text-sm inline-block w-full mt-2 px-4 py-2 text-white text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shadow hover:bg-gray-100">
                        Register
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="hidden space-x-2 md:flex text-white justify-self-end">
            {session === null ? (
              <>
                <Link href="/login">
                  <div
                    className="text-sm px-4 py-2 text-center text-white bg-slate-700 rounded-md shadow hover:bg-gray-800">
                    Login
                  </div>
                </Link>
                <Link href="/register">
                  <div
                    className="text-sm px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shadow hover:bg-gray-100">
                    Register
                  </div>
                </Link>
              </>
            ) : (
              <Menu as={"div"} className={"relative text-white z-50"}>
                <Menu.Button
                  className={"w-10 h-10 flex justify-center items-center border-2 border-slate-600 rounded-full cursor-pointer"}>
                  {session.user.app_metadata.provider === "google" ?
                    <img className={"w-10 h-10 rounded-full"} src={session.user.user_metadata.picture}/> : <UserIcon/>}
                </Menu.Button>
                <Transition
                  as={"div"}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  className={"z-50"}
                >
                  <Menu.Items
                    className="absolute right-0 mt-2 w-56 rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-2 p-3 z-50">
                    <Menu.Item as="div"
                               className={['bg-slate-800 p-2 rounded-md flex items-center justify-start gap-2'].join(" ")}>
                      Halo, {session.user.user_metadata.full_name}
                    </Menu.Item>
                    {UserNavigation.map((item) => (
                      <Menu.Item key={item.url} as={Fragment}>
                        {({active}) => (
                          <a href={item.url} className={[`${
                            active ? "bg-slate-900" : "bg-slate-800"
                          }`, 'p-2 rounded-md flex items-center justify-start gap-2'].join(" ")}>
                            <div>{item.icon}</div>
                            <div>{item.name}</div>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
