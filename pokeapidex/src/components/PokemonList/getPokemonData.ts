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
      types,
    } = response.data;
    console.log(response.data);
    const newPokemon: IPokemon = {
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
