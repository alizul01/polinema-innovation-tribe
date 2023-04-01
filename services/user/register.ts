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
                profile_image: `https://source.boringavatars.com/beam/120/${input.email}?colors=fca2e1,93b5ff,6be4dc,f9e3a9,4a6cb6`,
                
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
              if (
                err.message.includes("duplicate key value") &&
                err.message.includes("username")
              ) {
                return "User with the same username already exists!";
              }
              return err.message;
            }

            return `Failed to register. Reason: ${err.message}`;
          },
          success: "Successfully registered!",
        }
      );
    },
  });
}
