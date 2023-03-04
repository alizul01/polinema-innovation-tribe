import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useSupabase } from "~/components/Supabase";
import type { AuthSchema } from "~/schema/Auth";

type UseUserLoginProps = {
  provider: "email" | "google";
};

export function useUserLogin(props: UseUserLoginProps) {
  const { supabase } = useSupabase();

  async function login(input?: { email: string; password: string }) {
    if (props.provider === "google") {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          scopes: "openid",
        },
      });
    }

    if (props.provider === "email") {
      if (input === undefined) {
        throw new Error("Email or password can't be empty!");
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: input.email,
        password: input.password,
      });
      if (error !== null) {
        throw error;
      }
    }
  }

  return useMutation({
    mutationFn: async (input?: AuthSchema) => {
      // don't need to use toast when using google provider
      if (props.provider === "google") {
        try {
          await login(input);
        } catch (err: unknown) {
          const errorMessage =
            err instanceof Error ? err.message : "Unknown Error";
          toast.error(errorMessage);
        }
        return;
      }

      await toast.promise(login(input), {
        error: (err: Error) => {
          // supabase errors
          if (err.name === "AuthApiError") {
            return err.message;
          }
          return `Failed to login. Reason: ${err.message}`;
        },
        loading: "Signing in...",
        success: "Signed in successfully",
      });
    },
  });
}
