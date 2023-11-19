import "./Navbar.scss";
import { IoSearchCircle } from "react-icons/io5";
import { getPokemonList } from "@/shared/getPokemonData";
import { useAppDispatch } from "@/hooks";
import { setIsSearching } from "@/slices/isSearchingSlice";

const NavbarSearchInput = () => {
  const dispatch = useAppDispatch();
  const handleSearchChange = async (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > 2) {
      dispatch(setIsSearching(true));
      const startsWith = e.currentTarget.value;
      const pokemonList = await getPokemonList();
      if (pokemonList) {
        const filteredPokemonList = pokemonList.filter((pokemon) =>
          pokemon.name.startsWith(startsWith)
        );
        console.log(filteredPokemonList);
      }
    }
  };
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
