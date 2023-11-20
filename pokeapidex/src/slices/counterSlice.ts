import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setCounterReset: () => initialState,
  },
});

export const { setCounter, setCounterReset } = counterSlice.actions;

export default counterSlice.reducer;
