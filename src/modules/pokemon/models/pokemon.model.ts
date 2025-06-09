import type { Type } from "../../type/constants/type.enum";

interface PokemonStat {
  name: string;
  effort: number;
  base_stat: number;
}

export interface PokemonModel {
  id: number;
  name: string;
  image: string | null;
  officialArtwork: string | null;
  types: Type[];
  generation: string;
  evolutions: string[];
  stats: PokemonStat[];
}
