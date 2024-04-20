import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
    message: "hell word",
  },
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload;
    },
  },
});

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;
