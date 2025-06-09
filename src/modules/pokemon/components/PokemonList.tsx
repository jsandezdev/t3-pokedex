"use client";

import type { FC } from "react";
import type { PokemonModel } from "../models/pokemon.model";
import { Pokemon } from "./Pokemon";

interface Props {
  pokemons: PokemonModel[];
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <div className="xs:grid-cols-2 xs:gap-2 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} model={pokemon} />
      ))}
    </div>
  );
};
