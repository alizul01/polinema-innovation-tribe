import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { z } from "zod";

export const contactDetailSchema = z.object({
  name: z.string().min(1),
  suggestion: z.string().min(10),
});
export type ContactDetailSchema = z.infer<typeof contactDetailSchema>;

export function useSendSuggestion() {
  return useMutation({
    mutationFn: async (data: ContactDetailSchema) => {
      // TODO: implement mail sender
      await toast.promise(
        new Promise((resolve) => setTimeout(() => resolve(data), 1000)),
        {
          loading: "Sending your suggestion...",
          error: "Failed to send your suggestion",
          success: "Your suggestion has been sent!",
        }
      );
      return undefined;
    },
  });
}
