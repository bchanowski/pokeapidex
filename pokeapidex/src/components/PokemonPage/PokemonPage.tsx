import { useAppSelector } from "@/hooks";
import "./PokemonPage.scss";
import PokemonPageStats from "./PokemonPageStats";
import PokemonPageImages from "./PokemonPageImages";
import PokemonPageTopSide from "./PokemonPageTopSide";

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
          <div className="pokemon-page-right-side ">
            <PokemonPageTopSide selectedPokemonData={selectedPokemonData} />
            <PokemonPageImages selectedPokemonData={selectedPokemonData} />
          </div>
          <div className="pokemon-page-left-side">
            <PokemonPageStats selectedPokemonData={selectedPokemonData} />
          </div>
        </div>
      ) : (
        <h1>Unfortunately there is no pokemon selected for this page!</h1>
      )}
    </div>
  );
};

export default PokemonPage;
