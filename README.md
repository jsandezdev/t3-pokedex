<h1 align="center">Welcome to T3 Pokeapi 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

A modern, responsive Pokédex built with the T3 Stack and the PokéAPI. This app allows you to:
- Browse all Pokémon
- Filter by type or generation
- Search by name
- View detailed info, base stats, and evolutions
- Designed to work seamlessly across desktop and mobile devices.

## Table of contents <!-- omit in toc -->
- [Install](#install)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Built with](#built-with)
- [Project structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)
- [Author](#author)

## Install

```sh
pnpm install
```

## Environment Variables
Create a .env.local file:

```sh
NODE_ENV=development
NEXT_PUBLIC_POKEAPI_BASE_URL=https://pokeapi.co/api/v2
```

## Usage

```sh
pnpm run dev
```

## Built with

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)
- [React Query](https://tanstack.com/query)
- [PokéAPI](https://pokeapi.co/)
- [pnpm](https://pnpm.io/)

## Project structure

```sh
src/
├── app/                 # Next.js app directory (routing, layouts, etc.)
├── modules/
│   ├── core/            # Shared components, utilities, and layout primitives
│   ├── evolution/       # Logic and components for handling Pokémon evolutions
│   ├── generation/      # Hooks and logic for generation filtering
│   ├── pokedex/         # Components and logic for the main Pokédex view
│   ├── pokemon/         # Pokémon detail components and API helpers
│   └── type/            # Type filters and type-related hooks/utilities
├── styles/              # Global styles, Tailwind setup, and font imports
├── env.js               # Zod + @t3-oss/env-nextjs configuration for environment variables
```

## Scripts

| Command             | Description                        |
| ------------------- | ------------------------------     |
| `pnpm dev`          | Start dev server                   |
| `pnpm build`        | Build for production               |
| `pnpm preview`      | Build & preview the app            |
| `pnpm lint`         | Run ESLint                         |
| `pnpm lint:fix`     | Run ESLint Auto-fix linting issues |
| `pnpm format:check` | Check formatting with Prettier     |
| `pnpm format:write` | Format all files with Prettier     |
| `pnpm typecheck`    | Run TypeScript type checker        |
| `pnpm check`        | Lint + typecheck                   |


## License

Distributed under the MIT License. See `LICENSE` for more information.

## Author

👤 **Jordi Sández**

* Github: [@jsandezdev](https://github.com/jsandezdev)

