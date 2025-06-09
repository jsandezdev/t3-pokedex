import { Card } from "@src/modules/shared/components/Card";
import { cn } from "@src/modules/shared/utils";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { PokemonModel } from "../models/pokemon.model";
import { PokemonTypeBadge } from "./PokemonTypeBadge";

interface Props {
  pokemon: PokemonModel;
  evolutions: PokemonModel[];
}

export const PokemonDetails: FC<Props> = ({ pokemon, evolutions }) => {
  const { id, name, image, officialArtwork, generation, types, stats } =
    pokemon;

  const imageToDisplay = officialArtwork ?? image;

  return (
    <div className="font-pokemon relative flex flex-col items-center pt-32">
      {imageToDisplay && (
        <div className="absolute top-0 z-10">
          <Image
            src={imageToDisplay}
            alt={name}
            width={512}
            height={512}
            className="size-64"
          />
        </div>
      )}
      <Card className="gap-8 pt-32">
        <div className="flex flex-col items-center gap-2">
          <span className="font-pokemon pb-1 text-gray-200">
            #{String(id).padStart(3, "0")}
          </span>
          <h1 className="font-pokemon pb-3 font-semibold capitalize">{name}</h1>
          <div className="flex flex-wrap items-center justify-center gap-1">
            {types.map((type) => (
              <PokemonTypeBadge
                key={`pokemon_${id}_type_${type}`}
                type={type}
                size="lg"
              />
            ))}
          </div>
          <span className="mt-2 text-sm text-gray-500">
            {generation.toUpperCase().replace("GENERATION-", "Gen ")}
          </span>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-2 lg:gap-8">
          {evolutions.length > 0 && (
            <div className="flex flex-col items-center gap-2 md:items-start">
              <h2 className="mb-2 text-lg font-semibold">Evolutions</h2>
              <div className="flex w-full flex-col items-center gap-2 lg:flex-row lg:gap-4">
                {evolutions.map((evolution) => (
                  <Link
                    key={evolution.id}
                    href={`/${evolution.id}`}
                    className="w-full max-w-56 text-center"
                  >
                    <div
                      className={cn(
                        "flex w-full flex-col items-center rounded-lg border p-2 transition hover:border-red-400",
                        evolution.id === id
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200",
                      )}
                    >
                      {evolution.image && (
                        <Image
                          src={evolution.image}
                          alt={evolution.name}
                          width={64}
                          height={64}
                          className="size-12"
                        />
                      )}
                      <span className="mt-1 text-xs text-gray-400">
                        #{String(evolution.id).padStart(3, "0")}{" "}
                      </span>
                      <span className="mt-1 mb-2 text-xs capitalize">
                        {evolution.name}
                      </span>
                      <div className="flex flex-wrap items-center justify-center gap-1">
                        {evolution.types.map((type) => (
                          <PokemonTypeBadge
                            key={`pokemon_${id}_type_${type}`}
                            type={type}
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col items-center gap-2 md:col-span-2 md:items-start lg:col-span-1">
            <h2 className="mb-2 text-lg font-semibold">Base stats</h2>
            <div className="flex w-full flex-col gap-2">
              {stats.map((stat) => (
                <div key={stat.name} className="flex w-full items-center gap-2">
                  <span className="w-24 text-sm text-gray-700 capitalize">
                    {stat.name}
                  </span>
                  <div className="h-2 flex-grow rounded bg-gray-200">
                    <div
                      className="h-full rounded bg-red-400"
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-sm">
                    {stat.base_stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
