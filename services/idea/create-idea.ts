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

      await toast.promise(
        new Promise(async (resolve, reject) => {
          const result = await supabase.from("ideas").insert([
            {
              user_id: session.user.id,
              id: crypto.randomUUID().toString(),
              title: input.title,
              problem: input.problem,
              solution: input.solution,
              description: input.description,
              whatsapp: input.whatsapp,
            },
          ]);
          if (result.error !== null) reject(result.error);
          resolve(result);
        }),
        {
          loading: "Creating idea...",
          error: (err: Error) => {
            return `Failed to register. Reason: ${err.message}`;
          },
          success: "Ide berhasil dibuat!!",
        }
      );
    },
  })
};
