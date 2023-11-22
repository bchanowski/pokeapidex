import Navbar from "./components/Navbar/Navbar";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonPage from "./components/PokemonPage/PokemonPage";

function App() {
  return (
    <>
      <Navbar />
      <PokemonPage />
      <PokemonList />
    </>
  );
}

export default App;
