import { env } from "@src/env";
import { PokemonDetails } from "@src/modules/pokemon/components/PokemonDetails";
import { getPokemonByName } from "@src/modules/pokemon/lib/getPokemonByName";
import { getPokemonDetails } from "@src/modules/pokemon/lib/getPokemonDetails";
import { Container } from "@src/modules/shared/components/Container";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PokemonPage({ params }: PageProps) {
  const { id } = await params;

  const pokeApiUrl = env.NEXT_PUBLIC_POKEAPI_BASE_URL;

  const data = await getPokemonDetails(`${pokeApiUrl}/pokemon/${id}`);

  const evolutions = await Promise.all(
    data.evolutions.map(async (e) => {
      return e === data.name ? data : await getPokemonByName(e);
    }),
  );

  return (
    <Container className="py-2 md:py-4">
      <Link
        href="/"
        className="font-pokemon flex w-52 gap-2 rounded-xl border border-red-400 p-3 text-sm text-red-400 transition hover:bg-red-400 hover:text-white"
      >
        <ChevronLeft />
        Back to list
      </Link>
      <PokemonDetails pokemon={data} evolutions={evolutions} />
    </Container>
  );
}
