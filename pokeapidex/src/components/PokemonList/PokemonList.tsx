import { useEffect, useCallback } from "react";
import { PokemonType } from "@/shared/types";
import PokemonCard from "./PokemonCard";
import "./PokemonList.scss";
import LoadingSpinner from "@/shared/LoadingSpinner";
import { isAtBottom } from "./getIfAtBottom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useFetchPokemons } from "@/shared/useFetchPokemons";
import { setCounter } from "@/slices/counterSlice";
import { getPokemonCounterValue } from "@/shared/getPokemonCounterValue";

const PokemonList = () => {
  const pokemonData = useAppSelector((state) => state.pokemonData);
  const isSearching = useAppSelector((state) => state.isSearching.value);
  const { fetchPokemons } = useFetchPokemons();
  const dispatch = useAppDispatch();
  const handleScroll = useCallback(() => {
    if (isSearching) return;
    const atBottom = isAtBottom();
    if (atBottom) {
      dispatch(setCounter(getPokemonCounterValue()));
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
      {pokemonData.pokemons.map((pokemon: PokemonType, key) => (
        <PokemonCard key={key} pokemon={pokemon} />
      ))}

      <LoadingSpinner />
    </div>
  );
};

export default PokemonList;
