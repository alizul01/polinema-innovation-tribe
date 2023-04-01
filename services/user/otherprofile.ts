import { useQuery } from "@tanstack/react-query";
import { useAuth } from "~/services/user/auth";
import { useSupabase } from "~/components/Supabase";
import type { UserQueryResult } from "~/services/user/user-query-result";

type Profile = {
  id: string;
  name: string;
  bio: string;
  username: string;
  profileImage: string;
}

export function useOtherProfile(username: string) {
  const { supabase } = useSupabase();
  const session = useAuth();
  return useQuery<Profile | null>({
    queryKey: ["profiles", username],
    queryFn: async () => {
      if (session?.id === undefined) return null;
      const users = await supabase
        .from("users") // from users view, not from auth.users
        .select(`
          id,
          username,
          bio,
          first_name,
          last_name,
          profile_image
        `)
        .eq("username", username);
      if (users.data === null || users.data.length < 1) return null;

      const user = users.data[0] as UserQueryResult;
      return {
        id: user.id,
        username: user.username,
        bio: user.bio,
        name: [user.first_name, user.last_name].join(" "),
        profileImage: user.profile_image
      };
    }
  });
}
