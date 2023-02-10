import React from "react";
import Link from "next/link";

type buttonPropsData = {
  screen: "sm" | "md" | "lg";
};

const ButtonAuth: React.FC<buttonPropsData> = ({ screen }) => {
  return (
    <div
      className={[
        screen == "md" ? "hidden space-x-2 md:flex text-gray-200 gap-1" : " ",
      ].join(" ")}
    >
      <Link href="/login">
        <div
          className={[
            "text-sm px-4 py-2 text-center text-gray-200 bg-slate-700 rounded-lg shadow hover:bg-gray-800",
            screen === "sm" ? "w-full" : " ",
          ].join("")}
        >
          Login
        </div>
      </Link>
      <Link href="/register">
        <div
          className={[
            "text-sm px-4 py-2 text-gray-200 text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow hover:bg-gray-100",
            screen === "sm" ? "w-full mt-2" : " ",
          ].join("")}
        >
          Register
        </div>
      </Link>
    </div>
  );
};

export default ButtonAuth;
