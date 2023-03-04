"use client";

import { useState } from "react";
import type { Tag } from "~/types/Idea/Index/Tag";
import TagItem from "./TagItem";

const LIMIT = 8;

type TagListProps = {
  tags: Tag[];
};

export default function TagList(props: TagListProps) {
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  function toggleSelectedTag(tag: Tag) {
    const isAlreadySelected = selectedTags.some((t) => t.slug === tag.slug);
    setSelectedTags((prev) =>
      isAlreadySelected
        ? prev.filter((p) => p.slug !== tag.slug)
        : [...prev, tag]
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-screen-md mx-auto">
        {props.tags.slice(0, shouldShowMore ? -1 : LIMIT).map((tag) => (
          <TagItem
            key={tag.slug}
            isActive={selectedTags.some((t) => t.slug === tag.slug)}
            onClick={(t) => toggleSelectedTag(t)}
            {...tag}
          />
        ))}
      </div>
      {props.tags.length > LIMIT && (
        <div
          className="flex p-4 items-center justify-center cursor-pointer text-slate-500 hover:text-slate-400 transition duration-200"
          onClick={() => setShouldShowMore((prev) => !prev)}
        >
          <span className="text-md">
            {shouldShowMore ? "See less" : "Show more tags"}
          </span>
        </div>
      )}
    </div>
  );
}
