/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import Link from "next/link";
import { Fragment, useReducer } from "react";
import PolitribeLogo from "~/public/icon/ic_politribe-logo.svg";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import UserNavigation from "~/data/Navigation/UserNavigation";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { useProfile } from "~/services/user/profile";

export type NavLinkMenuProps = {
  name: string;
  url: string;
};

const LINKS: NavLinkMenuProps[] = [
  { name: "Competition", url: "/competition" },
  { name: "Sandbox", url: "/idea" }
];

export function NavLinkMenu({ name, url }: NavLinkMenuProps) {
  return (
    <div>
      <NavLink href={url} activeClass="text-purple-500">
        <h2 className="text-sm font-bold md:border-none hover:text-purple-500">
          {name}
        </h2>
      </NavLink>
    </div>
  );
}

export function AuthMenu() {
  const { data: profile } = useProfile();
  if (profile === undefined || profile === null) return null;

  return (
    <Menu as={"div"} className={"relative text-gray-200 z-50"}>
      <Menu.Button
        className={
          "w-10 h-10 flex justify-center items-center border-2 border-slate-600 rounded-full cursor-pointer"
        }
      >
        {/*{user?.app_metadata.provider === "google" ? (*/}
        {/*  <Image*/}
        {/*    className={"w-10 h-10 rounded-full"}*/}
        {/*    src={user.user_metadata.picture}*/}
        {/*    alt={user.user_metadata.full_name}*/}
        {/*    width={40}*/}
        {/*    height={40}*/}
        {/*  />*/}
        {/*) : (*/}
        {/*  <UserIcon />*/}
        {/*)}*/}
        <Image
          className="w-10 h-10 rounded-full"
          src={profile.profileImage}
          alt={profile.username}
          width={40}
          height={40}
        />
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
          className="absolute right-0 mt-2 w-56 rounded-lg bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-2 p-3 z-50">
          <Menu.Item
            as="div"
            className={[
              "bg-slate-800 p-2 rounded-lg flex items-center justify-start gap-2"
            ].join(" ")}
          >
            Halo, {profile.name}
          </Menu.Item>
          {UserNavigation.map((item) => (
            <Menu.Item key={item.url} as={Fragment}>
              {({ active }) => (
                <Link
                  href={item.url}
                  onClick={(e) => {
                    if (item.isForbidden) {
                      e.preventDefault();
                    }
                  }}
                  className={[
                    `${active ? "bg-slate-900" : "bg-slate-800"}`,
                    "p-2 rounded-lg flex items-center justify-start gap-2",
                    item.isForbidden ? "cursor-not-allowed" : ""
                  ].join(" ")}
                >
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function AuthButton() {
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <Link
        href={"/login"}
        className="bg-[#202A3C] px-4 py-2 rounded-lg text-gray-200 text-sm w-full md:w-auto text-center"
      >
        Login
      </Link>
      <Link
        href={"/register"}
        className="bg-purple-600 px-4 py-2 rounded-lg text-gray-200 text-sm w-full md:w-auto text-center"
      >
        Register
      </Link>
    </div>
  );
}

export function Navbar() {
  const { session } = useSupabase();
  const [isOpen, toggleNavbar] = useReducer((prev) => !prev, false);
  return (
    <div className={"z-[999]"}>
      <nav className="w-full justify-between">
        <div className="md:grid md:grid-cols-3 md:items-center px-4 md:px-8 mx-auto justify-between py-5">
          <div id="left-side">
            <div className="flex items-center justify-between md:block">
              <Link href="/">
                <h2 className="text-xl md:text-2xl font-bold text-gray-200">
                  <PolitribeLogo className="w-7 h-7" />
                </h2>
              </Link>
              <div className="md:hidden flex gap-2 ">
                <button
                  className="p-2 text-gray-700 rounded-lg outline-none "
                  onClick={toggleNavbar}
                >
                  {isOpen ? (
                    <IoClose className="text-gray-200 font-bold text-xl" />
                  ) : (
                    <HiOutlineMenuAlt3 className="text-gray-200 font-bold text-xl" />
                  )}
                </button>
                {session !== null && <AuthMenu />}
              </div>
            </div>
          </div>
          <div id="right-side">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                {LINKS.map((link, index) => (
                  <NavLinkMenu key={index} name={link.name} url={link.url} />
                ))}
              </div>
              <div className="mt-3 space-y-2 md:hidden sm:inline-block w-full">
                {session === null && <AuthButton />}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:flex text-gray-200 justify-self-end">
            {session === null ? <AuthButton /> : <AuthMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
}
