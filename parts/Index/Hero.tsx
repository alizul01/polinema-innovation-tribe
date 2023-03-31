import Image from "next/image";
import Link from "next/link";
import TrustedSection from "./TrustedSection";

export default function Hero() {
  return (
    <section className="pt-16 gap-6 md:gap-0 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-start justify-between flex-col max-w-6xl gap-24 h-full">
        <div className="flex items-start justify-between flex-col gap-8">
          <span>
            <h4 className="text-start md:text-start md:text-base text-sm text-purple-400 font-semibold capitalize pb-2">
              Leading the way of Innovation
            </h4>
            <h1 className="text-4xl md:text-6xl text-gray-200 font-extrabold text-start md:text-start">
              Unleash Your Creativity
            </h1>
          </span>
          <h4 className="text-start md:text-start text-base md:text-xl font-normal text-slate-400 max-w-2xl">
            <span className="md:inline block">
              Let your{" "}
              <span className="font-bold text-gray-200"> creativity </span> and{" "}
              <span className="font-bold text-gray-200"> innovation </span>{" "}
              shine,
            </span>{" "}
            as we work together to bring new ideas to life.
          </h4>

          <div className="flex flex-row gap-4 justify-start w-full">
            <Link href="/idea" className="btn btn-primary">
              <h1>Mulai cari ide</h1>
            </Link>
            <div className="flex flex-row items-center gap-2">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-purple-600 animate-ping" />
                <div className="w-4 h-4 rounded-full bg-purple-600 absolute top-0" />
              </div>
              <h1 className="text-xs md:text-sm text-purple-400 font-semibold">
                Start Your Journey!
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <TrustedSection />
        </div>
      </div>
      <div className="md:block hidden">
        <Image
          src="/svg/hero.svg"
          width={520}
          height={520}
          alt="heroimg"
          className="float-animation"
        />
      </div>
    </section>
  );
}
