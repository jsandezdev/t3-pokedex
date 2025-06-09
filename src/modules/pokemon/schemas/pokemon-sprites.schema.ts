import { z } from "zod";

export const PokemonSpritesSchema = z.object({
  front_default: z.string().nullable(),
  front_shiny: z.string().nullable(),
  front_female: z.string().nullable(),
  front_shiny_female: z.string().nullable(),
  back_default: z.string().nullable(),
  back_shiny: z.string().nullable(),
  back_female: z.string().nullable(),
  back_shiny_female: z.string().nullable(),
  other: z.object({
    "official-artwork": z.object({
      front_default: z.string().nullable(),
    }),
  }),
});
