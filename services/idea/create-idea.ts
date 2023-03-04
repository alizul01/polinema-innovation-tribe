import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useSupabase } from "~/components/Supabase";
import type { IdeaSchema } from "~/schema/Idea";

export function useCreateIdea() {
  const { supabase, session } = useSupabase();
  return useMutation({
    mutationFn: async (input: IdeaSchema) => {
      if (session === null) {
        toast.error("Not allowed!");
        return;
      }

      const result = await supabase.from("ideas").insert([
        {
          user_id: session.user.id,
          id: crypto.randomUUID().toString(),
          title: input.title,
          problem: input.problem,
          solution: input.solution,
          description: input.description,
        },
      ]);
      return result;
    },
  });
}
