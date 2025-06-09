import { NamedAPIResourceSchema } from "@src/modules/shared/schemas/pokeapi.schema";
import { z } from "zod";
import { PokemonSpritesSchema } from "./pokemon-sprites.schema";
import { PokemonStatSchema } from "./pokemon-stat.schema";
import { PokemonTypeSchema } from "./pokemon-type.schema";

export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  types: z.array(PokemonTypeSchema),
  sprites: PokemonSpritesSchema,
  species: NamedAPIResourceSchema,
  stats: z.array(PokemonStatSchema),
});
