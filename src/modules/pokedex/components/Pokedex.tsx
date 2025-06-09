"use client";

import { PokemonList } from "@src/modules/pokemon/components/PokemonList";
import { useInfinitePokemons } from "@src/modules/pokemon/hooks/useInfinitePokemons";
import { AbsoluteLoader } from "@src/modules/shared/components/AbsoluteLoader";
import { Container } from "@src/modules/shared/components/Container";
import { Loader } from "@src/modules/shared/components/Loader";
import { PageError } from "@src/modules/shared/components/PageError";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { filterPokemon } from "../lib/utils";
import { usePokedexFilterStore } from "../stores/usePokedexFilterStore";
import { PokedexFilters } from "./PokedexFilters";

export const Pokedex = () => {
  const { inView, ref } = useInView();
  const { filters } = usePokedexFilterStore();
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinitePokemons();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) void fetchNextPage();
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <AbsoluteLoader />;
  if (error instanceof Error) return <PageError />;

  const allPokemons = data?.pages.flatMap((page) => page.pokemons) ?? [];

  const filteredPokemons = allPokemons.filter((pokemon) =>
    filterPokemon(pokemon, filters),
  );

  return (
    <>
      <div className="bg-background sticky top-14 z-20 py-2">
        <Container>
          <PokedexFilters />
        </Container>
      </div>
      <Container className="py-2">
        <PokemonList pokemons={filteredPokemons} />
        <div ref={ref} className="mt-8 flex items-center justify-center">
          {isFetchingNextPage && <Loader />}
        </div>
      </Container>
    </>
  );
};
