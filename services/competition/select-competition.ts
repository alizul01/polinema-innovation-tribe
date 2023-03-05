import type { TypedSupabaseClient } from "~/types/Supabase/TypedSupabaseClient";

export function selectCompetition(
  client: TypedSupabaseClient
) {
  const result =  client.from("competitions").select("*");
  return result;
}
