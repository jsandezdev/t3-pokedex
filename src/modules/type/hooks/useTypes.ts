"use client";

import { pokeApiClient } from "@src/modules/shared/api/pokeapi.client";
import { NamedAPIResourceListSchema } from "@src/modules/shared/schemas/pokeapi.schema";
import type { NamedAPIResourceList } from "@src/modules/shared/types/pokeapi";
import { useQuery } from "@tanstack/react-query";

export const useTypes = () => {
  const query = async () => {
    const { data: types } =
      await pokeApiClient.get<NamedAPIResourceList>("type?limit=1000");
    const result = NamedAPIResourceListSchema.safeParse(types);
    if (!result.success) throw new Error(`Invalid types data from API`);

    return types.results;
  };

  return useQuery({ queryKey: ["types"], queryFn: query });
};
