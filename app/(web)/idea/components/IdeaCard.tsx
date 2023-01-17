"use client";

import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import tinycolor from "tinycolor2";
import type { Idea } from "../types/Idea";
import CommentIcon from "~icons/heroicons/chat-bubble-oval-left";
import CalendarIcon from "~icons/heroicons/calendar";

export type IdeaCardProps = Idea & {};

export function IdeaCard(props: IdeaCardProps) {
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
