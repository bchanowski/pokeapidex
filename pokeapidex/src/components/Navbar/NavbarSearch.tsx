import "./Navbar.scss";
import { getPokemonList } from "@/shared/getPokemonData";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { setPokemonList } from "@/slices/pokemonListSlice";
import NavbarSearchInput from "./NavbarSearchInput";
import { useLocation } from "react-router-dom";

const NavbarSearch = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    const fetchPokemonList = async () => {
      dispatch(setPokemonList(await getPokemonList()));
    };
    fetchPokemonList();
  }, [dispatch]);
  return (
    <div className="navbar-right-search-container">
      {location.pathname === "/" ? <NavbarSearchInput /> : <></>}
    </div>
  );
};

export default NavbarSearch;
