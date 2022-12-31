import React from 'react';
import ArrowRightCircleIcon from "~icons/heroicons/arrow-right-circle-solid";
import QuestionMarkCircleIcon from '~icons/heroicons/question-mark-circle-solid'

function Hero() {
    return (
        <section className={"w-full pt-6 md:pt-16 flex flex-col items-center justify-center"} id={"hero"}>
            <div className={"md:max-w-4xl pt-2"}>
                <h4 className={"text-center text-sm md:text-lg text-purple-400 font-semibold capitalize pb-2"}>Leading the way with innovative thinking</h4>
                <h1 className={"text-4xl md:text-7xl text-white font-bold text-center"}>
                    <span>Unleash Your</span> Creativity With Politribe
                </h1>
            </div>
            <div className={"pt-12"}>
                <h4 className={"text-center text-lg md:text-xl font-semibold text-slate-400"}>
                    Discover your full potential with Polinema's innovative team
                </h4>
            </div>
            <div className={"pt-12 md:pt-12 flex flex-row gap-3 text-xs md:text-lg"}>
                <button className={"rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2.5 font-semibold flex gap-2 justify-center items-center hover:shadow-slate-50 hover:shadow-sm transition ease-in-out duration-600"}>
                    Get Started <ArrowRightCircleIcon style={{fontSize: "24px"}} />
                </button>
                <button className={"rounded-lg bg-slate-700 px-4 py-2.5 font-semibold flex gap-2 justify-center items-center hover:shadow-slate-50 hover:shadow-sm transition ease-in-out duration-600"}>
                    <span className={"text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-50 "}> How it Works? </span> <QuestionMarkCircleIcon style={{color: "white", fontSize: 24}} />
                </button>
            </div>
        </section>
    );
}

export default Hero;
