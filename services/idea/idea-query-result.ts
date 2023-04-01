import type { definitions } from "~/generated-types";

export type IdeaQueryResult =
  Pick<definitions["ideas"], "id" | "title" | "description" | "problem" | "updated_at" | "created_at" | "whatsapp">
  & {
  users: Pick<definitions["profiles"], "id" | "bio" | "first_name" | "last_name" | "username" | "profile_image">
}