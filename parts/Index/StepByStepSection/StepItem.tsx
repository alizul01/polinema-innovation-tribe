import React from "react";
import Link from "next/link";
import { HiArrowRightCircle as ArrowRightCircleIcon } from "react-icons/hi2";
import type { StepListType } from "~/types/Index/StepListType";

const StepItem: React.FC<StepListType> = ({ color, title, step }) => {
  return (
    <div className="flex flex-col gap-4 border-y border-y-slate-800 rounded-lg py-5 hover:bg-surface-100 px-2">
      <div className={[`px-4 py-1 w-fit rounded-lg`, color.bg].join(" ")}>
        <h3 className={[`mb-1 text-base font-semibold`, color.text].join(" ")}>
          {title}
        </h3>
      </div>
      <ol className="relative border-l border-gray-700 ml-8 mt-5">
        {step.map((item, index) => (
          <li className="mb-10 ml-6" key={index}>
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-purple-900">
              <span className="text-white">{item.icon}</span>
            </span>
            <h3 className="mb-1 text-xl font-bold text-gray-200">
              {item.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-300">
              {item.description}
            </p>
            <Link
              href={item.link}
              target={"_blank"}
              className={["btn btn-primary px-4 py-2", color.text, color.bg].join(" ")}
            >
              {item.linkText}
              <ArrowRightCircleIcon className="inline text-base" />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepItem;
