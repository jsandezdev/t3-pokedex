import {
  matchesGeneration,
  matchesSearch,
  matchesType,
} from "@src/modules/pokemon/lib/utils";
import type { PokemonModel } from "@src/modules/pokemon/models/pokemon.model";
import type { Type } from "@src/modules/type/constants/type.enum";
import type { PokedexFilters } from "../components/PokedexFilters";

export const filterPokemon = (
  pokemon: PokemonModel,
  filters: PokedexFilters,
): boolean => {
  return (
    matchesType(pokemon, filters.type as Type) &&
    matchesGeneration(pokemon, filters.generation) &&
    matchesSearch(pokemon, filters.search)
  );
};
