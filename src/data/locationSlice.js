import { createSlice } from "@reduxjs/toolkit";
import { availableOptionsEnum, locationData } from "./locationData";

export const locationSlice = createSlice({
  name: "locations",
  initialState: locationData,
  reducers: {
    updateIsUnlocked: (state, action) => {
      state.map((loc) => {
        if (loc.locationId === action.payload.locationId) {
          //   return {
          //     ...npc,
          //     npcIsAvailable: action.payload.updatedValue,
          //   };
          loc.isUnlocked = action.payload.updatedValue;
        } else {
          //   return npc;
        }
      });
    },
  },
});

export function selectLocationById(locations, id) {
  return locations.filter((location) => location.locationId === id);
  //   locationState.map((loc) => {
  //     if (loc.locationId === id) {
  //       return loc;
  //     }
  //   });
  //   return undefined;
}

// export function selectAvailableOptionEnumDataById(id) {
//   availableOptionsEnum.map((op) => {
//     if (op.id === id) {
//       return op;
//     }
//   });
//   return "unknown";
// }

// Action creators are generated for each case reducer function
export const { updateIsUnlocked } = locationSlice.actions;

export default locationSlice.reducer;
