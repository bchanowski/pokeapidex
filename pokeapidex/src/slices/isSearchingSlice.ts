import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const isSearchingSlice = createSlice({
  name: "isSearching",
  initialState,
  reducers: {
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsSearching } = isSearchingSlice.actions;

export default isSearchingSlice.reducer;
