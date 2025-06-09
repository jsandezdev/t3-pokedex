import { type z } from "zod";
import type { EvolutionChainLinkSchema } from "../schemas/evolution-chain-link.schema";

export type EvolutionChainLink = z.infer<typeof EvolutionChainLinkSchema>;
