import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "~/types/Supabase/Database";

export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
