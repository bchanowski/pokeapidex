import { Oval } from "react-loader-spinner";
import "@/shared/shared.scss";
import { useAppSelector } from "@/hooks";

const LoadingSpinner = () => {
  const isDataLoading = useAppSelector(
    (state) => state.isPokemonDataLoading.value
  );
  return (
    <div className="loading-spinner">
      <Oval
        height={100}
        width={100}
        color="#3b4cca"
        wrapperStyle={{}}
        wrapperClass=""
        visible={isDataLoading}
        ariaLabel="oval-loading"
        secondaryColor="#3b4cca"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoadingSpinner;
