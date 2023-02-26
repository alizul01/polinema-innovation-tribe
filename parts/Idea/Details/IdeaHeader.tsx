import Link from "next/link";
import Image from "next/image";
import { HiCalendar } from "react-icons/hi";
import { formatDistanceToNow } from "date-fns";
import type { Idea } from "~/types/Idea/Index/Idea";

export default function IdeaHeader(props: Idea) {
  return (
    <div className="flex flex-row justify-between items-start">
      <Link
        href={`/profile/${props.author.username}`}
        className="flex flex-row items-center gap-2 transition-all duration-300 ease-in-out"
      >
        <div>
          <Image
            src={props.author.profileImage}
            alt={props.author.name}
            width={38}
            height={38}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-gray-200 text-md font-semibold">
            {props.author.name}
          </p>
          <p className={"text-gray-500 font-normal text-sm"}>
            @{props.author.username}
          </p>
        </div>
      </Link>
      <span className="text-slate-400 flex items-center gap-1 text-sm">
        <HiCalendar />
        {formatDistanceToNow(props.updatedAt, { addSuffix: true })}
      </span>
    </div>
  );
}
