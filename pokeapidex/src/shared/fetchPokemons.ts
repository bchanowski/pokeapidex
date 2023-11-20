import { useAppDispatch, useAppSelector } from "@/hooks";
import { getPokemonData } from "@/shared/getPokemonData";
import { setIsPokemonDataLoading } from "@/slices/isPokemonDataLoading";
import { setPokemonData } from "@/slices/pokemonDataSlice";
import { useCallback } from "react";
export function useFetchData() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const isSearching = useAppSelector((state) => state.isSearching.value);
  return {
    fetchPokemons: useCallback(
      async (name?: string) => {
        if (name) {
          const newPokemon = await getPokemonData(name);
          if (newPokemon) {
            dispatch(setPokemonData(newPokemon));
          }
        } else {
          console.log(isSearching);
          if (isSearching) return;
          if (counter > 1017) return;
          dispatch(setIsPokemonDataLoading(true));
          for (let i = counter; i < counter + 2; i++) {
            if (i > 1017) return;
            const newPokemon = await getPokemonData(i);
            if (newPokemon) {
              dispatch(setPokemonData(newPokemon));
            }
          }
        }
        dispatch(setIsPokemonDataLoading(false));
      },
      [counter, dispatch]
    ),
  };
}
