import type { Author } from "./Author";
import type { Comment } from "./Comment";
import type { Tag } from "./Tag";

export type Idea = {
  id: number;
  title: string;
  author: Author;
  description: string;
  createdAt: number;
  comments: Comment[];
  tags: Tag[];
};
