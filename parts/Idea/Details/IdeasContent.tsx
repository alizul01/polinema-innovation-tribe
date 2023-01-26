import React from 'react';
import Link from "next/link";
import Image from "next/image";
import CalendarIcon from "~icons/heroicons/calendar";
import {formatDistanceToNow} from "date-fns";
import type {Idea} from "~/types/Idea/Index/Idea";

const IdeasContent = (props : Idea) => {
  return (
    <div className={"max-w-4xl p-1 lg:sticky lg:top-0 w-[100%] lg:w-[80%]"}>
      <div className={"rounded-md p-4 flex flex-col gap-6"}>
        <div className={"flex flex-row justify-between items-start"}>
          <Link href={`/profile/${props.author.username}`} className={"flex flex-row items-center gap-2 transition-all duration-300 ease-in-out"}>
            <div>
              <Image
                src={props?.author?.profileImage}
                alt={props?.author?.name}
                width={38}
                height={38}
                className={"rounded-full"}
              />
            </div>
            <div>
              <p className={"text-white text-md font-semibold"}>
                {props?.author?.name}
              </p>
              <p className={"text-gray-500 font-normal text-sm"}>
                @{props?.author?.username}
              </p>
            </div>
          </Link>
          <span className="text-slate-400 flex items-center gap-1 text-sm">
                <CalendarIcon/>
            {formatDistanceToNow(props.createdAt, {addSuffix: true})}
          </span>
        </div> {/* Component Author - Date */}
        <h1 className={"text-2xl md:text-5xl font-bold text-white"}>
          {props.title}
        </h1> {/* Component Header */}
        <div id={"description"} className={"flex flex-col gap-3"}>
          <h3 className={"text-2xl font-bold text-white"}>
            Idea Description
          </h3>
          <p className={"text-lg text-white first-letter:text-2xl"}>
            {props.description}
          </p>
        </div> {/* Component MainContent, diloop */}
      </div>
    </div>
  );
}

export default IdeasContent;