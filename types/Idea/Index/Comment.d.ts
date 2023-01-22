import type { Author } from "./Author";

export type Comment = {
  id: number;
  author: Author;
  text: string;
};
