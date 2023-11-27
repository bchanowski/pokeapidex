import Navbar from "./components/Navbar/Navbar";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonPage from "./components/PokemonPage/PokemonPage";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { setPokemonDataToInitial } from "./slices/pokemonDataSlice";
import { useFetchPokemons } from "./shared/useFetchPokemons";
import { setCounterReset } from "./slices/counterSlice";
import { setSearchingValue } from "./slices/isSearchingSlice";

function App() {
  const dispatch = useAppDispatch();
  const { fetchPokemons } = useFetchPokemons();
  useEffect(() => {
    const handleNavigation = () => {
      dispatch(setSearchingValue(""));
      dispatch(setCounterReset());
      dispatch(setPokemonDataToInitial());
      fetchPokemons();
    };
    window.addEventListener("popstate", handleNavigation);
    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, [dispatch, fetchPokemons]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon" element={<PokemonPage />} />
      </Routes>
    </>
  );
}

export default App;
