import { NamedAPIResourceSchema } from "@src/modules/shared/schemas/pokeapi.schema";
import { z } from "zod";

export const PokemonStatSchema = z.object({
  stat: NamedAPIResourceSchema,
  effort: z.number().int(),
  base_stat: z.number().int(),
});
