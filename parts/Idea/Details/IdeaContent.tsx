import type { Idea } from "~/types/Idea/Index/Idea";
import {
  MdAddCall as AddCallIcon,
  MdMail as MailIcon,
  MdOutlineLightbulb as OutlineLightbulbIcon,
  MdOutlineReportProblem as OutlineReportProblemIcon,
} from "react-icons/md";
import Link from "next/link";
import IdeaHeader from "./IdeaHeader";

export default function IdeaContent(props: Idea) {
  return (
    <div className="max-w-4xl p-1 lg:sticky lg:top-0 w-[100%] lg:w-[80%]">
      <div className="rounded-lg p-4 flex flex-col gap-6">
        <IdeaHeader {...props} />
        <h1 className="text-2xl md:text-5xl font-bold text-gray-200">
          {props.title}
        </h1>
        <div id="description" className="flex flex-col gap-3">
          <p className="text-lg text-gray-400">{props.description}</p>
        </div>
        <div id="problem" className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-200 flex flex-row gap-2 items-center">
            <OutlineReportProblemIcon className="inline text-2xl" />{" "}
            <span className="text-3xl"> Problem </span>
          </h3>
          <p className="text-lg text-gray-300 first-letter:text-2xl pl-8">
            {props.problem}
          </p>
        </div>
        <div id="solution" className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-200 flex flex-row gap-2 items-center">
            <OutlineLightbulbIcon className="inline text-2xl" />{" "}
            <span className="text-3xl"> Solution </span>
          </h3>
          <p className="text-lg text-gray-300 first-letter:text-2xl pl-8">
            {props.solution}
          </p>
        </div>
        {/* contact */}
        <div id="contact" className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-200 flex flex-row gap-2 items-center">
            <OutlineLightbulbIcon className="inline text-2xl" />{" "}
            <span className="text-3xl"> Contact </span>
          </h3>
          <div className="flex flex-row gap-6 items-center pl-8">
            <Link
              href={`https://wa.me/${props.author.whatsapp}/?text=Hi%20${props.author.name},%20I%20am%20interested%20in%20your%20idea%20${props.title}`}
              className="btn btn-primary px-3 py-2"
              target={"_blank"}
            >
              <AddCallIcon className="inline text-lg" />
              <span className="text-base text-gray-300"> Whatsapp </span>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
