import type { Idea } from "~/types/Idea/Index/Idea";
import type { TypedSupabaseClient } from "~/types/Supabase/TypedSupabaseClient";

export async function createIdea(
  client: TypedSupabaseClient,
  // TODO: validate with zod and use the type from zod schema
  values: Idea
) {
  const result = await client.from("idea_boxes").insert([
    {
      id: crypto.randomUUID(),
      title: values.title,
      problem: values.problem,
      solution: values.solution,
      description: values.description,
    },
  ]);
  return result;
}
