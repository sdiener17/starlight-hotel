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
    incrementNpcCurrTextSet: (state, action) => {
      state.map((npc) => {
        if (npc.npcId === action.payload.npcId) {
          npc.npcCurrTextSet += 1;
        }
      });
    },
  },
});

export function selectNpcFromId(npcl, id) {
  return npcl.find((npc) => Number(npc.npcId) === Number(id));
}

export function selectNpcCurrentTextSet(state, id) {
  //do something
}

// Action creators are generated for each case reducer function
export const { updateNpcAvailable, updateNpcIsKnown, incrementNpcCurrTextSet } =
  npcSlice.actions;

export default npcSlice.reducer;
