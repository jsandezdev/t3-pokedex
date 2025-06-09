import Link from "next/link";
import { Container } from "./Container";
import { Pokeball } from "./icons/Pokeball";

export const Header = () => (
  <header className="sticky top-0 right-0 left-0 z-50 h-14 w-full overflow-hidden bg-red-400 shadow-md">
    <Pokeball className="absolute -top-10 -right-4 -z-10 size-32 text-red-500 opacity-75" />
    <Container className="relative flex h-full items-center gap-2">
      <h1 className="font-pokemon px-2 text-xl font-bold text-white">
        <Link href="/">Pokedex</Link>
      </h1>
    </Container>
  </header>
);
