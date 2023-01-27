import React from 'react';
import jtiLogo from '~/public/trustedby/jti_polinema.png'
import Image from "next/image";
const TrustedSection: React.FC = () => {
  return (
    <div className={"pt-20 pb-16 lg:pb-32 flex flex-col justify-center items-center"}>
      <div className={"flex justify-center items-center gap-4 flex-col md:flex-col"}>
        <h4 className={"text-gray-400 tracking-widest hover:tracking-normal transition-all duration-300 ease-in-out text-sm font-semibold"}>
          TRUSTED BY
        </h4>
        <div className={"flex p-2"}>
          <Image src={jtiLogo} alt={"logo jti"} width={44} height={44} className={"grayscale hover:grayscale-0 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"} />
        </div>
      </div>
    </div>
  );
}

export default TrustedSection;