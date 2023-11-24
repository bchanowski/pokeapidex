import { useAppDispatch, useAppSelector } from "@/hooks";
import { getPokemonData } from "@/shared/getPokemonData";
import { setIsPokemonDataLoading } from "@/slices/isPokemonDataLoading";
import { setPokemons } from "@/slices/pokemonDataSlice";
import { useCallback } from "react";
import { getPokemonCounterValue } from "./getPokemonCounterValue";
import { PokemonTypeState } from "./types";
export const useFetchPokemons = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const searchValue = useAppSelector((state) => state.isSearching.searchValue);
  const pokemonList = useAppSelector((state) => state.pokemonList.pokemons);
  return {
    fetchPokemons: useCallback(async () => {
      if (pokemonList) {
        const counterValue = getPokemonCounterValue();
        const pokemonsToAdd: PokemonTypeState = {
          pokemons: [],
        };
        if (searchValue.length > 0) {
          dispatch(setIsPokemonDataLoading(true));
          const filteredPokemonList = pokemonList.filter((pokemon) =>
            pokemon.name.startsWith(searchValue.toLowerCase())
          );

          for (let i = counter - 1; i < counter + counterValue; i++) {
            if (i >= filteredPokemonList.length) break;
            const newPokemon = await getPokemonData(
              filteredPokemonList[i].name
            );
            if (newPokemon) {
              pokemonsToAdd.pokemons[i] = newPokemon;
            }
          }
        } else {
          if (counter > 1017) {
            dispatch(setIsPokemonDataLoading(false));
            return;
          }
          dispatch(setIsPokemonDataLoading(true));
          for (let i = counter; i < counter + counterValue; i++) {
            if (i > 1017) return;
            const newPokemon = await getPokemonData(i);
            if (newPokemon) {
              pokemonsToAdd.pokemons[i] = newPokemon;
            }
          }
        }
        dispatch(setPokemons(pokemonsToAdd));
        dispatch(setIsPokemonDataLoading(false));
      }
    }, [counter, dispatch, searchValue, pokemonList]),
  };
};
