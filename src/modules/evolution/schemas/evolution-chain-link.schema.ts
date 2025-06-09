import { NamedAPIResourceSchema } from "@src/modules/shared/schemas/pokeapi.schema";
import { z } from "zod";
import { EvolutionDetailSchema } from "./evolution-detail.schema";

type EvolutionChainLink = {
  is_baby: boolean;
  species: z.infer<typeof NamedAPIResourceSchema>;
  evolution_details: z.infer<typeof EvolutionDetailSchema>[];
  evolves_to: EvolutionChainLink[];
};

export const EvolutionChainLinkSchema: z.ZodType<EvolutionChainLink> = z.lazy(
  () =>
    z.object({
      is_baby: z.boolean(),
      species: NamedAPIResourceSchema,
      evolution_details: z.array(EvolutionDetailSchema),
      evolves_to: z.array(EvolutionChainLinkSchema),
    }),
);
