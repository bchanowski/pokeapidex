import axios from "axios";
import { IPokemon } from "./PokemonInterface";

export const getPokemonData = async (
  pokemonId: number
): Promise<IPokemon | null> => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + pokemonId
    );
    const {
      id,
      name,
      sprites: { front_default },
    } = response.data;
    const newPokemon: IPokemon = {
      id,
      name,
      sprites: {
        front_default,
      },
    };
    return newPokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
};
