import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const isPokemonDataLoadingSlice = createSlice({
  name: "isPokemonDataLoading",
  initialState,
  reducers: {
    setIsPokemonDataLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsPokemonDataLoading } = isPokemonDataLoadingSlice.actions;

export default isPokemonDataLoadingSlice.reducer;
