import axios from "axios";
import { PokemonType, PokemonsListType } from "./types";

export const getPokemonData = async (
  pokemonValue: number | string
): Promise<PokemonType | null> => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + pokemonValue
    );
    const {
      id,
      name,
      sprites: { front_default },
      types,
    } = response.data;
    console.log(response.data);
    const newPokemon: PokemonType = {
      id,
      name,
      sprites: {
        front_default,
      },
      types,
    };
    return newPokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPokemonList = async (): Promise<PokemonsListType | null> => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=1&limit=1016"
    );
    const newPokemonList: PokemonsListType = response.data.results;
    console.log(newPokemonList);
    return newPokemonList;
  } catch (error) {
    console.error(error);
    return null;
  }
};
