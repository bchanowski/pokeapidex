import { useEffect, useState, useCallback } from "react";
import { PokemonType } from "@/shared/types";
import { getPokemonData } from "@/shared/getPokemonData";
import PokemonCard from "./PokemonCard";
import "./PokemonList.scss";
import LoadingSpinner from "@/shared/LoadingSpinner";
import { isAtBottom } from "./getIfAtBottom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setPokemonData } from "@/slices/pokemonDataSlice";

const PokemonList = () => {
  const pokemonData = useAppSelector((state) => state.pokemonData);
  const isSearching = useAppSelector((state) => state.isSearching.value);
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handleScroll = () => {
    const atBottom = isAtBottom();
    if (atBottom) setCounter((prevState) => prevState + 2);
  };
  const fetchPokemons = useCallback(async () => {
    if (counter > 1017) return;
    setIsLoading(true);
    for (let i = counter; i < counter + 2; i++) {
      if (i > 1017) return;
      const newPokemon = await getPokemonData(i);
      if (newPokemon) {
        console.log(newPokemon);
        dispatch(setPokemonData(newPokemon));
      }
    }
    setIsLoading(false);
  }, [counter, dispatch]);
  useEffect(() => {
    if (!isSearching) fetchPokemons();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchPokemons, isSearching]);
  return (
    <div className="pokemon-card-container" onScroll={handleScroll}>
      {pokemonData.pokemons.map((pokemon: PokemonType, key) => (
        <PokemonCard key={key} pokemon={pokemon} />
      ))}
      <LoadingSpinner isLoading={isLoading} />
    </div>
  );
};

export default PokemonList;
