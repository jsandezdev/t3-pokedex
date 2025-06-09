import { type z } from "zod";
import type { EvolutionChainSchema } from "../schemas/evolution-chain.schema";

export type EvolutionChain = z.infer<typeof EvolutionChainSchema>;
