import { useAppSelector } from "@/hooks";
import "./PokemonPage.scss";

const PokemonPage = () => {
  const selectedPokemonData = useAppSelector(
    (state) => state.pokemonData.pokemons[0]
  );
  const typeClass =
    "pokemon-page-card " +
    (selectedPokemonData
      ? "type-" + selectedPokemonData.types[0].type.name
      : "");

  return (
    <div className="pokemon-page-container">
      {selectedPokemonData ? (
        <div className={typeClass}>
          <p>{selectedPokemonData.name}</p>
          <p>
            {selectedPokemonData.types.map((type, key) => (
              <p key={key}>{type.type.name}</p>
            ))}
          </p>
          <div>
            <img
              className="pokemon-page-img"
              src={selectedPokemonData.sprites.front_default}
            />
            <img
              className="pokemon-page-img"
              src={selectedPokemonData.sprites.front_shiny}
            />
            <p>Abilities</p>
            {selectedPokemonData.abilities.map((ability, key) => (
              <p key={key}>{ability.ability.name}</p>
            ))}
            <p>Stats (Base Values)</p>
            {selectedPokemonData.stats.map((stat, key) => (
              <p key={key}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div>nie git</div>
      )}
    </div>
  );
};

export default PokemonPage;
