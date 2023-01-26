import React from "react";
import Image from "next/image";
import {IDEAS} from "~/data/Idea/Index/ideas";
import Link from "next/link";
import IdeasContent from "~/parts/Idea/Details/IdeasContent";
import type {ideaSlug} from "~/types/Idea/Details/IdeaSlug";
import type {Idea} from "~/types/Idea/Index/Idea";

const Page: React.FC<ideaSlug> = ({params}) => {
  const props: Idea = IDEAS.filter((value) => value.id == params.id)[0]
  return (
    <div className={"w-full justify-center items-center xl:px-56 text-white flex flex-row relative flex-wrap"}>
      <IdeasContent key={props.id} {...props} />
      <div
        className={"w-[100%] p-4 border-l-none lg:w-[20%] h-full border-t border-t-slate-600 md:border-t-none md:border-l border-l-slate-600 flex flex-col gap-4 rounded-sm"}>
        <div className={"flex flex-col gap-2"}>
          <div className={"flex flex-col gap-3"}>
            <Image
              src={props?.author?.profileImage}
              alt={props?.author?.name}
              width={48}
              height={48}
              className={"rounded-full"}
            />
          </div>
          <div className={"flex flex-col gap-1"}>
            <p className={"text-white text-base font-semibold"}>
              {props?.author?.name}
            </p>
            <p className={"text-gray-500 font-normal text-sm"}>
              @{props?.author?.username}
            </p>
            <p className={"text-gray-200 font-normal text-sm"}>
              {props?.author?.bio}
            </p>
          </div>
          <Link type={"button"} href={`/profile/${props.author.username}`} className="rounded-lg hover:from-purple-600 hover:to-blue-600 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 font-semibold justify-center items-center hover:shadow-purple-700 hover:shadow-sm transition-all ease-in-out duration-500 w-fit">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page