import React from "react";
import type {LineCircleData} from "~/parts/HomePage/Step/types/LineCircleData";

export function LineCircle({direction, fromColor, toColor, num, toColorSquare} : LineCircleData) {
  return(
    <>
      <div className="flex items-center justify-center">
        <div className={["h-24 w-px animate-pulse inline-block flex justify-center items-center", `bg-gradient-to-${direction} from-${fromColor}-500 to-${toColor}`].join(" ")}>
          <div className={`flex justify-center items-center h-10 w-10 rounded-br-xl rounded-tl-xl bg-gradient-to-b from-${fromColor}-500 to-${toColorSquare}-700 text-white text-center leading-none p-2 absolute bottom-0`}>
            <h1 className={"font-bold to-elblack"}>
              {num}
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}