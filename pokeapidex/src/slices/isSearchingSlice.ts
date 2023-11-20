import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const searchingSlice = createSlice({
  name: "isSearching",
  initialState,
  reducers: {
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsSearching } = searchingSlice.actions;

export default searchingSlice.reducer;
