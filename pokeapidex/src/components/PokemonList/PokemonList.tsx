import { useEffect, useState, useCallback } from "react";
import { IPokemon } from "./PokemonInterface";
import { getPokemonData } from "./getPokemonData";
import PokemonCard from "./PokemonCard";
import "./PokemonList.scss";

interface IPokemonState {
  pokemons: IPokemon[];
}

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState<IPokemonState>({
    pokemons: [],
  });
  const [counter, setCounter] = useState(1);
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
    const threshold = 50;
    const atBottom = distanceFromBottom < threshold;
    if (atBottom) setCounter((prevState) => prevState + 2);
  };

  const fetchPokemons = useCallback(async () => {
    for (let i = counter; i < counter + 2; i++) {
      const newPokemon = await getPokemonData(i);
      if (newPokemon) {
        setPokemonData((prevState) => ({
          pokemons: [...prevState.pokemons, newPokemon],
        }));
      }
    }
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
    </div>
  );
};

export default PokemonList;
