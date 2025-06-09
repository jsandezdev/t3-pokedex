import { EvolutionChainSchema } from "@src/modules/evolution/schemas/evolution-chain.schema";
import type { EvolutionChain } from "@src/modules/evolution/types/evolution-chain";
import type { EvolutionChainLink } from "@src/modules/evolution/types/evolution-chain-link";
import { pokeApiClient } from "@src/modules/shared/api/pokeapi.client";
import type { Type } from "@src/modules/type/constants/type.enum";
import type { PokemonModel } from "../models/pokemon.model";
import { PokemonSpeciesSchema } from "../schemas/pokemon-species.schema";
import { PokemonSchema } from "../schemas/pokemon.schema";
import type { Pokemon } from "../types/pokemon";
import type { PokemonSpecies } from "../types/pokemon-species";

export const getPokemonDetails = async (url: string): Promise<PokemonModel> => {
  const { data: pokemon } = await pokeApiClient.get<Pokemon>(url);
  const pokemonResult = PokemonSchema.safeParse(pokemon);
  if (!pokemonResult.success) throw new Error(`Invalid pokemon data from API`);

  const { data: species } = await pokeApiClient.get<PokemonSpecies>(
    pokemon.species.url,
  );
  const speciesResult = PokemonSpeciesSchema.safeParse(species);
  if (!speciesResult.success) throw new Error(`Invalid species data from API`);

  const { data: evolutionChain } = await pokeApiClient.get<EvolutionChain>(
    species.evolution_chain.url,
  );
  const evolutionsResult = EvolutionChainSchema.safeParse(evolutionChain);
  if (!evolutionsResult.success)
    throw new Error(`Invalid evolutions data from API`);

  const extractEvolutions = (chain: EvolutionChainLink): string[] => {
    const names: string[] = [chain.species.name];
    let current = chain.evolves_to;

    while (current && current.length > 0 && current[0]) {
      names.push(current[0].species.name);
      current = current[0].evolves_to;
    }

    return names;
  };

  const evolutions = extractEvolutions(evolutionChain.chain);

  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    officialArtwork: pokemon.sprites.other["official-artwork"].front_default,
    types: pokemon.types.map((t) => t.type.name as Type),
    generation: species.generation.name,
    evolutions,
    stats: pokemon.stats.map((s) => ({ ...s, name: s.stat.name })),
  };
};
