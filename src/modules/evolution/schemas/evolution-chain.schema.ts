import { NamedAPIResourceSchema } from "@src/modules/shared/schemas/pokeapi.schema";
import { z } from "zod";
import { EvolutionChainLinkSchema } from "./evolution-chain-link.schema";

export const EvolutionChainSchema = z.object({
  id: z.number(),
  baby_trigger_item: NamedAPIResourceSchema.nullable(),
  chain: EvolutionChainLinkSchema,
});
