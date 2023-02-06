import type { Idea } from "~/types/Idea/Index/Idea";
import type { TypedSupabaseClient } from "~/types/Supabase/TypedSupabaseClient";
import { z } from "zod";

const ideaSchema = z.object({
  title: z.string(),
  problem: z.string(),
  solution: z.string(),
  description: z.string(),
  whatsapp: z.string(),
  email: z.string(),
}).required();

export async function createIdea(
  client: TypedSupabaseClient,
  // TODO: validate with zod and use the type from zod schema
  values: Idea
) {
  ideaSchema.parse(values)
  const result = await client.from("idea_boxes").insert([
    {
      id: crypto.randomUUID(),
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
