import { PokemonType, PokemonTypeState } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setPokemons: (state, action: PayloadAction<PokemonTypeState>) => {
      const uniqueSet = new Set(state.pokemons.map((item) => item.id));
      action.payload.pokemons.forEach((pokemon) => {
        if (!uniqueSet.has(pokemon.id)) {
          uniqueSet.add(pokemon.id);
          state.pokemons.push(pokemon);
        }
      });
    },
    setPokemonDataToInitial: () => initialState,
    setSelectedPokemon: (state, action: PayloadAction<PokemonType>) => {
      state.pokemons[0] = action.payload;
    },
  },
});

export const {
  setPokemonData,
  setPokemonDataToInitial,
  setSelectedPokemon,
  setPokemons,
} = pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
