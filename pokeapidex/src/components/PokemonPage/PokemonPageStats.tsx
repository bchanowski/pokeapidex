import { PokemonType } from "@/shared/types";
import "./PokemonPage.scss";

type Props = { selectedPokemonData: PokemonType };

const PokemonPageStats = ({ selectedPokemonData }: Props) => {
  return (
    <div className="stat-bar">
      <p className="pokemon-page-title">Stats (Base Values):</p>
      {selectedPokemonData.stats.map((stat, key) => (
        <div key={key}>
          <p>
            {stat.stat.name}: {stat.base_stat}
          </p>
          <div
            className="range-view"
            style={{ width: `${stat.base_stat / 2.55}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default PokemonPageStats;
