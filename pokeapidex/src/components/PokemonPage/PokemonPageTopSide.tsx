import { useAppSelector } from "@/hooks";
import "./PokemonPage.scss";

const PokemonPageTopSide = () => {
  const selectedPokemonData = useAppSelector(
    (state) => state.pokemonData.pokemons[0]
  );
  return (
    <div className="pokemon-page-data-container">
      <div>
        <p className="pokemon-page-title">{selectedPokemonData.name}</p>
        {selectedPokemonData.types.map((type, key) => (
          <p className="pokemon-page-text" key={key}>
            {type.type.name}
          </p>
        ))}
      </div>
      <div>
        <p className="pokemon-page-title">Abilities</p>
        {selectedPokemonData.abilities.map((ability, key) => (
          <p className="pokemon-page-text" key={key}>
            {ability.ability.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokemonPageTopSide;
