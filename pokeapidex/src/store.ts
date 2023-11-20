import { configureStore } from "@reduxjs/toolkit";
import searchingReducer from "./slices/isSearchingSlice";
import pokemonDataReducer from "./slices/pokemonDataSlice";
import isPokemonDataLoadingReducer from "./slices/isPokemonDataLoading";
import counterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    isSearching: searchingReducer,
    pokemonData: pokemonDataReducer,
    isPokemonDataLoading: isPokemonDataLoadingReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
