import { IPokemon } from "./PokemonInterface";
import "./PokemonList.scss";

type Props = {
  pokemon: IPokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <>
      <div className="pokemon-card">{pokemon.name}</div>
      <div className="pokemon-card">{pokemon.name}</div>
      <div className="pokemon-card">{pokemon.name}</div>
      <div className="pokemon-card">{pokemon.name}</div>
      <div className="pokemon-card">{pokemon.name}</div>
    </>
  );
};

export default PokemonCard;
