import { configureStore } from "@reduxjs/toolkit";
import npcReducer from "./npcSlice.js";
import playerReducer from "./playerSlice.js";

export default configureStore({
  reducer: {
    npcList: npcReducer,
    playerData: playerReducer,
  },
});
