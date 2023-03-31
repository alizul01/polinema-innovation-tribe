import type { MouseEvent } from "react";
import GoogleIcon from "~/public/icon/ic_google-icon.svg";
import Link from "next/link";
import { HiUser as UserIcon } from "react-icons/hi2";
import { useUserLogin } from "~/services/user/login";

type GoogleAuthProps = {
  name: "Register" | "Login";
};

export default function AuthButtons({ name }: GoogleAuthProps) {
  const { mutate: login } = useUserLogin({ provider: "google" });

  // temporarily disable google login
  async function handleGoogleLogin(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    login(undefined);
  }

  return (
    <div className="w-full space-y-3">
      {/*<button*/}
      {/*  className="flex w-full items-center justify-center space-x-2 text-gray-200 bg-slate-800 hover:bg-slate-700 hover:scale-95 transition-all ease-in-out duration-500 focus:ring-3 focus:ring-blue-700 p-2.5 rounded-lg"*/}
      {/*  onClick={handleGoogleLogin}*/}
      {/*>*/}
      {/*  <GoogleIcon />*/}
      {/*  <a className="text-sm font-normal">{name} with Google</a>*/}
      {/*</button>*/}
      <Link
        href={name == "Register" ? "/register/email" : "/login/email"}
        className="flex w-full items-center justify-center space-x-2 text-gray-200 bg-slate-800 hover:bg-slate-700 hover:scale-95 transition-all ease-in-out duration-500 focus:ring-3 focus:ring-blue-700 p-2.5 rounded-lg"
      >
        <UserIcon />
        <span className="text-sm font-normal">{name} with Email</span>
      </Link>
    </div>
  );
}
