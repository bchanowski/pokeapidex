import "./PokemonList.scss";
import { useAppSelector } from "@/hooks";

const LoadingSpinner = () => {
  const isDataLoading = useAppSelector(
    (state) => state.isPokemonDataLoading.value
  );
  return (
    <div className="loading-container">
      {isDataLoading ? <div className="loading-spinner" /> : <></>}
    </div>
  );
};

export default LoadingSpinner;
