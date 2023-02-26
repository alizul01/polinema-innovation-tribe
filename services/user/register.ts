import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useSupabase } from "~/components/Supabase";
import type { RegistrationSchema } from "~/schema/Registration";

export function useUserRegistration() {
  const { supabase } = useSupabase();
  return useMutation({
    mutationFn: async (input: RegistrationSchema) => {
      await toast.promise(
        new Promise(async (resolve, reject) => {
          const { data, error } = await supabase.auth.signUp({
            email: input.email,
            password: input.password,
            options: {
              data: {
                username: input.userName,
                first_name: input.firstName,
                last_name: input.lastName,
                // TODO: replace this with a nicer default bio
                bio: "Hi there! I'm a user",
              },
            },
          });
          if (error !== null) reject(error);
          resolve(data);
        }),
        {
          loading: "Registering...",
          error: (err: Error) => {
            // supabase errors
            if (err.name === "AuthApiError") {
              if (err.message.includes("duplicate key value")) {
                if (err.message.includes("email")) {
                  return "User with the same email already exists!";
                }
                if (err.message.includes("name")) {
                  return "User with the same name already exists!";
                }
              }
            }
            return `Failed to register. Reason: ${err.message}`;
          },
          success: "Successfully registered!",
        }
      );
    },
  });
}
