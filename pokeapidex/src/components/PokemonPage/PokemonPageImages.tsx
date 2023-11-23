import { PokemonType } from "@/shared/types";
import "./PokemonPage.scss";

type Props = {
  selectedPokemonData: PokemonType;
};

const PokemonPageImages = ({ selectedPokemonData }: Props) => {
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
