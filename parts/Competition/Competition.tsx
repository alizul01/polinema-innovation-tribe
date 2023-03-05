"use client";
import React from "react";
import type { CompetitionType } from "~/types/competition/CompetitionType";
import Image from "next/image";
import tinycolor from "tinycolor2";
import Link from "next/link";

const Competition = (props: CompetitionType) => {
  return (
    <>
      <Link
        href={`${props.link}`}
        className="flex flex-row bg-slate-900 p-2 rounded-lg border border-slate-800 gap-4 items-center hover:border-slate-700 cursor-pointer hover:ring-2 hover:ring-purple-700 hover:scale-105 ease-in-out transition-all duration-300 flex-auto"
      >
        <div className="min-w-max">
          <Image
            src={`https://picsum.photos/seed/${props.id + 4}/400/500`}
            alt={props.title}
            className="rounded-lg object-fill h-32 w-32 border border-slate-800"
            width={1080}
            height={1080}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-4" id="tags">
            {props.tags.map((tag) => (
              <span
                key={tag.slug}
                className="text-sm"
                style={{
                  color: tinycolor(tag.colour)
                    .desaturate(50)
                    .toPercentageRgbString(),
                }}
              >
                #{tag.tag}
              </span>
            ))}
          </div>
          <h1 className="text-white text-base text-start max-w-xs font-bold">
            {props.title}
          </h1>
          <p className="text-gray-500 line-clamp-2 max-w-xs text-sm">
            {props.description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Competition;
