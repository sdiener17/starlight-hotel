import { createSlice } from "@reduxjs/toolkit";
import { npcData } from "./npcData";

export const npcSlice = createSlice({
  name: "npcList",
  initialState: npcData,
  reducers: {
    updateNpcAvailable: (state, action) => {
      state.map((npc) => {
        if (npc.npcId === action.payload.npcId) {
          //   return {
          //     ...npc,
          //     npcIsAvailable: action.payload.updatedValue,
          //   };
          npc.npcIsAvailable = action.payload.updatedValue;
        } else {
          //   return npc;
        }
      });
    },
    updateNpcIsKnown: (state, action) => {
      state.map((npc) => {
        if (npc.npcId === action.payload.npcId) {
          npc.npcIsKnown = action.payload.updatedValue;
        }
      });
    },
  },
});

export function selectNpcFromId(l, id) {
  return l.filter((npc) => Number(npc.npcId) === id);
}

export function selectNpcCurrentTextSet(state, id) {
  //do something
}

// Action creators are generated for each case reducer function
export const { updateNpcAvailable, updateNpcIsKnown } = npcSlice.actions;

export default npcSlice.reducer;
