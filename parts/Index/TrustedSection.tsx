import React from "react";
import jtiLogo from "~/public/trustedby/jti_polinema.png";
import Image from "next/image";
const TrustedSection: React.FC = () => {
  return (
    <div className={"flex flex-col justify-start items-start"}>
      <div
        className={
          "flex justify-start items-start gap-4 flex-col md:flex-col"
        }
      >
        <h4
          className={
            "text-gray-400 tracking-widest hover:tracking-normal transition-all duration-300 ease-in-out text-xs font-semibold"
          }
        >
          TRUSTED BY
        </h4>
        <div className={"flex p-2"}>
          <Image
            src={jtiLogo}
            alt={"logo jti"}
            width={28}
            height={28}
            className={
              "grayscale hover:grayscale-0 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
