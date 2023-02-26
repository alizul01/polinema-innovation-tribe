import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "~/components/Supabase";
import type { definitions } from "~/generated-types";
import type { Idea } from "~/types/Idea/Index/Idea";

export function useIdeas() {
  const { supabase } = useSupabase();
  return useQuery<Idea[]>({
    queryKey: ["ideas"],
    queryFn: async () => {
      const ideas = await supabase.from("idea_boxes").select("*");
      if (ideas.data === null) return [];

      const mappedData: Idea[] = (
        ideas.data as Array<definitions["idea_boxes"]>
      ).map((idea) => ({
        // TODO: fill it properly
        author: {
          username: idea.username ?? "",
          bio: "",
          name: idea.username ?? "",
          profileImage: "",
        },
        comments: [],
        title: idea.title,
        updatedAt: Number(idea.updated_at ?? Date.now()),
        description: idea.description ?? "",
        id: idea.id,
        problem: idea.problem,
        solution: idea.solution,
        email: idea.email,
        whatsapp: idea.whatsapp,
        tags: [],
      }));
      return mappedData;
    },
  });
}
