import type { ReactNode } from "react";

export type CardDetail = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export function Card(props: CardDetail) {
  return (
    <>
      <div className="cursor-default max-w-sm px-2 py-4 rounded-lg hover:scale-105 shadow-md hover:ring-2 hover:ring-purple-600 transition-all duration-500 ease-in-out border border-slate-700">
        <div className="text-gray-200 text-xl flex flex-row gap-3 items-center bg-slate-800 mx-6 relative justify-start rounded-full pl-12">
          <div className="rounded-full bg-purple-700 h-11 w-11 items-center flex justify-center absolute -left-2 py-2">
            {props.icon}
          </div>
          <div>
            <h5 className="text-base font-semibold tracking-tight text-slate-200 items-start flex p-1 text-start">
              {props.title}
            </h5>
          </div>
        </div>
        <p className="my-2 font-normal text-gray-400 tracking-wide pl-12 pr-4 pt-2 text-sm">
          {props.desc}
        </p>
      </div>
    </>
  );
}
