import { PokemonType } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PokemonTypeState = {
  pokemons: PokemonType[];
};

const initialState: PokemonTypeState = {
  pokemons: [],
};

const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState,
  reducers: {
    setPokemonData: (state, action: PayloadAction<PokemonType>) => {
      state.pokemons[action.payload.id] = action.payload;
    },
    setPokemonDataToInitial: () => initialState,
    setSelectedPokemon: (state, action: PayloadAction<PokemonType>) => {
      state.pokemons[0] = action.payload;
    },
  },
});

export const { setPokemonData, setPokemonDataToInitial, setSelectedPokemon } =
  pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
