import pokeapiLogo from "@/assets/pokeapilogo.png";
import "./Navbar.scss";
import NavbarRightSide from "./NavbarRightSide";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { setPokemonDataToInitial } from "@/slices/pokemonDataSlice";
import { setCounterReset } from "@/slices/counterSlice";
import { setSearchingValue } from "@/slices/isSearchingSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (location.pathname === "/pokemon") {
      dispatch(setSearchingValue(""));
      dispatch(setPokemonDataToInitial());
      dispatch(setCounterReset());
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="navbar-container">
      <div className="image-container">
        <img
          alt="pokeapi-logo"
          src={pokeapiLogo}
          className="navbar-logo"
          onClick={handleClick}
        />
      </div>
      <NavbarRightSide />
    </div>
  );
};

export default Navbar;
