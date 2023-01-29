import * as z from "zod";

export const authSchema = z.object({
  email: z.string().min(1).email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
});

export type AuthSchema = z.infer<typeof  authSchema>;
