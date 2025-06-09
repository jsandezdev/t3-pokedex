import { pokeApiClient } from "@src/modules/shared/api/pokeapi.client";
import type { Type } from "@src/modules/type/constants/type.enum";
import type { PokemonModel } from "../models/pokemon.model";
import { PokemonSchema } from "../schemas/pokemon.schema";
import type { Pokemon } from "../types/pokemon";

export const getPokemonByName = async (name: string): Promise<PokemonModel> => {
  const { data: pokemon } = await pokeApiClient.get<Pokemon>(
    `/pokemon/${name}`,
  );
  const pokemonResult = PokemonSchema.safeParse(pokemon);
  if (!pokemonResult.success) throw new Error(`Invalid pokemon data from API`);

  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    officialArtwork: pokemon.sprites.other["official-artwork"].front_default,
    types: pokemon.types.map((t) => t.type.name as Type),
    stats: pokemon.stats.map((s) => ({ ...s, name: s.stat.name })),
    evolutions: [],
    generation: "",
  };
};
