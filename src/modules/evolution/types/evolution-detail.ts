import { type z } from "zod";
import type { EvolutionDetailSchema } from "../schemas/evolution-detail.schema";

export type EvolutionDetail = z.infer<typeof EvolutionDetailSchema>;
