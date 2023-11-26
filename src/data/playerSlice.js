import { createSlice } from "@reduxjs/toolkit";
import { playerData } from "./playerData";

export const playerSlice = createSlice({
  name: "playerData",
  initialState: playerData,
  reducers: {
    updateLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateLocation } = playerSlice.actions;

export default playerSlice.reducer;
