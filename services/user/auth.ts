import { useSupabase } from "~/components/Supabase";

export function useAuth() {
  const { session } = useSupabase();
  return session?.user;
}
