import { env } from "@src/env";
import axios from "axios";

export const pokeApiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_POKEAPI_BASE_URL,
  timeout: 10000,
});
