import { NamedAPIResourceSchema } from "@src/modules/shared/schemas/pokeapi.schema";
import { z } from "zod";

export const PokemonTypeSchema = z.object({
  slot: z.number(),
  type: NamedAPIResourceSchema,
});
