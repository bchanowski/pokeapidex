import { useEffect, useCallback } from "react";
import { PokemonType } from "@/shared/types";
import PokemonCard from "./PokemonCard";
import "./PokemonList.scss";
import LoadingSpinner from "./LoadingSpinner";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useFetchPokemons } from "@/shared/useFetchPokemons";
import { setCounter } from "@/slices/counterSlice";
import { getPokemonCounterValue } from "@/shared/getPokemonCounterValue";
import { setIsPokemonDataLoading } from "@/slices/isPokemonDataLoading";
import { isAtBottom } from "./getIfAtBottom";

const PokemonList = () => {
  const pokemonData = useAppSelector((state) => state.pokemonData);
  const isSearching = useAppSelector((state) => state.isSearching.value);
  const { fetchPokemons } = useFetchPokemons();
  const dispatch = useAppDispatch();
  const handleScroll = useCallback(() => {
    if (isSearching) return;
    const bottom = isAtBottom();
    if (bottom) {
      dispatch(setCounter(getPokemonCounterValue()));
      fetchPokemons();
    }
  }, [dispatch, fetchPokemons, isSearching]);
  useEffect(() => {
    if (!isSearching) fetchPokemons();
    let timer: NodeJS.Timeout;
    const handleScrollWithTimeout = () => {
      clearTimeout(timer);
      dispatch(setIsPokemonDataLoading(true));
      timer = setTimeout(() => {
        handleScroll();
      }, 500);
    };
    window.addEventListener("scroll", handleScrollWithTimeout);
    return () => {
      window.removeEventListener("scroll", handleScrollWithTimeout);
      clearTimeout(timer);
    };
  }, [handleScroll, fetchPokemons, isSearching, dispatch]);
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
