import type { definitions } from "~/generated-types";

export type UserQueryResult = Pick<definitions["profiles"], "id" | "bio" | "first_name" | "last_name" | "username" | "profile_image">
