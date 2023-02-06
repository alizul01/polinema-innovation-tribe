import type { Contact } from "~/types/Idea/Index/Contact";
import type { Author } from "./Author";
import type { Comment } from "./Comment";
import type { Tag } from "./Tag";

export type Idea = {
  id: number;
  title: string;
  author: Author;
  problem?: string;
  solution?: string;
  description: string;
  createdAt: number;
  comments: Comment[];
  tags: Tag[];
  contact?: Contact;
  whatsapp ?: string;
  email ?: string;
};
