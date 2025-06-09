import { cn } from "@src/modules/shared/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { FC } from "react";

export const pokemonTypeBadgeVariants = cva(
  "inline-flex items-center rounded font-semibold uppercase font-pokemon text-white",
  {
    variants: {
      type: {
        normal: "bg-type-normal",
        fighting: "bg-type-fighting",
        flying: "bg-type-flying",
        poison: "bg-type-poison",
        ground: "bg-type-ground",
        rock: "bg-type-rock",
        bug: "bg-type-bug",
        ghost: "bg-type-ghost",
        steel: "bg-type-steel text-gray-900",
        fire: "bg-type-fire",
        water: "bg-type-water",
        grass: "bg-type-grass",
        electric: "bg-type-electric text-gray-900",
        psychic: "bg-type-psychic",
        ice: "bg-type-ice text-gray-900",
        dragon: "bg-type-dragon",
        dark: "bg-type-dark",
        fairy: "bg-type-fairy",
        stellar: "bg-type-stellar",
        unknown: "bg-type-unknown",
        shadow: "bg-type-shadow",
      },
      size: {
        sm: "text-[0.45rem] px-1.5 py-0.5",
        md: "text-[0.5rem] px-2 py-1",
        lg: "text-[0.6rem] px-3 py-1.5",
      },
    },
    defaultVariants: {
      type: "normal",
      size: "md",
    },
  },
);

interface Props
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pokemonTypeBadgeVariants> {}

export const PokemonTypeBadge: FC<Props> = ({
  className,
  type,
  size,
  ...props
}) => {
  return (
    <span
      className={cn(pokemonTypeBadgeVariants({ type, size }), className)}
      {...props}
    >
      {type}
    </span>
  );
};
