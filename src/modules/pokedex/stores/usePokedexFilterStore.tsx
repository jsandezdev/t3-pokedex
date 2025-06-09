import { create } from "zustand";
import type { PokedexFilters } from "../components/PokedexFilters";

interface PokedexFilterStore {
  filters: PokedexFilters;
  setFilters: (filters: PokedexFilters) => void;
}

export const usePokedexFilterStore = create<PokedexFilterStore>((set) => ({
  filters: {
    type: "",
    generation: "",
    search: "",
  },
  setFilters: (filters) => set({ filters }),
}));
