"use client"
import React from 'react';
import {LineCircle} from "~/parts/Index/StepByStepSection/LineCircle";
import PeopleHome from "~/public/svg/home_peeps.svg";
import TeamUp from "~/public/svg/team_up.svg";
import Compete from "~/public/svg/home_compete.svg";
import Link from "next/link";
import ArrowRightCircleIcon from "~icons/heroicons/arrow-right-circle-solid";

const Step = () => {
  return (
    <section className={"w-full py-2 md:py-16 flex flex-col items-center justify-center relative gap-2"}>
      <div className="gradient-01 -z-[99] absolute h-[50%] w-[50%] top-0 left-0 opacity-40 md:opacity-20 rounded-full" />
      <div className={"pb-24"}>
        <h1 className={"font-extrabold md:text-6xl p-3 text-transparent text-center text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"}> This Could Be The Beginning of <span className={"md:text-7xl bg-gradient-to-r text-transparent text-center text-3xl bg-clip-text bg-gradient-to-r from-gray-50 to-slate-100"}>
          Something Big
        </span> </h1>
        <p className={"text-gray-500 md:text-xl mt-4 p-1 text-center text-sm"}>
          How To Deliver Your Great Ideas?
        </p>
      </div>

      {/*note: memang belum dibuat komponen*/}
      <span className={"from-red-500 bg-gradient-to-t to-red-700 from-blue-500 to-blue-700 from-green-500 to-green-700 hidden"}>
      {/*  tailwind gamau render di bawah jadi kubuat gini biar waktu kebuild ikut kerender, i think there is another solution tp buat sementara gini aja gpp*/}
      </span>
      {/*create*/}
      <div className="w-full py-2 md:py-8 flex flex-col items-center justify-center relative" id="step">
        <LineCircle fromColor={"blue"} toColorSquare={"purple"} toColor={"slate"} direction={"t"} num={1} />
      </div>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex flex-col gap-2"}>
          <h1 className={"mb-12 font-bold md:text-3xl text-transparent text-center text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-purple-400"}>
            Create
          </h1>
          <h2 className={"font-bold md:text-7xl text-slate-50 text-center text-3xl"}>
            Create Your Creative Idea
          </h2>
          <p className={"text-gray-500 text-regular text-center"}>
            It's good start to start creating your idea at here!
          </p>
        </div>
        <div className={"flex flex-col md:flex-row justify-between w-full gap-2 p-2"}>
          <span className={"w-full md:w-[60%] flex justify-center items-center"}>
            <PeopleHome className={"w-full"} />
          </span>
          <div>
            <span className={"flex p-4 w-full flex-col items-start justify-start"}>
            <h1 className={"text-white font-bold text-2xl text-center md:text-start w-full md:text-4xl"}>
              How to Create Idea?
            </h1>
              <span className={"md:pl-8 pl-2 pt-4"}>
              <ol className="relative border-l border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    Ideation
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Research Problems
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-400">
                    It's a good start if you start from Sustainable Development Goal's (SDGs) Problem!
                  </p>
                  <Link
                    href="https://sdgs.un.org/goals"
                    target={"_blank"}
                    className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none  bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
                  >
                    Learn About SDGs
                  </Link>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    Solution
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    Brainstorm Problem
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-400">
                    Try to break down each problem and create a solution for each piece of the problem
                  </p>
                  <Link
                    target={"_blank"}
                    href="https://sis.binus.ac.id/2020/03/17/design-thinking-pengertian-tahapan-dan-contoh-penerapannya/"
                    className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none  bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
                  >
                    Learn About Design Thinking
                  </Link>
                </li>
              </ol>
            </span>
          </span>
          </div>
        </div>
      </div>

      {/*team up*/}
      <div className="w-full py-2 md:py-8 flex flex-col items-center justify-center relative" id="step">
        <LineCircle fromColor={"blue"} toColorSquare={"blue"} toColor={"slate"} direction={"t"} num={2} />
      </div>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex flex-col gap-2"}>
          <h1 className={"mb-12 font-bold md:text-3xl text-transparent text-center text-xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500"}>
            Team Up
          </h1>
          <h2 className={"font-bold md:text-7xl text-slate-50 text-center text-3xl"}>
            Search Team At Here!
          </h2>
          <p className={"text-gray-500 text-regular text-center"}>
            What a luck you came at here!
          </p>
        </div>
        <div className={"flex flex-col md:flex-row-reverse justify-between w-full gap-2 p-2"}>
          <span className={"w-full md:w-[70%] flex justify-center items-center"}>
            <TeamUp className={"w-full"} />
          </span>
          <div>
            <span className={"flex p-4 w-full flex-col items-start justify-start"}>
            <h1 className={"text-white font-bold text-2xl text-center md:text-start w-full md:text-4xl"}>
              Need Team Up?
            </h1>
              <span className={"md:pl-8 pl-2 pt-4"}>
              <ol className="relative border-l border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
                  <p className="mb-1 text-sm font-normal leading-none text-gray-500">
                    Owner
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    Upload Ideas
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-400">
                    Wait for someone to request to join your group or invite them to be a member
                  </p>
                  <Link
                    href="/idea"
                    target={"_blank"}
                    className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none  bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
                  >
                    Upload Idea <ArrowRightCircleIcon className={"ml-2"} />
                  </Link>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
                  <p className="mb-1 text-sm font-normal leading-none text-gray-500">
                    Member
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    Search Ideas
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-400">
                    Find an interesting idea and request to become a member of the idea team
                  </p>
                  <Link
                    target={"_blank"}
                    href="/idea"
                    className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none  bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
                  >
                    Search Idea <ArrowRightCircleIcon className={"ml-2"} />
                  </Link>
                </li>
              </ol>
            </span>
          </span>
          </div>
        </div>
      </div>

      {/*team up*/}
      <div className="w-full py-2 md:py-8 flex flex-col items-center justify-center relative" id="step">
        <LineCircle fromColor={"red"} toColorSquare={"red"} toColor={"slate"} direction={"t"} num={3} />
      </div>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex flex-col gap-2"}>
          <h1 className={"mb-12 font-bold md:text-3xl text-transparent text-center text-xl bg-clip-text bg-gradient-to-r from-red-400 to-red-500"}>
            Compete
          </h1>
          <h2 className={"font-bold md:text-8xl text-slate-50 text-center text-3xl"}>
            Search Competition
          </h2>
          <p className={"text-gray-500 md:mt-4 text-regular text-center"}>
            You Are Ready to Be The Next Winner, Good Luck!
          </p>
        </div>
        <div className={"flex flex-col justify-between w-full gap-2 p-2"}>
          <Compete className={"w-full"} />
        </div>
      </div>
      <div className="gradient-01 -z-[99] absolute h-[50%] w-[50%] bottom-0 right-0 opacity-30 md:opacity-20 rounded-full" />
    </section>
  );
}

export default Step;