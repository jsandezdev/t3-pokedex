import { type z } from "zod";
import { type PokemonSchema } from "../schemas/pokemon.schema";

export type Pokemon = z.infer<typeof PokemonSchema>;
