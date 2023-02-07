import { z } from "zod";

export const registrationSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .superRefine((fields, ctx) => {
    if (fields.password !== fields.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password didn't match",
        path: ["confirmPassword"],
      });
    }
  });

export type RegistrationSchema = z.infer<typeof registrationSchema>;
