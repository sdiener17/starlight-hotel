import { configureStore } from "@reduxjs/toolkit";
import npcReducer from "./npcSlice.js";
import playerReducer from "./playerSlice.js";
import locationReducer from "./locationSlice.js";
import exploreReducer from "./exploreSlice.js";

export default configureStore({
  reducer: {
    npcList: npcReducer,
    playerData: playerReducer,
    locations: locationReducer,
    exploreData: exploreReducer,
  },
});
