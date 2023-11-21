import { PokemonListType, PokemonsListType } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PokemonTypeState = {
  pokemons: PokemonsListType | null;
};

const initialState: PokemonTypeState = {
  pokemons: [],
};

const pokemonListSlice = createSlice({
  name: "pokemonData",
  initialState,
  reducers: {
    setPokemonList: (
      state,
      action: PayloadAction<PokemonListType[] | null>
    ) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemonList } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
