import "./Navbar.scss";
import { getPokemonList } from "@/shared/getPokemonData";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { setPokemonList } from "@/slices/pokemonListSlice";
import NavbarSearchInput from "./NavbarSearchInput";

const NavbarSearch = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPokemonList = async () => {
      dispatch(setPokemonList(await getPokemonList()));
    };
    fetchPokemonList();
  }, [dispatch]);
  return (
    <div className="navbar-right-search-container">
      <NavbarSearchInput />
    </div>
  );
};

export default NavbarSearch;
