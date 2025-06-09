import type { z } from "zod";
import type {
  APIResourceSchema,
  NamedAPIResourceListSchema,
  NamedAPIResourceSchema,
} from "../schemas/pokeapi.schema";

export type NamedAPIResourceList = z.infer<typeof NamedAPIResourceListSchema>;
export type NamedAPIResource = z.infer<typeof NamedAPIResourceSchema>;
export type APIResource = z.infer<typeof APIResourceSchema>;
