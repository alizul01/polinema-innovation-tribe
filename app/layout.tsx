import type { PropsWithChildren } from "react";
import SupabaseProvider from "~/components/Supabase/SupabaseProvider";
import SupabaseListener from "~/components/Supabase/SupabaseListener";
import { createServerClient } from "~/utils/supabase-server";

// do not cache this layout
export const revalidate = 0;

export default async function AuthLayoutProvider(props: PropsWithChildren<{}>) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html>
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {props.children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
