import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "~/types/Database";

export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
