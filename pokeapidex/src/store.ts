import { configureStore } from "@reduxjs/toolkit";
import isSearchingReducer from "./slices/isSearchingSlice";
import pokemonDataReducer from "./slices/pokemonDataSlice";

const store = configureStore({
  reducer: {
    isSearching: isSearchingReducer,
    pokemonData: pokemonDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
