import { z } from "zod";

export const NamedAPIResourceSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export const APIResourceSchema = z.object({
  url: z.string(),
});

export const NamedAPIResourceListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(NamedAPIResourceSchema),
});
