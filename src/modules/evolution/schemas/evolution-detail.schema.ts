import { NamedAPIResourceSchema } from "@src/modules/shared/schemas/pokeapi.schema";
import { z } from "zod";

export const EvolutionDetailSchema = z.object({
  item: NamedAPIResourceSchema.nullable(),
  trigger: NamedAPIResourceSchema,
  gender: z.number().nullable(),
  held_item: NamedAPIResourceSchema.nullable(),
  known_move: NamedAPIResourceSchema.nullable(),
  known_move_type: NamedAPIResourceSchema.nullable(),
  location: NamedAPIResourceSchema.nullable(),
  min_level: z.number().nullable(),
  min_happiness: z.number().nullable(),
  min_beauty: z.number().nullable(),
  min_affection: z.number().nullable(),
  needs_overworld_rain: z.boolean(),
  party_species: NamedAPIResourceSchema.nullable(),
  party_type: NamedAPIResourceSchema.nullable(),
  relative_physical_stats: z.number().nullable(),
  time_of_day: z.string(),
  trade_species: NamedAPIResourceSchema.nullable(),
  turn_upside_down: z.boolean(),
});
