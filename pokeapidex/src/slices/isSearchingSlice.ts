import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  searchValue: "",
};

const searchingSlice = createSlice({
  name: "isSearching",
  initialState,
  reducers: {
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    setSearchingValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setIsSearching, setSearchingValue } = searchingSlice.actions;

export default searchingSlice.reducer;
