import "./Navbar.scss";
import { IoSearchCircle } from "react-icons/io5";
import { getPokemonList } from "@/shared/getPokemonData";
import { useAppDispatch } from "@/hooks";
import { setIsSearching } from "@/slices/isSearchingSlice";
import { useEffect, useState } from "react";
import { PokemonsListType } from "@/shared/types";
import { useFetchData } from "@/shared/fetchPokemons";
import { setPokemonDataToInitial } from "@/slices/pokemonDataSlice";
import { setCounterReset } from "@/slices/counterSlice";
import { setIsPokemonDataLoading } from "@/slices/isPokemonDataLoading";

const NavbarSearchInput = () => {
  const dispatch = useAppDispatch();
  const { fetchPokemons } = useFetchData();
  const [pokemonList, setPokemonList] = useState<PokemonsListType | null>();
  const handleSearchChange = async (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length >= 3) {
      dispatch(setPokemonDataToInitial());
      dispatch(setIsSearching(true));
      dispatch(setIsPokemonDataLoading(true));
      const startsWith = e.currentTarget.value;
      if (pokemonList) {
        const filteredPokemonList = pokemonList.filter((pokemon) =>
          pokemon.name.startsWith(startsWith)
        );

        for (let i = 0; i < filteredPokemonList.length; i++) {
          fetchPokemons(filteredPokemonList[i].name);
        }
      }
    } else if (e.currentTarget.value.length === 0) {
      dispatch(setIsSearching(false));
      dispatch(setPokemonDataToInitial());
      dispatch(setCounterReset());
      fetchPokemons();
    }
  };

  useEffect(() => {
    const fetchPokemonList = async () => {
      setPokemonList(await getPokemonList());
    };
    fetchPokemonList();
  }, []);
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
