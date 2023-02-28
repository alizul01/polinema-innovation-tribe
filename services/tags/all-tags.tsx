import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "~/components/Supabase";
import type { Tag } from "~/types/Idea/Index/Tag";

export function useTags() {
  const { supabase } = useSupabase();
  return useQuery({
    queryKey: ["tags"],
    queryFn: async (): Promise<Tag[]> => {
      const result = await supabase
        .from("tags")
        .select("id, name, slug, colour");
      return result.data ?? [];
    },
  });
}
