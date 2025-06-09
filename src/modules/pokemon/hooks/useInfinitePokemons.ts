"use client";

import { pokeApiClient } from "@src/modules/shared/api/pokeapi.client";
import { NUM_RESULTS_PER_PAGE } from "@src/modules/shared/constants/constants";
import type { NamedAPIResourceList } from "@src/modules/shared/types/pokeapi";
import {
  type QueryFunctionContext,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { getPokemonDetails } from "../lib/getPokemonDetails";
import type { PokemonModel } from "../models/pokemon.model";

type Page = {
  pokemons: PokemonModel[];
  nextOffset: number | null;
};

const query = async ({ pageParam = 0 }: QueryFunctionContext) => {
  const limit = NUM_RESULTS_PER_PAGE;
  const offset = pageParam as number;

  const {
    data: { results, count },
  } = await pokeApiClient.get<NamedAPIResourceList>(
    `/pokemon?offset=${offset}&limit=${limit}`,
  );

  const pokemons = await Promise.all(
    results.map((p) => getPokemonDetails(p.url)),
  );
  const nextOffset = offset + limit < count ? offset + limit : null;

  return { pokemons, nextOffset };
};

export const useInfinitePokemons = () =>
  useInfiniteQuery<Page, Error>({
    queryKey: ["infinite-pokemons"],
    queryFn: query,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    staleTime: Infinity,
  });
