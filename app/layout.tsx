import type { PropsWithChildren } from "react";
import { SupabaseProvider, SupabaseListener } from "~/components/Supabase";
import { createServerClient } from "~/utils/supabase-server";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// do not cache this layout
export const revalidate = 0;

const queryClient = new QueryClient();

export default async function AuthLayoutProvider(props: PropsWithChildren<{}>) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html>
      <head />
      <body>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <SupabaseProvider session={session}>
            <SupabaseListener serverAccessToken={session?.access_token} />
            {props.children}
          </SupabaseProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
