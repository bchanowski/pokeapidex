import { IPokemon } from "./PokemonInterface";
import "./PokemonList.scss";
import "@/shared/types.scss";

type Props = {
  pokemon: IPokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const typeClass = "pokemon type-" + pokemon.types[0].type.name;
  return (
    <>
      <div className="pokemon-card">
        <div className={typeClass}>
          <p className="pokemon-text">
            #{pokemon.id} {pokemon.name}
          </p>
          <div className="pokemon-image-container">
            <img
              className="pokemon-image"
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
            />
          </div>
          <p className="pokemon-text">
            {pokemon.types[0].type.name}{" "}
            {pokemon.types[1]?.type.name
              ? "& " + pokemon.types[1].type.name
              : ""}
          </p>
        </div>
      </div>
      <div className="pokemon-card">
        <div className={typeClass}>{pokemon.name}</div>
      </div>
      <div className="pokemon-card">
        <div className={typeClass}>{pokemon.name}</div>
      </div>
      <div className="pokemon-card">
        <div className={typeClass}>{pokemon.name}</div>
      </div>
      <div className="pokemon-card">
        <div className={typeClass}>{pokemon.name}</div>
      </div>
    </>
  );
};

export default PokemonCard;
