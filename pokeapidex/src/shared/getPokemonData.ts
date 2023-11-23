import axios from "axios";
import { PokemonType, PokemonsListType } from "./types";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonData = async (
  pokemonValue: number | string
): Promise<PokemonType | null> => {
  try {
    const response = await axios.get(BASE_URL + "/" + pokemonValue);
    const { id, name, sprites, types, abilities, stats } = response.data;
    const newPokemon: PokemonType = {
      id,
      name,
      sprites,
      types,
      abilities,
      stats,
    };
    return newPokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPokemonList = async (): Promise<PokemonsListType | null> => {
  try {
    const response = await axios.get(BASE_URL + "?offset=0&limit=1017");
    const newPokemonList: PokemonsListType = response.data.results;
    return newPokemonList;
  } catch (error) {
    console.error(error);
    return null;
  }
};
