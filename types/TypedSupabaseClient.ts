import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "./Database";

export type TypedSupabaseClient = SupabaseClient<Database>;
