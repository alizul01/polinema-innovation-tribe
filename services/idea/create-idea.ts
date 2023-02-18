import type { IdeaSchema } from "~/schema/Idea";
import type { TypedSupabaseClient } from "~/types/Supabase/TypedSupabaseClient";

export async function createIdea(
  client: TypedSupabaseClient,
  values: IdeaSchema
) {
  const result = await client.from("idea_boxes").insert([
    {
      id: crypto.randomUUID().toString(),
      title: values.title,
      problem: values.problem,
      solution: values.solution,
      description: values.description,
      whatsapp: values.whatsapp,
      email: values.email,
      updated_at: new Date(),
    },
  ]);
  return result;
}
