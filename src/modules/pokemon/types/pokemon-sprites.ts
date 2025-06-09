import type { z } from "zod";
import type { PokemonSpritesSchema } from "../schemas/pokemon-sprites.schema";

export type PokemonSprites = z.infer<typeof PokemonSpritesSchema>;
