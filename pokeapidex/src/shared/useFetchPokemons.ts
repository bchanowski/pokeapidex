import { useAppDispatch, useAppSelector } from "@/hooks";
import { getPokemonData } from "@/shared/getPokemonData";
import { setIsPokemonDataLoading } from "@/slices/isPokemonDataLoading";
import { setPokemonData, setPokemons } from "@/slices/pokemonDataSlice";
import { useCallback } from "react";
import { getPokemonCounterValue } from "./getPokemonCounterValue";
import { PokemonTypeState } from "./types";
export function useFetchPokemons() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const searchValue = useAppSelector((state) => state.isSearching.searchValue);
  const pokemonList = useAppSelector((state) => state.pokemonList.pokemons);
  return {
    fetchPokemons: useCallback(async () => {
      if (pokemonList) {
        if (searchValue.length > 0) {
          const filteredPokemonList = pokemonList.filter((pokemon) =>
            pokemon.name.startsWith(searchValue.toLowerCase())
          );

          for (let i = counter - 1; i < counter + 2; i++) {
            if (i >= filteredPokemonList.length) return;
            const newPokemon = await getPokemonData(
              filteredPokemonList[i].name
            );
            if (newPokemon) {
              dispatch(setPokemonData(newPokemon));
            }
          }
        } else {
          if (counter > 1017) {
            dispatch(setIsPokemonDataLoading(false));
            return;
          }
          const counterValue = getPokemonCounterValue();
          dispatch(setIsPokemonDataLoading(true));
          const pokemonsToAdd: PokemonTypeState = {
            pokemons: [],
          };
          for (let i = counter; i < counter + counterValue; i++) {
            if (i > 1017) return;
            const newPokemon = await getPokemonData(i);
            if (newPokemon) {
              pokemonsToAdd.pokemons[i] = newPokemon;
            }
          }
          dispatch(setPokemons(pokemonsToAdd));
          dispatch(setIsPokemonDataLoading(false));
        }
      }
    }, [counter, dispatch, searchValue, pokemonList]),
  };
}
