import type { z } from "zod";
import type { PokemonStatSchema } from "../schemas/pokemon-stat.schema";

export type PokemonStat = z.infer<typeof PokemonStatSchema>;
