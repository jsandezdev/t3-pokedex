import { type z } from "zod";
import type { PokemonSpeciesSchema } from "../schemas/pokemon-species.schema";

export type PokemonSpecies = z.infer<typeof PokemonSpeciesSchema>;
