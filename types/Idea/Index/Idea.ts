import type { Author } from "./Author";
import type { Comment } from "./Comment";
import type { Tag } from "./Tag";

export type Idea = {
  id: string;
  title: string;
  author: Author;
  problem?: string;
  solution?: string;
  description: string;
  updatedAt: number;
  comments: Comment[];
  tags: Tag[];
  whatsapp ?: string;
  email ?: string;
};
