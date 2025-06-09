import {
  APIResourceSchema,
  NamedAPIResourceSchema,
} from "@src/modules/shared/schemas/pokeapi.schema";
import { z } from "zod";

export const PokemonSpeciesSchema = z.object({
  id: z.number(),
  name: z.string(),
  generation: NamedAPIResourceSchema,
  evolution_chain: APIResourceSchema,
});
