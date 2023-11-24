import { useAppSelector } from "@/hooks";
import "./PokemonPage.scss";

const PokemonPageImages = () => {
  const selectedPokemonData = useAppSelector(
    (state) => state.pokemonData.pokemons[0]
  );
  return (
    <div className="pokemon-page-data-container">
      <div>
        <img
          className="pokemon-page-img"
          src={selectedPokemonData.sprites.front_default}
        />
        <img
          className="pokemon-page-img"
          src={selectedPokemonData.sprites.back_default}
        />
      </div>
      <div>
        <img
          className="pokemon-page-img"
          src={selectedPokemonData.sprites.front_shiny}
        />
        <img
          className="pokemon-page-img"
          src={selectedPokemonData.sprites.back_shiny}
        />
      </div>
    </div>
  );
};

export default PokemonPageImages;
