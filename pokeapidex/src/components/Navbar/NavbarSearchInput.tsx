import "./Navbar.scss";
import { IoSearchCircle } from "react-icons/io5";
import { getPokemonList } from "@/shared/getPokemonData";
import { useAppDispatch } from "@/hooks";
import { useEffect, useState } from "react";
import { useFetchPokemons } from "@/shared/useFetchPokemons";
import { setPokemonDataToInitial } from "@/slices/pokemonDataSlice";
import { setCounterReset } from "@/slices/counterSlice";
import { setIsSearching, setSearchingValue } from "@/slices/isSearchingSlice";
import { setPokemonList } from "@/slices/pokemonListSlice";

const NavbarSearchInput = () => {
  const dispatch = useAppDispatch();
  const { fetchPokemonsById, fetchPokemonsByName } = useFetchPokemons();
  const [previousValue, setPreviousValue] = useState("");
  const handleSearchChange = async (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setPokemonDataToInitial());
    dispatch(setCounterReset());
    dispatch(setSearchingValue(e.currentTarget.value));
  };

  useEffect(() => {
    const fetchPokemonList = async () => {
      dispatch(setPokemonList(await getPokemonList()));
    };
    fetchPokemonList();
  }, [dispatch]);
  return (
    <div className="navbar-right-search-container">
      <label htmlFor="search-input" className="search-input-label">
        <input
          name="search-input"
          className="navbar-search-input"
          type="text"
          placeholder="Type a pokemon name..."
          onChange={handleSearchChange}
        />
        <IoSearchCircle className="search-input-icon" />
      </label>
    </div>
  );
};

export default NavbarSearchInput;
