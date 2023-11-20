import { useEffect, useCallback } from "react";
import { PokemonType } from "@/shared/types";
import PokemonCard from "./PokemonCard";
import "./PokemonList.scss";
import LoadingSpinner from "@/shared/LoadingSpinner";
import { isAtBottom } from "./getIfAtBottom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useFetchData } from "@/shared/fetchPokemons";
import { setCounter } from "@/slices/counterSlice";

const PokemonList = () => {
  const pokemonData = useAppSelector((state) => state.pokemonData);
  const isSearching = useAppSelector((state) => state.isSearching.value);
  const { fetchPokemons } = useFetchData();
  const dispatch = useAppDispatch();
  const handleScroll = useCallback(() => {
    if (isSearching) return;
    const atBottom = isAtBottom();
    if (atBottom) {
      dispatch(setCounter(2));
      fetchPokemons();
    }
  }, [dispatch, fetchPokemons, isSearching]);
  useEffect(() => {
    if (!isSearching) fetchPokemons();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, fetchPokemons, isSearching]);
  return (
    <div className="pokemon-card-container" onScroll={handleScroll}>
      {pokemonData.pokemons.length > 0 ? (
        pokemonData.pokemons.map((pokemon: PokemonType, key) => (
          <PokemonCard key={key} pokemon={pokemon} />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default PokemonList;
