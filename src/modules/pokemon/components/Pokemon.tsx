import { PokemonTypeBadge } from "@src/modules/pokemon/components/PokemonTypeBadge";
import { Card } from "@src/modules/shared/components/Card";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { PokemonModel } from "../models/pokemon.model";

interface Props {
  model: PokemonModel;
}

export const Pokemon: FC<Props> = ({ model }) => {
  const { id, name, image, types, generation } = model;

  return (
    <div className="font-pokemon relative flex flex-col items-center pt-12">
      {image && (
        <div className="absolute top-0 z-10">
          <Image
            width={96}
            height={96}
            src={image}
            alt={name}
            className="size-24"
          />
        </div>
      )}
      <Card className="grow pt-12">
        <span className="font-pokemon pb-1 text-xs text-gray-200">
          #{String(id).padStart(3, "0")}
        </span>
        <Link
          href={`/${id}`}
          className="font-pokemon pb-3 text-xs font-semibold capitalize"
        >
          {name}
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {types.map((type) => (
            <PokemonTypeBadge key={`pokemon_${id}_type_${type}`} type={type} />
          ))}
        </div>
        <span className="mt-2 text-[0.6rem] text-gray-500">
          {generation.toUpperCase().replace("GENERATION-", "Gen ")}
        </span>
      </Card>
    </div>
  );
};
