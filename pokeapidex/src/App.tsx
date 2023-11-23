import Navbar from "./components/Navbar/Navbar";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonPage from "./components/PokemonPage/PokemonPage";
import { Route, Routes } from "react-router-dom";

function App() {
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
