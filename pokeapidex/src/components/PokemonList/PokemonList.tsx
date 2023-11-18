import { useEffect, useState, useCallback } from "react";
import { IPokemon } from "./PokemonInterface";
import { getPokemonData } from "./getPokemonData";
import PokemonCard from "./PokemonCard";
import "./PokemonList.scss";
import LoadingSpinner from "@/shared/LoadingSpinner";
import { isAtBottom } from "./getIfAtBottom";

interface IPokemonState {
  pokemons: IPokemon[];
}

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState<IPokemonState>({
    pokemons: [],
  });
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
        setPokemonData((prevState) => ({
          pokemons: [...prevState.pokemons, newPokemon],
        }));
      }
    }
    setIsLoading(false);
  }, [counter]);
  useEffect(() => {
    fetchPokemons();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchPokemons]);
  return (
    <div className="pokemon-card-container" onScroll={handleScroll}>
      {pokemonData.pokemons.map((pokemon: IPokemon, key) => (
        <PokemonCard key={key} pokemon={pokemon} />
      ))}
      <LoadingSpinner isLoading={isLoading} />
    </div>
  );
};

export default PokemonList;
