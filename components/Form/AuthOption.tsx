import React from 'react';
import Link from "next/link";

export type AuthOptionProps = {
  ask: "Not Yet" | "Registered"
}

const AuthOption: React.FC<AuthOptionProps> = ({ ask }) => {
  const text = ask === "Registered" ? "Already Registered?" : "Don't have Account Yet?";
  const linkText = ask === "Registered" ? "Login" : "Register Now!";
  const linkHref = ask === "Registered" ? "/login" : "/register";

  return (
    <div className="text-center w-full font-semibold text-white">
      <p>{text}</p>
      <Link href={linkHref} className="text-purple-500 hover:text-purple-600">
        {linkText}
      </Link>
    </div>
  );
}

export default AuthOption;