import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "~/components/Supabase";
import type { Idea } from "~/types/Idea/Index/Idea";
import type { IdeaQueryResult } from "~/services/idea/idea-query-result";

export function useIdeaById(id: string) {
  const { supabase } = useSupabase();
  return useQuery<Idea | null>({
    queryKey: ["ideas", id],
    queryFn: async () => {
      const ideas = await supabase
        .from("ideas")
        .select(`
          id,
          title,
          description,
          problem,
          solution,
          whatsapp,
          updated_at,
          created_at,
          users (
            id,
            username,
            bio,
            first_name,
            last_name,
            profile_image
          )
        `)
        .eq("id", id);
      if (ideas.data === null || ideas.data.length < 1) return null;

      const idea = ideas.data[0] as IdeaQueryResult & {
        solution: string
      };
      return {
        id: idea.id,
        author: {
          id: idea.users.id,
          username: idea.users.username,
          bio: idea.users.bio,
          whatsapp: idea.whatsapp,
          name: [idea.users.first_name, idea.users.last_name].join(" "),
          profileImage: idea.users.profile_image
        },
        comments: [],
        title: idea.title,
        updatedAt: new Date(idea.updated_at ?? Date.now()).getTime(),
        description: idea.description ?? "",
        solution: idea.solution,
        problem: idea.problem,
        tags: []
      };
    }
  });
}
