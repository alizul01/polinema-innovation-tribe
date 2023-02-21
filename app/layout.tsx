import type { PropsWithChildren } from "react";
import SupabaseProvider from "~/components/Supabase/SupabaseProvider";
import SupabaseListener from "~/components/Supabase/SupabaseListener";
import { createServerClient } from "~/utils/supabase-server";
import { ReactQueryProvider } from "~/components/ReactQueryProvider";
import { ToasterWrapper } from "~/components/ToastProvider";

// do not cache this layout
export const revalidate = 0;

export default async function Layout(props: PropsWithChildren<{}>) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html>
      <head />
      <body>
        <ToasterWrapper />
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <ReactQueryProvider>{props.children}</ReactQueryProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
