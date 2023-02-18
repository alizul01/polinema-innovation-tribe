import Image from "next/image";
import Link from "next/link";
import type { Author } from "~/types/Idea/Index/Author";

export function ProfileSidebar(author: Author) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-3">
        <Image
          src={author.profileImage}
          alt={author.name}
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-gray-200 text-base font-semibold">{author.name}</p>
        <p className="text-gray-500 font-normal text-sm">@{author.username}</p>
        <p className={"text-gray-200 font-normal text-sm"}>{author.bio}</p>
      </div>
      <Link
        type={"button"}
        href={`/profile/${author.username}`}
        className="btn btn-primary"
      >
        Profile
      </Link>
    </div>
  );
}
