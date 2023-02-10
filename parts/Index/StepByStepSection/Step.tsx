"use client";
import React from "react";
import { STEP_LIST } from "../../../types/Index/StepListType";
import StepItem from "./StepItem";

const Step = () => {
  return (
    <section
      className="flex flex-col gap-4 mt-8 border-y border-y-slate-800 w-full bg-[#100c22] cursor-default"
      id="step"
    >
      <div className="mx-auto max-w-7xl w-[90%]">
        <span>
          <h4 className="text-center md:text-start text-sm md:text-base text-purple-400 font-semibold capitalize pb-2">
            Dare to Dream Big
          </h4>
          <h1 className="text-4xl md:text-6xl text-gray-200 font-extrabold text-center md:text-start">
            How to Get Started?
          </h1>
        </span>
        <div className="pt-16 flex flex-col gap-6">
          {STEP_LIST.map((step, index) => (
            <StepItem
              key={index}
              color={step.color}
              title={step.title}
              step={step.step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Step;
