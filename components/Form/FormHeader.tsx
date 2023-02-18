import Link from "next/link";
import { HiArrowCircleLeft as ArrowLeft } from "react-icons/hi";
import PolitribeLogo from "~/public/icon/ic_politribe-logo.svg";

export type FormHeaderProps = {
  title: string;
  backTo: string;
};

export function FormHeader(props: FormHeaderProps) {
  return (
    <>
      <Link
        href={props.backTo}
        className="flex gap-1 items-center text-center text-blue-400"
      >
        <ArrowLeft /> Back
      </Link>
      <div className="relative w-fit">
        <div className="rounded-full absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 blur opacity-75" />
        <div className="p-3 rounded-full bg-gradient-to-r from-slate-800 to-gray-900 relative">
          <PolitribeLogo className="w-8 h-8" />
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-blue-300 font-regular text-md">{props.title}</h4>
        <h1 className="text-gray-200 text-xl font-bold">
          Polinema Innovation Tribe
        </h1>
      </div>
    </>
  );
}
