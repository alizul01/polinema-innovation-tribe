import React from "react";
import PolitribeLogo from "~/public/icon/ic_politribe-logo.svg";
import { HiArrowRightCircle as ArrowRightCircleIcon } from "react-icons/hi2";
import { HiQuestionMarkCircle as QuestionMarkCircleIcon } from "react-icons/hi2";

const Hero: React.FC = () => {
  return (
    <section
      className="w-full pt-1 md:pt-16 flex flex-col items-center justify-center relative"
      id="hero"
    >
      <div className="gradient-01 -z-[99] absolute h-[40%] w-[40%] inset-0 opacity-100 md:opacity-40 rounded-full" />
      <div className="z-10 md:max-w-4xl">
        <div className="flex p-2 items-center justify-center">
          <div className="relative">
            <div className="rounded-full absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 blur opacity-75" />
            <div className="p-3 rounded-full bg-gradient-to-r from-slate-800 to-gray-900 relative">
              <PolitribeLogo className="w-8 h-8 cursor-pointer hover:animate-spin transition-all ease-in-out duration-500" />
            </div>
          </div>
        </div>
        <h4 className="text-center text-sm md:text-lg text-purple-400 font-semibold capitalize pb-2">
          Leading the way with innovative thinking
        </h4>
        <h1 className="text-5xl md:text-7xl text-white font-bold text-center -z-50">
          <span>Unleash Your</span> Creativity With Politribe
        </h1>
      </div>
      <div className="pt-12 max-w-4xl">
        <h4 className="text-center text-lg md:text-xl font-normal text-slate-400">
          <span>
            Join us and let your creativity and innovation shine as we work
            together to bring new ideas to life. With Politribe, the
            possibilities are endless.
          </span>
        </h4>
      </div>
      <div className="pt-12 md:pt-12 flex justify-center items-center flex-col gap-4 md:flex-row md:space-x-12 text-lg w-full md:w-fit">
        <button className="btn btn-primary w-64 py-2">
          Get Started <ArrowRightCircleIcon color="white" fontSize="18" />
        </button>
        <button className="btn btn-secondary w-64 py-2">
          <span className="text-slate-50 ">How it Works?</span>
          <QuestionMarkCircleIcon color="white" fontSize="18" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
