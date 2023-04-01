import { z } from "zod";

export const ideaSchema = z.object({
  title: z.string().min(4),
  problem: z.string().min(10),
  solution: z.string().min(20),
  description: z.string().min(20),
  whatsapp: z.string(),
  deadline: z.coerce.date(),
});

export type IdeaSchema = z.infer<typeof ideaSchema>;
