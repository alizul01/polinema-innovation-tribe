import type { TypedSupabaseClient } from "~/types/Supabase/TypedSupabaseClient";

export async function selectIdea(
  client: TypedSupabaseClient
) {
  const result = await client.from("idea_boxes").select("*");
  return result;
}
