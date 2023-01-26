"use client";

import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import tinycolor from "tinycolor2";
import type { Idea } from "~/types/Idea/Index/Idea";
import { HiChatBubbleOvalLeft as CommentIcon } from "react-icons/hi2";
import { HiCalendar as CalendarIcon } from "react-icons/hi2";

export type IdeaCardProps = Idea & {};

export function IdeaCardBackup(props: IdeaCardProps) {
  return (
    <div className="p-8 border border-slate-300/20 bg-slate-800/20 rounded-lg flex gap-6 flex-wrap">
      <div className="relative w-12">
        <style jsx>{`
          .profile-line::before {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -0.5rem;
            width: 0.5rem;
            height: 0.5rem;
            background-color: inherit;
            border-radius: 2rem;
          }
        `}</style>
        <div className="absolute w-[1px] h-full left-1/2 -translate-x-1/2 bg-slate-300/20 profile-line" />
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={props.author.profileImage}
            alt={props.author.name}
            width={48}
            height={48}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex-1 w-full">
        <span className="text-slate-100 font-medium text-2xl block">
          {props.title}
        </span>
        <span className="text-slate-400 flex items-center gap-1 mt-1 text-sm">
          <CalendarIcon />
          {formatDistanceToNow(props.createdAt, { addSuffix: true })}
        </span>
        <p className="line-clamp-2 text-slate-400 text-lg mt-3 w-full">
          {props.description}
        </p>
        <hr className="w-full h-[1px] bg-gradient-to-r from-slate-300/20 to-slate-300/0 border-none my-4 -ml-12" />
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="text-slate-400 flex items-center gap-2">
            <CommentIcon />
            {props.comments.length > 0 ? (
              <>
                {`${props.comments.length} ${
                  props.comments.length > 1 ? "Responses" : "Response"
                }`}
              </>
            ) : (
              "No Response"
            )}
          </div>
          <div className="flex gap-3">
            {props.tags.map((tag) => (
              <span
                key={tag.text}
                className=""
                style={{
                  color: tinycolor(tag.colour)
                    .desaturate(50)
                    .toPercentageRgbString(),
                }}
              >
                #{tag.slug}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function IdeaCard(props: IdeaCardProps) {
  return (
    <div
      className={
        "p-5 border border-slate-700 bg-slate-800/40 rounded-md flex gap-3 cursor-pointer hover:ring-2 hover:ring-purple-600 hover:scale-105 transition-all duration-500 ease-in-out flex-col"
      }
    >
      <div>
        <div className="flex flex-row gap-2 items-center">
          <div className={"w-12 h-12 rounded-full overflow-hidden"}>
            <Image
              src={props.author.profileImage}
              alt={props.author.name}
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className={"text-white text-md font-semibold"}>
              {props.author.name}
            </p>
            <p className={"text-gray-500 font-normal text-sm"}>
              @{props.author.username}
            </p>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-2 flex-1"}>
        <h1 className={"text-white font-bold text-lg "}>{props.title}</h1>
        <p className={"line-clamp-2 text-slate-400 text-base w-full"}>
          {props.description}
        </p>
        <div className={"flex justify-between md:flex-row flex-col mt-2 gap-2"}>
          <div
            className={
              "flex flex-row gap-2 items-center justify-start md:justify-center"
            }
          >
            <span className="text-slate-400 flex items-center gap-1 text-sm">
              <CalendarIcon />
              {formatDistanceToNow(props.createdAt, { addSuffix: true })}
            </span>
            <div className="text-slate-400 flex items-center gap-2">
              <CommentIcon />
              {props.comments.length > 0 ? (
                <>
                  {`${props.comments.length} ${
                    props.comments.length > 1 ? "Responses" : "Response"
                  }`}
                </>
              ) : (
                "No Response"
              )}
            </div>
          </div>
          <div className="flex gap-3">
            {props.tags.map((tag) => (
              <span
                key={tag.text}
                className=""
                style={{
                  color: tinycolor(tag.colour)
                    .desaturate(50)
                    .toPercentageRgbString(),
                }}
              >
                #{tag.slug}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
