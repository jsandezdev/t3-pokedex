import { useGenerations } from "@src/modules/generation/hooks/useGenerations";
import { SearchInput } from "@src/modules/shared/components/SearchInput";
import { Select } from "@src/modules/shared/components/Select";
import { cn } from "@src/modules/shared/utils";
import { useTypes } from "@src/modules/type/hooks/useTypes";
import { useEffect, useState, type FC } from "react";
import { usePokedexFilterStore } from "../stores/usePokedexFilterStore";

export type PokedexFilters = {
  type: string;
  generation: string;
  search: string;
};

interface Props {
  className?: string;
}

export const PokedexFilters: FC<Props> = ({ className }) => {
  const { data: types, isLoading: isTypesLoading } = useTypes();
  const { data: generations, isLoading: isGenerationsLoading } =
    useGenerations();

  const { filters, setFilters } = usePokedexFilterStore();

  const [type, setType] = useState<string>(filters.type);
  const [generation, setGeneration] = useState<string>(filters.generation);
  const [search, setSearch] = useState<string>(filters.search);

  useEffect(() => {
    setFilters({
      type: type,
      generation: generation,
      search: search,
    });
  }, [type, generation, search, setFilters]);

  return (
    <div
      className={cn([
        "grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-5",
        className,
      ])}
    >
      <SearchInput
        placeholder="Search Pokemon by name"
        value={search}
        onChange={(value) => setSearch(value)}
      />
      <Select
        className="col-span-1"
        value={type}
        onChange={(value) => setType(value)}
        disabled={isTypesLoading}
        options={
          types?.map((t) => ({
            label: t.name.charAt(0).toUpperCase() + t.name.slice(1),
            value: t.name,
          })) ?? []
        }
        placeholder="Type"
      />
      <Select
        className="col-span-1"
        value={generation}
        onChange={(value) => setGeneration(value)}
        disabled={isGenerationsLoading}
        options={
          generations?.map((t) => ({
            label: t.name.replace("generation-", "").toUpperCase(),
            value: t.name,
          })) ?? []
        }
        placeholder="Generation"
      />
    </div>
  );
};
