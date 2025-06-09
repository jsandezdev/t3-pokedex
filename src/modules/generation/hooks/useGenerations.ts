"use client";

import { pokeApiClient } from "@src/modules/shared/api/pokeapi.client";
import { NamedAPIResourceListSchema } from "@src/modules/shared/schemas/pokeapi.schema";
import type { NamedAPIResourceList } from "@src/modules/shared/types/pokeapi";
import { useQuery } from "@tanstack/react-query";

export const useGenerations = () => {
  const query = async () => {
    const { data: generations } =
      await pokeApiClient.get<NamedAPIResourceList>("generation");
    const result = NamedAPIResourceListSchema.safeParse(generations);
    if (!result.success) throw new Error(`Invalid generations data from API`);

    return generations.results;
  };

  return useQuery({ queryKey: ["generations"], queryFn: query });
};
