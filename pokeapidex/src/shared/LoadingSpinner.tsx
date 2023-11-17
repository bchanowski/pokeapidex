import { Oval } from "react-loader-spinner";
import "./shared.scss";

type Props = {
  isLoading: boolean;
};

const LoadingSpinner = ({ isLoading }: Props) => {
  return (
    <div className="loading-spinner">
      <Oval
        height={100}
        width={100}
        color="#3b4cca"
        wrapperStyle={{}}
        wrapperClass=""
        visible={isLoading}
        ariaLabel="oval-loading"
        secondaryColor="#3b4cca"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoadingSpinner;
