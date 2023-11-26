import { createSlice } from "@reduxjs/toolkit";
import { exploreData } from "./exploreData";

export const exploreSlice = createSlice({
  name: "exploreData",
  initialState: exploreData,
  reducers: {
    updatePlayerHasOpened: (state, action) => {
      const location = state.find(
        (ex) => ex.locationId === action.payload.parentLocationId
      );
      location.data.map((discovery) => {
        if (discovery.id === action.payload.discoveryId) {
          discovery.playerHasOpened = action.payload.setValueTo;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePlayerHasOpened } = exploreSlice.actions;

export default exploreSlice.reducer;
