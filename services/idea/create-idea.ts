import { useMutation } from "@tanstack/react-query";
import { useSupabase } from "~/components/Supabase";
import type { IdeaSchema } from "~/schema/Idea";

export async function useCreateIdea() {
  const { supabase } = useSupabase();
  return useMutation({
    mutationFn: async (input: IdeaSchema) => {
      const result = await supabase.from("idea_boxes").insert([
        {
          id: crypto.randomUUID().toString(),
          title: input.title,
          problem: input.problem,
          solution: input.solution,
          description: input.description,
          whatsapp: input.whatsapp,
          email: input.email,
          updated_at: new Date(),
        },
      ]);
      return result;
    },
  });
}
