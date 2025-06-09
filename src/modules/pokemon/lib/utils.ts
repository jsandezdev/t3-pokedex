import type { Type } from "@src/modules/type/constants/type.enum";
import type { PokemonModel } from "../models/pokemon.model";

export const matchesType = (
  pokemon: PokemonModel,
  typeFilter?: Type,
): boolean => {
  return typeFilter ? pokemon.types.includes(typeFilter) : true;
};

export const matchesGeneration = (
  pokemon: PokemonModel,
  generationFilter?: string,
): boolean => {
  return generationFilter ? pokemon.generation === generationFilter : true;
};

export const matchesSearch = (
  pokemon: PokemonModel,
  search: string,
): boolean => {
  const lowerSearch = search.toLowerCase();

  return (
    pokemon.name.toLowerCase().includes(lowerSearch) ||
    pokemon.evolutions.some((evolution) =>
      evolution.toLowerCase().includes(lowerSearch),
    )
  );
};
